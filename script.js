// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.pricing-card, .contact-item, .about-content, .section-header');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Music visualizer animation enhancement
const musicBars = document.querySelectorAll('.music-visualizer .bar');
let animationFrame;

function animateMusicBars() {
    musicBars.forEach((bar, index) => {
        const height = Math.random() * 100 + 50;
        bar.style.height = `${height}px`;
    });
    animationFrame = requestAnimationFrame(animateMusicBars);
}

// Start music animation when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        animateMusicBars();
    }, 1000);
});

// Stop animation when page is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        cancelAnimationFrame(animationFrame);
    } else {
        animateMusicBars();
    }
});

// Pricing card hover effects
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Contact form validation (if needed in future)
function validateContactForm(formData) {
    const errors = [];

    if (!formData.get('name').trim()) {
        errors.push('Nama harus diisi');
    }

    if (!formData.get('email').trim()) {
        errors.push('Email harus diisi');
    } else if (!isValidEmail(formData.get('email'))) {
        errors.push('Format email tidak valid');
    }

    if (!formData.get('message').trim()) {
        errors.push('Pesan harus diisi');
    }

    return errors;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// WhatsApp click tracking
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        // You can add analytics tracking here
        console.log('WhatsApp link clicked');
    });
});

// Instagram click tracking
document.querySelectorAll('a[href*="instagram.com"]').forEach(link => {
    link.addEventListener('click', () => {
        // You can add analytics tracking here
        console.log('Instagram link clicked');
    });
});

// Phone call tracking
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        // You can add analytics tracking here
        console.log('Phone number clicked');
    });
});

// Email tracking
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', () => {
        // You can add analytics tracking here
        console.log('Email link clicked');
    });
});

// Map click tracking
document.querySelectorAll('a[href*="maps.app.goo.gl"]').forEach(link => {
    link.addEventListener('click', () => {
        // You can add analytics tracking here
        console.log('Map link clicked');
    });
});

// Add loading animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function (e) {
        // Add loading state
        const originalText = this.textContent;
        this.textContent = 'Memuat...';
        this.style.pointerEvents = 'none';

        // Reset after a short delay (for demo purposes)
        setTimeout(() => {
            this.textContent = originalText;
            this.style.pointerEvents = 'auto';
        }, 1000);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;

    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add floating animation to studio preview icons
const studioIcons = document.querySelectorAll('.studio-preview i');
studioIcons.forEach((icon, index) => {
    icon.style.animationDelay = `${index * 0.5}s`;
});

// Add pulse effect to contact icons
document.querySelectorAll('.contact-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.animation = 'pulse 0.6s ease-in-out';
    });

    icon.addEventListener('animationend', () => {
        icon.style.animation = '';
    });
});

// Add CSS for pulse animation
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// Add scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    z-index: 9999;
    transition: width 0.3s ease;
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrollPercent + '%';
});

// Add back to top button
const backToTop = document.createElement('button');
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
`;

document.body.appendChild(backToTop);

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.opacity = '1';
        backToTop.style.visibility = 'visible';
    } else {
        backToTop.style.opacity = '0';
        backToTop.style.visibility = 'hidden';
    }
});

// Add hover effect to back to top button
backToTop.addEventListener('mouseenter', () => {
    backToTop.style.transform = 'translateY(-3px)';
    backToTop.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.4)';
});

backToTop.addEventListener('mouseleave', () => {
    backToTop.style.transform = 'translateY(0)';
    backToTop.style.boxShadow = '0 4px 15px rgba(99, 102, 241, 0.3)';
});

// Add page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Add touch gesture support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could be used for navigation
            console.log('Swipe up detected');
        } else {
            // Swipe down - could be used for navigation
            console.log('Swipe down detected');
        }
    }
}

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll-based animations and effects
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

console.log('Charta Studio website loaded successfully! 🎵'); 