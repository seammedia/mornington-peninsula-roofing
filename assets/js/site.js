// Helpers
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

(function initHeader(){
  const header = $('[data-header]');
  if(!header) return;

  // Desktop submenus (click-to-toggle; close others)
  $$('.nav-desktop .has-sub', header).forEach(group => {
    const btn = $('.sub-toggle', group);
    const menu = $('.sub-menu', group);
    if(!btn || !menu) return;

    btn.addEventListener('click', (e) => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // close all others
      $$('.nav-desktop .sub-toggle', header).forEach(b=>{
        b.setAttribute('aria-expanded','false');
        const m = $('#' + b.getAttribute('aria-controls')) || b.parentElement.querySelector('.sub-menu');
        if(m) m.hidden = true;
      });
      btn.setAttribute('aria-expanded', String(!expanded));
      menu.hidden = expanded;
    });

    // close on outside click
    document.addEventListener('click', (e)=>{
      if(!group.contains(e.target)){
        btn.setAttribute('aria-expanded','false');
        menu.hidden = true;
      }
    });
  });

  // Mobile drawer
  const toggle = $('[data-menu-toggle]', header);
  const drawer = $('#mobile-drawer', header);
  const overlay = $('[data-overlay]', header);
  const closeBtn = $('[data-menu-close]', header);

  if (!toggle || !drawer || !overlay || !closeBtn) {
    console.warn('Mobile menu elements not found');
    return;
  }

  function openDrawer(){
    console.log('Opening mobile drawer');
    drawer.hidden = false; 
    overlay.hidden = false;
    
    // Force reflow before adding open class
    drawer.offsetHeight;
    
    drawer.setAttribute('data-open','true');
    toggle.setAttribute('aria-expanded','true');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    
    // Focus management with delay for animation
    setTimeout(() => {
      const first = drawer.querySelector('a:not([hidden]),button:not([hidden]),input,select,textarea,[tabindex]:not([tabindex="-1"])');
      if(first && first.offsetParent) {
        first.focus();
      }
    }, 100);
  }
  
  function closeDrawer(){
    console.log('Closing mobile drawer');
    drawer.removeAttribute('data-open');
    toggle.setAttribute('aria-expanded','false');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    
    // Hide elements after animation completes
    setTimeout(()=>{ 
      drawer.hidden = true; 
      overlay.hidden = true; 
      // Return focus to toggle button
      if(toggle) toggle.focus();
    }, 300);
  }

  // Event listeners with error handling
  if(toggle) {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Hamburger clicked');
      const isOpen = drawer.getAttribute('data-open') === 'true';
      if(isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }
  
  if(closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeDrawer();
    });
  }
  
  if(overlay) {
    overlay.addEventListener('click', closeDrawer);
  }
  
  // Keyboard support
  document.addEventListener('keydown', (e) => { 
    if(e.key === 'Escape' && drawer.getAttribute('data-open') === 'true') {
      closeDrawer();
    }
  });

  // Mobile accordions with smooth animation
  $$('.drawer .accordion', header).forEach(acc => {
    const btn = $('.acc-btn', acc);
    const panel = $('.acc-panel', acc);
    if(!btn || !panel) return;
    
    btn.addEventListener('click', (e)=>{
      e.preventDefault();
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      
      // Close all other accordions first
      $$('.drawer .accordion', header).forEach(otherAcc => {
        if(otherAcc !== acc) {
          const otherBtn = $('.acc-btn', otherAcc);
          const otherPanel = $('.acc-panel', otherAcc);
          if(otherBtn && otherPanel) {
            otherBtn.setAttribute('aria-expanded', 'false');
            otherPanel.setAttribute('aria-expanded', 'false');
            otherPanel.hidden = true;
          }
        }
      });
      
      // Toggle current accordion
      btn.setAttribute('aria-expanded', String(!expanded));
      panel.setAttribute('aria-expanded', String(!expanded));
      panel.hidden = expanded;
    });
  });
})();