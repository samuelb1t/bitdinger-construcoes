//Galeria de Fotos
const fotosPequenas = document.querySelectorAll('.foto-pequena');
const fotosGrandes = document.querySelectorAll('.foto-grande');
fotosPequenas.forEach(trocaFoto);
function trocaFoto(fotoClicada) {
	fotoClicada.addEventListener("click", () => {
		const id = fotoClicada.getAttribute('id'); // id da foto clicada

		//arrumando as fotos clicaveis
		fotosPequenas.forEach((item) => {
			if (item.classList.contains('selecionada')) {
				item.classList.remove('selecionada');
			}
		})
		fotoClicada.classList.add('selecionada');

		fotosGrandes.forEach((foto) => {
			if (foto.getAttribute('id') === id) {
				//aparição da foto clicada
				if (foto.classList.contains('ativa') === false) {
					foto.classList.add('ativa');
					foto.classList.remove('inativa');

					//animaçao de saida da foto
					if (foto.classList.contains('ativa')) {
						foto.classList.add('saindo');
						foto.addEventListener('animationend', () => {
							foto.classList.remove('saindo');
						})
					}
				}
			}
			//remoção da foto anterior
			if (foto.getAttribute('id') != id) {
				foto.classList.remove('ativa');
				foto.classList.add('inativa');
			}
		})
	})
}

