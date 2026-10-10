// Auto-hide intro after 3 seconds
    setTimeout(() => {
      const intro = document.getElementById('intro');
      intro.classList.add('hide');
      setTimeout(() => intro.style.display = 'none', 600);
    }, 3000);

    // Tap intro to skip
    document.getElementById('intro').addEventListener('click', () => {
      const intro = document.getElementById('intro');
      intro.classList.add('hide');
      setTimeout(() => intro.style.display = 'none', 600);
    });