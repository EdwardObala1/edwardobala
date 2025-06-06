function loadingScreen(){
    const loadingScreen = document.getElementById('loadingScreen');
    const progressBar = document.getElementById('progress');
    const content = document.querySelector('.content');
    let progress = 0;
  
    function updateProgress() {
      progress += 1;
      progressBar.style.width = progress + '%';
  
      if (progress >= 100) {
        clearInterval(intervalId);
        loadingScreen.style.display = 'none';
      }
    }
  
    const intervalId = setInterval(updateProgress, 20);
}