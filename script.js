// MUSE Website JavaScript

// Smooth scrolling for anchor links
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

// Update explorer link when token mint address is available
// This will be updated with the actual mint address after token creation
const MUSE_TOKEN_MINT = 'YOUR_TOKEN_MINT_ADDRESS_HERE'; // Update after token creation
const SOLANA_NETWORK = 'devnet'; // Change to 'mainnet-beta' for production

function updateExplorerLink() {
    const explorerLink = document.getElementById('explorer-link');
    if (explorerLink && MUSE_TOKEN_MINT !== 'YOUR_TOKEN_MINT_ADDRESS_HERE') {
        const network = SOLANA_NETWORK === 'mainnet-beta' ? '' : `?cluster=${SOLANA_NETWORK}`;
        explorerLink.href = `https://explorer.solana.com/address/${MUSE_TOKEN_MINT}${network}`;
    } else if (explorerLink) {
        explorerLink.style.opacity = '0.5';
        explorerLink.style.cursor = 'not-allowed';
        explorerLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Token will be created soon!');
        });
    }
}

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.padding = '0.5rem 0';
    } else {
        header.style.padding = '1rem 0';
    }
    
    lastScroll = currentScroll;
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateExplorerLink();
    
    // Add fade-in animation for sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
});

// Copy token address (future feature)
function copyTokenAddress() {
    if (MUSE_TOKEN_MINT !== 'YOUR_TOKEN_MINT_ADDRESS_HERE') {
        navigator.clipboard.writeText(MUSE_TOKEN_MINT);
        alert('Token address copied to clipboard!');
    }
}

// Waitlist form handling
const GOOGLE_SHEETS_URL = 'YOUR_GOOGLE_SHEETS_WEB_APP_URL'; // Add your Google Sheets URL here

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('waitlistForm');
    const message = document.getElementById('waitlist-message');
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = form.querySelector('input[name="email"]').value;
            const submitButton = form.querySelector('button[type="submit"]');
            
            // Disable button and show loading
            submitButton.disabled = true;
            submitButton.textContent = 'Joining...';
            
            try {
                // Send to Google Sheets
                const response = await fetch(GOOGLE_SHEETS_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: email,
                        timestamp: new Date().toISOString()
                    })
                });
                
                // Show success message
                message.textContent = '✅ Thanks! You\'re on the waitlist. We\'ll notify you when MUSE launches!';
                message.style.color = '#00D170';
                message.style.display = 'block';
                
                // Reset form
                form.reset();
                
                // Reset button after delay
                setTimeout(() => {
                    submitButton.disabled = false;
                    submitButton.textContent = 'Join Waitlist';
                }, 2000);
                
            } catch (error) {
                // Show error message
                message.textContent = '❌ Oops! Please try again or email us at info@musemint.io';
                message.style.color = '#ff4444';
                message.style.display = 'block';
                
                submitButton.disabled = false;
                submitButton.textContent = 'Join Waitlist';
            }
        });
    }
});
