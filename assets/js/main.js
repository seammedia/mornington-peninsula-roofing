/**
 * Mornington Peninsula Roofing Company - Main JavaScript
 * 
 * Project Learnings and Key Insights:
 * 
 * 1. DESIGN PRINCIPLES IMPLEMENTED:
 *    - Clean, professional aesthetic targeting trade/construction industry
 *    - Minimalist approach with focus on readability and trust-building
 *    - Conservative color palette (grays, whites) with gold accent (#d4af37)
 *    - Typography emphasizes professionalism with uppercase styling and letter-spacing
 * 
 * 2. LAYOUT STRUCTURE:
 *    - Header with company branding and contact prominence
 *    - Navigation bar with clear service categories
 *    - Hero section with visual impact and company credentials
 *    - Content section focused on experience and trust-building
 * 
 * 3. RESPONSIVE DESIGN CONSIDERATIONS:
 *    - Mobile-first approach for navigation stacking
 *    - Flexible typography scaling for different screen sizes
 *    - Maintains visual hierarchy across all breakpoints
 * 
 * 4. BUSINESS CONSIDERATIONS:
 *    - Phone number prominently displayed for immediate contact
 *    - 25+ years experience highlighted to build credibility
 *    - Geographic specificity (Mornington Peninsula) for local SEO
 *    - Clear service messaging (residential/commercial roofing)
 * 
 * 5. TECHNICAL IMPLEMENTATIONS:
 *    - SVG icons for scalability and performance
 *    - CSS Grid and Flexbox for modern layout control
 *    - Semantic HTML structure for accessibility and SEO
 *    - Optimized background images using data URIs
 * 
 * 6. USER EXPERIENCE PATTERNS:
 *    - Immediate contact accessibility via prominent phone button
 *    - Clear visual hierarchy guiding user attention
 *    - Professional imagery suggesting quality and reliability
 *    - Minimal cognitive load with straightforward navigation
 * 
 * 7. CONVERSION OPTIMIZATION:
 *    - Multiple contact opportunities (header phone, navigation)
 *    - Trust signals (years in business, specialist positioning)
 *    - Clear service scope to qualify leads
 *    - Professional presentation to justify premium pricing
 */

// Main application initialization
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const navigation = document.querySelector('.navigation');
        if (window.scrollY > 100) {
            navigation.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
        } else {
            navigation.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });
    
    // Track phone number clicks for analytics
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Analytics tracking could be implemented here
            console.log('Phone number clicked:', this.href);
        });
    });
    
    // Initialize any additional interactive features
    initializeInteractiveFeatures();
});

/**
 * Initialize interactive features for enhanced user experience
 */
function initializeInteractiveFeatures() {
    
    // Add hover effects to navigation items
    const navItems = document.querySelectorAll('.nav-menu li a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add click animation to phone button
    const phoneButton = document.querySelector('.phone-number');
    if (phoneButton) {
        phoneButton.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
}

/**
 * FUTURE ENHANCEMENT OPPORTUNITIES:
 * 
 * 1. CONTACT FORM INTEGRATION:
 *    - Add quote request form with service type selection
 *    - Implement form validation and submission handling
 *    - Create thank you page with next steps
 * 
 * 2. SERVICE PAGES EXPANSION:
 *    - Dedicated pages for each service type
 *    - Before/after photo galleries
 *    - Customer testimonials and reviews
 * 
 * 3. LOCAL SEO ENHANCEMENTS:
 *    - Location-specific landing pages
 *    - Integration with Google My Business
 *    - Local schema markup implementation
 * 
 * 4. PERFORMANCE OPTIMIZATIONS:
 *    - Image optimization and lazy loading
 *    - Critical CSS inlining
 *    - Progressive web app features
 * 
 * 5. ANALYTICS AND TRACKING:
 *    - Google Analytics implementation
 *    - Conversion tracking setup
 *    - Heat mapping for user behavior analysis
 * 
 * 6. ACCESSIBILITY IMPROVEMENTS:
 *    - ARIA labels for screen readers
 *    - Keyboard navigation support
 *    - High contrast mode options
 */

// Export functions for testing or external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeInteractiveFeatures
    };
}