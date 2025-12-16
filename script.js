/**
 * Common functionality for Text Mini Tools
 */

// Footer Injection
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const footer = document.createElement('footer');

    // Check if we are on the home page
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || window.location.pathname.split('/').pop() === '';

    // Define footer content with columns
    footer.innerHTML = `
        <div class="container">
            <div class="footer-content">
                <div class="footer-col brand-col">
                    <div class="logo">Text Mini Tools</div>
                    <p class="footer-desc">
                        Fast, secure, and free text utilities running entirely in your browser. 
                        No data is ever sent to a server.
                    </p>
                </div>
                
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="index.html#all-tools">All Tools</a></li>
                        <li><a href="#" onclick="alert('About page coming soon!')">About</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Legal</h4>
                    <ul class="footer-links">
                        <li><a href="#" onclick="alert('Privacy Policy: No data is collected. Everything runs locally.')">Privacy Policy</a></li>
                        <li><a href="#" onclick="alert('Terms of Service coming soon!')">Terms of Service</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; ${currentYear} Text Mini Tools. All rights reserved.</p>
                ${!isHomePage ? '<p><a href="index.html" class="back-link">← Back to Home</a></p>' : ''}
            </div>
        </div>
    `;

    document.body.appendChild(footer);
});

// Copy to Clipboard Utility
// Used by various tools to copy the result
window.copyToClipboard = async function (elementId) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with id '${elementId}' not found.`);
        return;
    }

    // Get text from value (textarea/input) or textContent (div/pre)
    const text = element.value || element.textContent;

    try {
        await navigator.clipboard.writeText(text);

        // Find the button that triggered this call to show feedback
        // We look for a button that calls this specific function with this argument
        const selector = `button[onclick*="copyToClipboard('${elementId}')"]`;
        const btn = document.querySelector(selector);

        if (btn) {
            const originalText = btn.textContent;
            btn.textContent = 'Copied!';
            btn.style.backgroundColor = 'var(--accent)';
            btn.style.color = 'white';

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.style.color = '';
            }, 2000);
        }
    } catch (err) {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy to clipboard. Please select and copy manually.');
    }
};

// Search Functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('tool-search');

    if (searchInput) {
        const toolCards = document.querySelectorAll('.tool-card');
        const sections = document.querySelectorAll('section');

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();

            toolCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();

                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });

            // Hide empty sections
            sections.forEach(section => {
                const visibleCards = section.querySelectorAll('.tool-card:not([style*="display: none"])');
                if (visibleCards.length === 0) {
                    section.style.display = 'none';
                } else {
                    section.style.display = '';
                }
            });
        });
    }
});
