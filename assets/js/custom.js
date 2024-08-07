window.addEventListener('load', () => {
    const preloader = document.querySelector('.loader_new');
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 3000); // Adjust delay as needed
  });