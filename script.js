//menu
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const toggleBtn = document.getElementById('toggleMenu');
    if (menu.style.display === 'flex') {
      menu.style.display = 'none';
      toggleBtn.innerHTML = '☰';
    } else {
      menu.style.display = 'flex';
      toggleBtn.innerHTML = '✖';
    }
  }