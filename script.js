// Modern minimal interactions
document.addEventListener('DOMContentLoaded', () => {
    // Set current year
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Button interaction
    const btn = document.getElementById('actionBtn');
    const response = document.getElementById('response');
    const responseText = response?.querySelector('.response-text');

    const messages = [
        "Deployed successfully",
        "Ready to explore",
        "Minimal & modern",
        "Built with OpenClaw",
        "Static perfection"
    ];

    let isAnimating = false;

    btn?.addEventListener('click', () => {
        if (isAnimating) return;
        isAnimating = true;

        // Button feedback
        btn.style.transform = 'scale(0.96)';
        setTimeout(() => {
            btn.style.transform = '';
        }, 150);

        // Show response
        const message = messages[Math.floor(Math.random() * messages.length)];
        if (responseText) {
            responseText.textContent = message;
        }

        response?.classList.remove('hidden');

        // Auto-hide after delay
        setTimeout(() => {
            response?.classList.add('hidden');
            isAnimating = false;
        }, 2500);
    });

    // Subtle parallax on mouse move (desktop only)
    if (window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.card');
            const x = (e.clientX / window.innerWidth - 0.5) * 10;
            const y = (e.clientY / window.innerHeight - 0.5) * 10;

            cards.forEach((card, index) => {
                const factor = (index + 1) * 0.5;
                card.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
            });
        });
    }
});
