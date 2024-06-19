//Galeria de Fotos
const fotosPequenas = document.querySelectorAll('.foto-pequena');
const fotosGrandes = document.querySelectorAll('.foto-grande');

fotosPequenas.forEach(trocaFoto);

function trocaFoto(fotoClicada) {
	fotoClicada.addEventListener("click", () => {
		const id = fotoClicada.getAttribute('id'); // id da foto clicada\

		arrumaOpacidade(fotoClicada);//arrumando as fotos clicaveis 

		let proximaFoto = document.querySelector(`.foto-grande[id="${id}"]`);
		let fotoAtual = document.querySelector('.foto-grande.ativa');

		if (fotoAtual.getAttribute('id') != id) {
			fotoAtual.classList.add('saindo');
			fotoAtual.addEventListener('animationend', () => {
				fotoAtual.classList.add('inativa');
				fotoAtual.classList.remove('saindo', 'ativa');
				proximaFoto.classList.add('ativa', 'entrando');
				proximaFoto.classList.remove('inativa');
			}, { once: true })
		}


	})
}

function arrumaOpacidade(fotoClicada) {
	fotosPequenas.forEach((item) => {
		if (item.classList.contains('selecionada')) {
			item.classList.remove('selecionada');
		}
	})
	fotoClicada.classList.add('selecionada');
}
