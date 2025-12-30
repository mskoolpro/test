/* ============================================================
   SKOOLPRO - INTERACTIVE FUNCTIONALITY
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize FAQ Accordion
    initializeFAQ();
    
    // Initialize Pricing Toggle
    initializePricingToggle();
    
    // Add smooth scroll for navigation links
    initializeSmoothScroll();
    
    // Add animation on scroll
    initializeScrollAnimation();
});

// ============================================================
// FAQ ACCORDION FUNCTIONALITY
// ============================================================

function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// ============================================================
// PRICING TOGGLE FUNCTIONALITY
// ============================================================

function initializePricingToggle() {
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            toggleButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the selected plan (monthly/yearly)
            const plan = this.getAttribute('data-plan');
            
            // Update pricing cards
            updatePricingCards(plan);
        });
    });
}

function updatePricingCards(plan) {
    const pricingCards = document.querySelectorAll('.pricing-card');
    
    pricingCards.forEach(card => {
        const amount = card.querySelector('.amount');
        const currentPrice = parseInt(amount.textContent.replace(/,/g, ''));
        
        if (plan === 'yearly') {
            // Apply 20% discount for yearly
            const discountedPrice = Math.round(currentPrice * 12 * 0.8);
            const monthlyPrice = Math.round(discountedPrice / 12);
            amount.textContent = monthlyPrice.toLocaleString();
        } else {
            // Reset to monthly price
            // Store original prices
            const originalPrices = {
                'Starter': 9999,
                'Professional': 24999,
                'Enterprise': 49999
            };
            
            const cardTitle = card.querySelector('.pricing-header h3').textContent;
            amount.textContent = originalPrices[cardTitle].toLocaleString();
        }
    });
}

// ============================================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================================

function initializeSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for sticky navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================================
// SCROLL ANIMATION - Fade in elements on scroll
// ============================================================

function initializeScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all feature cards, module cards, etc.
    document.querySelectorAll('.feature-card, .module-card, .benefit-item, .pricing-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// ============================================================
// BUTTON ACTIONS
// ============================================================

// Get all CTA buttons
const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonText = this.textContent.toLowerCase();
        
        if (buttonText.includes('trial') || buttonText.includes('free')) {
            // Start free trial action
            handleStartTrial();
        } else if (buttonText.includes('demo')) {
            // Schedule demo action
            handleScheduleDemo();
        } else if (buttonText.includes('choose')) {
            // Choose plan action
            handleChoosePlan(this);
        } else if (buttonText.includes('learn more')) {
            // Learn more action
            scrollToSection('#ai-learning');
        }
    });
});

function handleStartTrial() {
    showNotification('🎉 Free Trial Started!', 'You have 30 days of full access. Check your email for login credentials.', 'success');
}

function handleScheduleDemo() {
    showNotification('📅 Demo Scheduled', 'A sales representative will contact you within 24 hours.', 'success');
}

function handleChoosePlan(button) {
    const planName = button.closest('.pricing-card').querySelector('.pricing-header h3').textContent;
    showNotification('✅ Plan Selected', `You selected the ${planName} plan. Proceeding to checkout...`, 'success');
}

function scrollToSection(sectionId) {
    const element = document.querySelector(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ============================================================
// NOTIFICATION SYSTEM
// ============================================================

function showNotification(title, message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
        <button class="notification-close">×</button>
    `;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: white;
        border-left: 4px solid ${type === 'success' ? '#388E3C' : type === 'error' ? '#D32F2F' : '#1F51BA'};
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        max-width: 400px;
        z-index: 1000;
        animation: slideInUp 0.3s ease-out;
    `;
    
    // Add close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #999;
    `;
    
    closeBtn.addEventListener('click', function() {
        notification.remove();
    });
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// ============================================================
// ADD ANIMATION KEYFRAMES
// ============================================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ============================================================
// ADDITIONAL INTERACTIVITY - Stats Counter
// ============================================================

function initializeStatsCounter() {
    const statsSection = document.querySelector('.hero-stats');
    let hasRun = false;
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasRun) {
                hasRun = true;
                animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (statsSection) {
        observer.observe(statsSection);
    }
}

function animateCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        const numberValue = parseInt(finalValue.replace(/\D/g, ''));
        const unit = finalValue.replace(/[0-9]/g, '');
        
        let currentValue = 0;
        const increment = Math.ceil(numberValue / 50);
        
        const interval = setInterval(() => {
            currentValue += increment;
            if (currentValue >= numberValue) {
                currentValue = numberValue;
                clearInterval(interval);
            }
            stat.textContent = currentValue + unit;
        }, 30);
    });
}

// Initialize stats counter on page load
window.addEventListener('load', initializeStatsCounter);

// ============================================================
// MOBILE MENU TOGGLE (if implemented)
// ============================================================

function initializeMobileMenu() {
    // Check if there's a mobile menu button
    const menuButton = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.navbar-menu');
    
    if (menuButton && menu) {
        menuButton.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
}

initializeMobileMenu();

// ============================================================
// ANALYTICS TRACKING (Placeholder for integration)
// ============================================================

function trackEvent(eventName, eventData = {}) {
    // Replace with actual analytics service (Google Analytics, Mixpanel, etc.)
    console.log('Event tracked:', eventName, eventData);
}

// Track button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        trackEvent('button_clicked', {
            buttonText: this.textContent,
            buttonClass: this.className
        });
    });
});

// Track scroll events
let lastScrollPosition = 0;
window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScrollPosition + 500) {
        lastScrollPosition = currentScroll;
        trackEvent('page_scrolled', { scrollPosition: currentScroll });
    }
});

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

// Format currency
function formatCurrency(amount, currency = '₹') {
    return currency + amount.toLocaleString();
}

// Format large numbers
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num;
}

console.log('✅ SchoolHub ERP Landing Page Loaded Successfully');
