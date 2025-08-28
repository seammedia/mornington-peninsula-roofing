(()=>{

  const qs  = sel => document.querySelector(sel);
  const qsa = sel => Array.from(document.querySelectorAll(sel));

  const body = document.body;
  const overlay = qs('.mpr-overlay');
  const drawer  = qs('.mpr-drawer');
  const openBtn = qs('#mpr-open');
  const closeBtn= qs('#mpr-close');

  const openMenu = () => {
    drawer.classList.add('is-open');
    overlay.classList.add('is-open');
    body.classList.add('mpr-lock');
  };
  const closeMenu = () => {
    drawer.classList.remove('is-open');
    overlay.classList.remove('is-open');
    body.classList.remove('mpr-lock');
  };

  openBtn && openBtn.addEventListener('click', openMenu);
  closeBtn && closeBtn.addEventListener('click', closeMenu);
  overlay && overlay.addEventListener('click', closeMenu);
  window.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeMenu(); });

  // mobile accordion for Services & Locations
  qsa('.mpr-drawer-accordion-btn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const panel = btn.nextElementSibling;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      panel.style.display = expanded ? 'none' : 'block';
    });
  });

  // Mark active link by pathname
  const here = location.pathname.replace(/\/index\.html?$/,'/').toLowerCase();
  qsa('[data-nav]').forEach(a=>{
    const href = a.getAttribute('href') || '';
    if(href && here.endsWith(href.replace(/\/index\.html?$/,'/').toLowerCase())){
      a.classList.add('is-active');
    }
  });

})();