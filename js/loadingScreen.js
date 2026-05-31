function loadingScreen() {
    const screen = document.getElementById('loadingScreen');
    const bar = document.getElementById('progress');
    const label = document.getElementById('loadingPercent');
    let progress = 0;

    const id = setInterval(() => {
        progress += 1;
        if (bar) bar.style.width = progress + '%';
        if (label) label.textContent = progress + '%';

        if (progress >= 100) {
            clearInterval(id);
            setTimeout(() => {
                if (screen) screen.style.display = 'none';
            }, 150);
        }
    }, 18);
}
