//Galeria de Fotos
const fotinhas = document.querySelectorAll('.foto-pequena');
fotinhas.forEach(teste);
function teste(fotinha) {
  fotinha.addEventListener("click", () => {
    const fotos = document.querySelectorAll('.foto-grande');
    const id = fotinha.getAttribute('id');
    fotinhas.forEach((item) => {
      if (item.classList.contains('selecionada')) {
        item.classList.remove('selecionada');
      }
    })
    fotinha.classList.add('selecionada');
    for (var i = 0; i < 4; i++) {
      if (fotos[i].getAttribute('id') === id) {
        if (fotos[i].classList.contains('ativa') === false) {
          fotos[i].classList.add('ativa');
          fotos[i].classList.remove('inativa');
        }
      }
      if (fotos[i].getAttribute('id') != id) {
        fotos[i].classList.remove('ativa');
        fotos[i].classList.add('inativa');
      }
    }
  })
}