const customizeBtn = document.getElementById('customize-btn');
const closePanel = document.getElementById('closePanel');
const customizePanel = document.getElementById('customizePanel');
const colorSwatches = document.querySelectorAll('.color-swatch');
const darkModeBtn = document.getElementById('mode-toggle');

const body = document.body;
const overlay = document.getElementById('overlay');

customizeBtn.addEventListener('click', () => {
    customizePanel.classList.add('active');
    overlay.style.display = 'block';
});

closePanel.addEventListener('click', () => {
    customizePanel.classList.remove('active');
    overlay.style.display = 'none';
});

colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
        document.documentElement.style.setProperty('--brand', swatch.dataset.color);
    });
});

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

menuToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
    overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
    customizePanel.classList.remove('active');
    overlay.style.display = 'none';
});