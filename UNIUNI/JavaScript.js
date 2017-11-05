var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
function inicio () {
	control = setInterval(cronometro,10);
	document.getElementById("inicio").disabled = true;
	document.getElementById("parar").disabled = false;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = false;
}
function parar () {
	clearInterval(control);
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = false;
}
function reinicio () {
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = ":00";
	Horas.innerHTML = "00";
	document.getElementById("inicio").disabled = false;
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = true;
}
function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
}

	$(AlturaPaginas);
	var _AlturaJanela = $(window).height();
	function AlturaPaginas() {
		$('.pagina').height(_AlturaJanela);
	}
	$('.icone-scroll').click(RolagemPagina);
	function RolagemPagina() {
		var multiplicador = $(this).parent('.pagina').attr('id').substr(-2);
 		var totalItens =  $('.pagina').length;

 		if(multiplicador == totalItens){
 			novaAltura = 0;
 			Animar(novaAltura, '800');
 		}else{
 			novaAltura = _AlturaJanela * parseInt(multiplicador);
 			Animar(novaAltura, '500');
  		}
 	}
 	function Animar(posicaoJanela,  velocidadeAnimacao){
 		$('body').animate({scrollTop: posicaoJanela}, velocidadeAnimacao);
  	}



			let botaonota = document.querySelector('#gerarnota');
			var cont =0;

			function crianota() {



				let sessao2 = document.querySelector('#pagina-02');
				let nota = document.createElement('textarea');

				nota.name = "comentarios";
				nota.id = "notas";


        sessao2.appendChild(nota);
				$( "#notas" ).draggable();
				cont=cont+1;
		}

		gerarnota.addEventListener('click', crianota);


let ap = document.querySelector('notas');
ap.addEventListener('dblclick', function(e) {
    alert(e.target.id);
		alert("oi");

});
