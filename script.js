// Sample page interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Button click handler
    const btn = document.getElementById('clickBtn');
    const message = document.getElementById('message');
    
    const messages = [
        "🎉 Hello from OpenClaw!",
        "✨ This page is alive!",
        "🚀 Deployed to GitHub Pages!",
        "💡 Static sites are fast!",
        "🌟 Thanks for clicking!"
    ];
    
    btn.addEventListener('click', () => {
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        message.textContent = randomMsg;
        message.classList.remove('hidden');
        
        // Add a little animation
        message.style.opacity = '0';
        message.style.transform = 'translateY(-10px)';
        
        setTimeout(() => {
            message.style.transition = 'all 0.3s ease';
            message.style.opacity = '1';
            message.style.transform = 'translateY(0)';
        }, 10);
    });
});
