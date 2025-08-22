/**
 * Mornington Peninsula Roofing Company - Main JavaScript
 * 
 * ================================================================================
 * COMPREHENSIVE PROJECT LEARNINGS AND DEVELOPMENT INSIGHTS
 * ================================================================================
 * 
 * 1. DESIGN PRINCIPLES IMPLEMENTED:
 *    - Clean, professional aesthetic targeting trade/construction industry
 *    - Minimalist approach with focus on readability and trust-building
 *    - Conservative color palette (grays, whites) with gold accent (#d4af37)
 *    - Typography emphasizes professionalism with uppercase styling and letter-spacing
 *    - Visual-first approach prioritizing actual work imagery over text overlays
 * 
 * 2. LAYOUT STRUCTURE:
 *    - Header with company branding and contact prominence
 *    - Navigation bar with clear service categories
 *    - Hero section showcasing actual roofing work (no text overlay)
 *    - Content section focused on experience and trust-building
 *    - Organized asset structure for maintainability
 * 
 * 3. RESPONSIVE DESIGN CONSIDERATIONS:
 *    - Mobile-first approach for navigation stacking
 *    - Flexible typography scaling for different screen sizes
 *    - Maintains visual hierarchy across all breakpoints
 *    - Image optimization for various screen densities
 * 
 * 4. BUSINESS CONSIDERATIONS:
 *    - Phone number prominently displayed for immediate contact (03 4162 7766)
 *    - 25+ years experience highlighted to build credibility
 *    - Geographic specificity (Mornington Peninsula) for local SEO
 *    - Clear service messaging (residential/commercial roofing)
 *    - Custom domain setup: morningtonpeninsularoofing.com.au
 * 
 * 5. TECHNICAL IMPLEMENTATIONS:
 *    - Organized file structure with separated concerns
 *    - External CSS and JS files for better caching
 *    - Semantic HTML structure for accessibility and SEO
 *    - High-quality hero image showcasing actual work
 *    - Git version control with meaningful commit messages
 * 
 * 6. USER EXPERIENCE PATTERNS:
 *    - Immediate contact accessibility via prominent phone button
 *    - Clear visual hierarchy guiding user attention
 *    - Professional imagery suggesting quality and reliability
 *    - Minimal cognitive load with straightforward navigation
 *    - Clean hero section letting work speak for itself
 * 
 * 7. CONVERSION OPTIMIZATION:
 *    - Multiple contact opportunities (header phone, navigation)
 *    - Trust signals (years in business, specialist positioning)
 *    - Clear service scope to qualify leads
 *    - Professional presentation to justify premium pricing
 *    - Visual proof of quality through actual project photography
 * 
 * 8. DEPLOYMENT AND HOSTING INSIGHTS:
 *    - Vercel deployment for global CDN performance
 *    - Security headers implementation (XSS protection, content type options)
 *    - Asset caching optimization for performance
 *    - SSL certificate automation for custom domain
 *    - Production URL: https://mornington-peninsula-roofing-cfnkkufxm-seammedias-projects.vercel.app
 * 
 * 9. CONTENT STRATEGY LEARNINGS:
 *    - "Show, don't tell" approach with hero imagery
 *    - Removed text overlays that competed with visual impact
 *    - Focused on demonstrating quality through actual work examples
 *    - Clean, uncluttered presentation builds trust
 * 
 * 10. DEVELOPMENT WORKFLOW INSIGHTS:
 *     - Git-based version control for change tracking
 *     - Structured commit messages for project history
 *     - Automated deployment pipeline via Vercel CLI
 *     - Asset organization for scalability
 *     - Configuration files for deployment optimization
 * 
 * 11. PERFORMANCE CONSIDERATIONS:
 *     - Separated CSS/JS files for browser caching
 *     - Optimized image formats and sizing
 *     - Clean HTML structure for fast parsing
 *     - Minimal external dependencies
 *     - CDN delivery via Vercel global network
 * 
 * 12. LOCAL BUSINESS OPTIMIZATION:
 *     - Geographic targeting in title and content
 *     - Local phone number prominently featured
 *     - Service area clearly defined (Mornington Peninsula)
 *     - Professional credibility through experience messaging
 *     - Visual portfolio approach for immediate impact
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
    
    // Initialize contact form handling
    initializeContactForm();
    
    // Initialize any additional interactive features
    initializeInteractiveFeatures();
});

/**
 * Initialize contact form with client-side validation and submission handling
 */
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('formSuccess');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const phone = formData.get('phone').trim();
        const message = formData.get('message').trim();
        
        // Clear previous error states
        clearFormErrors();
        
        // Validate all fields
        let isValid = true;
        
        isValid = validateField('name', name, true) && isValid;
        isValid = validateField('email', email, true) && isValid;
        isValid = validateField('phone', phone, false) && isValid;
        
        if (!isValid) {
            // Focus first error field
            const firstError = document.querySelector('.form-group.error input, .form-group.error textarea, .form-group.error select');
            if (firstError) firstError.focus();
            return;
        }
        
        // Simulate form submission (replace with actual backend integration)
        submitForm(formData);
    });
}

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Clear form error states
 */
function clearFormErrors() {
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        group.classList.remove('error');
        const errorElement = group.querySelector('.field-error');
        if (errorElement) {
            errorElement.textContent = '';
        }
    });
}

/**
 * Show field error
 */
function showFieldError(fieldName, message) {
    const field = document.getElementById(fieldName);
    const formGroup = field.closest('.form-group');
    const errorElement = document.getElementById(fieldName + '-error');
    
    formGroup.classList.add('error');
    errorElement.textContent = message;
}

/**
 * Validate individual field
 */
function validateField(fieldName, value, required = false) {
    let isValid = true;
    let message = '';
    
    switch(fieldName) {
        case 'name':
            if (required && (!value || value.trim() === '')) {
                isValid = false;
                message = 'Name is required';
            } else if (value && value.trim().length < 2) {
                isValid = false;
                message = 'Name must be at least 2 characters';
            }
            break;
            
        case 'email':
            if (required && (!value || value.trim() === '')) {
                isValid = false;
                message = 'Email is required';
            } else if (value && !isValidEmail(value)) {
                isValid = false;
                message = 'Please enter a valid email address';
            }
            break;
            
        case 'phone':
            if (value && !/^[\d\s\-\+\(\)]+$/.test(value)) {
                isValid = false;
                message = 'Please enter a valid phone number';
            }
            break;
    }
    
    if (!isValid) {
        showFieldError(fieldName, message);
    }
    
    return isValid;
}

/**
 * Handle form submission
 */
function submitForm(formData) {
    const submitButton = document.querySelector('.submit-button');
    const successMessage = document.getElementById('formSuccess');
    const form = document.getElementById('contactForm');
    
    // Disable submit button during processing
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    
    // Simulate API call delay
    setTimeout(() => {
        // Reset button
        submitButton.disabled = false;
        submitButton.textContent = 'Send';
        
        // Show success message
        successMessage.style.display = 'block';
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Clear form
        form.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
        
        // Log for analytics (replace with actual analytics tracking)
        console.log('Form submitted:', Object.fromEntries(formData));
        
        // TODO: Replace with actual backend integration
        // Example: 
        // fetch('/api/contact', {
        //     method: 'POST',
        //     body: formData
        // }).then(response => {
        //     // Handle response
        // });
        
    }, 1000); // Simulate 1 second processing time
}

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
 * ================================================================================
 * FUTURE ENHANCEMENT OPPORTUNITIES & ROADMAP
 * ================================================================================
 * 
 * IMMEDIATE PRIORITIES (Next 30 days):
 * 1. CONTACT FORM INTEGRATION:
 *    - Add quote request form with service type selection
 *    - Implement form validation and submission handling
 *    - Create thank you page with next steps
 *    - Add contact form to Vercel Functions for serverless processing
 * 
 * 2. ANALYTICS IMPLEMENTATION:
 *    - Google Analytics 4 setup for visitor tracking
 *    - Conversion tracking for phone clicks and form submissions
 *    - Vercel Analytics integration for performance monitoring
 *    - Heat mapping setup for user behavior analysis
 * 
 * SHORT-TERM GOALS (Next 90 days):
 * 3. CONTENT EXPANSION:
 *    - Add more project gallery images to showcase work variety
 *    - Create dedicated service pages (residential, commercial, repairs)
 *    - Add customer testimonials and reviews section
 *    - Include before/after project showcases
 * 
 * 4. LOCAL SEO OPTIMIZATION:
 *    - Implement local business schema markup
 *    - Create location-specific landing pages for suburbs
 *    - Integrate with Google My Business API
 *    - Add service area maps and coverage information
 * 
 * MEDIUM-TERM ENHANCEMENTS (Next 6 months):
 * 5. ADVANCED FEATURES:
 *    - Progressive Web App (PWA) implementation
 *    - Online quote calculator with material costs
 *    - Project timeline tracker for customers
 *    - Photo upload feature for quote requests
 * 
 * 6. PERFORMANCE & ACCESSIBILITY:
 *    - Image lazy loading and WebP format optimization
 *    - Critical CSS inlining for faster first paint
 *    - Full accessibility audit and WCAG compliance
 *    - Performance budget implementation
 * 
 * LONG-TERM VISION (6+ months):
 * 7. BUSINESS AUTOMATION:
 *    - CRM integration for lead management
 *    - Automated email sequences for follow-ups
 *    - Online scheduling system for consultations
 *    - Customer portal for project updates
 * 
 * 8. ADVANCED MARKETING FEATURES:
 *    - Blog/news section for content marketing
 *    - Social media integration and feeds
 *    - Email newsletter signup and campaigns
 *    - Referral program implementation
 * 
 * TECHNICAL DEBT & MAINTENANCE:
 * 9. CODE OPTIMIZATION:
 *    - TypeScript implementation for better type safety
 *    - CSS custom properties for better theme management
 *    - Component-based architecture migration
 *    - Automated testing suite implementation
 * 
 * 10. SECURITY & COMPLIANCE:
 *     - Security audit and penetration testing
 *     - GDPR compliance for data collection
 *     - Regular dependency updates and vulnerability scanning
 *     - Backup and disaster recovery planning
 */

// Export functions for testing or external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeInteractiveFeatures
    };
}