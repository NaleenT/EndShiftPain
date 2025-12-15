// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscribeForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = form.querySelector('.email-input');
            const email = emailInput.value;
            
            // Basic email validation
            if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                // Show success message
                alert('Thank you for subscribing! We\'ll be in touch soon.');
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // Add smooth fade-in animation
    document.querySelector('.hero-content').style.animation = 'fadeIn 1s ease-out';
});

// Add fade-in keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
