window.addEventListener('load', () => {
    const preloader = document.querySelector('.loader_new');
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 2500); // Adjust delay as needed
  });