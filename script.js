// Smooth scrolling for internal links
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

// Add scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    // Add initial styles for animation
    const animatedElements = document.querySelectorAll('.section, .project-card, .skill-category, .cert-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Enhanced project card flip functionality
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        let isFlipped = false;
        let hoverTimeout;
        
        // Click to toggle flip state (stays flipped until clicked again)
        card.addEventListener('click', (e) => {
            // Don't flip if clicking on a link
            if (e.target.tagName === 'A' || e.target.closest('a')) {
                return;
            }
            
            e.preventDefault();
            isFlipped = !isFlipped;
            
            if (isFlipped) {
                card.classList.add('flipped');
                card.style.transform = 'rotateY(180deg)';
            } else {
                card.classList.remove('flipped');
                card.style.transform = 'rotateY(0deg)';
            }
        });
        
        // Hover effects (only if not manually flipped)
        card.addEventListener('mouseenter', () => {
            if (!isFlipped) {
                clearTimeout(hoverTimeout);
                hoverTimeout = setTimeout(() => {
                    if (!isFlipped) {
                        card.style.transform = 'rotateY(180deg)';
                    }
                }, 500); // 500ms delay before auto-flip
            }
        });
        
        card.addEventListener('mouseleave', () => {
            clearTimeout(hoverTimeout);
            if (!isFlipped) {
                card.style.transform = 'rotateY(0deg)';
            }
        });
        
        // Prevent links from triggering card flip
        const links = card.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.stopPropagation();
            });
        });
    });

    // Add click tracking for analytics (optional)
    const trackableLinks = document.querySelectorAll('a[href^="http"]');
    trackableLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Add analytics tracking here if needed
            console.log('Link clicked:', link.href);
        });
    });

    // Add typing effect to the name (optional enhancement)
    const nameElement = document.querySelector('.name');
    if (nameElement) {
        const originalText = nameElement.textContent;
        nameElement.textContent = '';
        let i = 0;
        
        const typeWriter = () => {
            if (i < originalText.length) {
                nameElement.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing effect after a short delay
        setTimeout(typeWriter, 500);
    }

    // Add parallax effect to header
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add copy email functionality
document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            e.preventDefault();
            const email = emailLink.href.replace('mailto:', '');
            
            // Try to copy to clipboard
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showNotification('Email copied to clipboard!');
                }).catch(() => {
                    // Fallback: open email client
                    window.location.href = emailLink.href;
                });
            } else {
                // Fallback for older browsers
                window.location.href = emailLink.href;
            }
        });
    }
});

// Show notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 1000;
        font-weight: 500;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
