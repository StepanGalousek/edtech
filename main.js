
document.addEventListener('DOMContentLoaded', () => {
    console.log('Stránka je připravena na Vánoce!');
    createSnowfall();
});

function createSnowfall() {
    const snowContainer = document.getElementById('snow-container');
    if (!snowContainer) return;

    for (let i = 0; i < 150; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5 to 10 seconds
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowflake.style.opacity = Math.random();
        snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;

        snowContainer.appendChild(snowflake);
    }
}
