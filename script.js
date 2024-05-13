//Galeria de Fotos

console.log("oi");

const fotinhas = document.querySelectorAll('.foto-pequena');

fotinhas.forEach(teste);


function teste(fotinha) {
  fotinha.addEventListener("click", () => {
    const fotos = document.querySelectorAll('.foto-grande');
    const id = fotinha.getAttribute('id');
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


