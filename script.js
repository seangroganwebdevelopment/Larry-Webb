document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-links').classList.toggle('active');
});

  // JavaScript to hide the text box on scroll and show it when scrolled back to the top
  window.addEventListener('scroll', function() {
    const textBox = document.getElementById('hero-text');
    if (window.scrollY > 0) {
        textBox.style.opacity = '0';
        textBox.style.visibility = 'hidden';
    } else {
        textBox.style.opacity = '1';
        textBox.style.visibility = 'visible';
    }
});