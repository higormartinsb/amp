// Menu mobile
const toggle = document.querySelector('.toggle');
const mobileMenu = document.getElementById('mobileMenu');
toggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
});

// Aceitar cookies
function aceitarCookies() {
  document.getElementById('cookieNotice').style.display = 'none';
}

// Ano automático no rodapé
document.getElementById('anoAtual').textContent = new Date().getFullYear();

//Alerta Pix
function copiarPix() {
navigator.clipboard.writeText("123.456.789-00")
.then(() => {
  alert("27988844547 - Chave PIX copiada!");
})
.catch(() => {
  alert("Erro ao copiar a chave PIX.");
});
}
  // Inicializa a Galeria
  lightGallery(document.getElementById('lightgallery'), {
    plugins: [lgZoom, lgThumbnail],
    speed: 500,
    zoom: true,
    thumbnail: true
  });

    // Ano no rodapé
    document.getElementById("anoAtual").textContent = new Date().getFullYear();

