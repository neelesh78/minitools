/**
 * Common functionality for Text Mini Tools
 */

// Footer Injection
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const footer = document.createElement('footer');

    // Check if we are on the home page
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || window.location.pathname.split('/').pop() === '';

    let footerContent = `
        <div class="container">
            <p>&copy; ${currentYear} Text Mini Tools. All rights reserved.</p>
    `;

    // Add Home link if not on home page
    if (!isHomePage) {
        footerContent += `
            <p style="margin-top: 0.5rem;">
                <a href="index.html" style="color: var(--accent);">Back to Home</a>
            </p>
        `;
    }

    footerContent += `</div>`;
    footer.innerHTML = footerContent;

    // Insert footer
    // Try to find the placeholder comment, or just append to body
    // Since comments are nodes, we can try to replace it, but appending to body is safer and consistent with flex layout.
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
