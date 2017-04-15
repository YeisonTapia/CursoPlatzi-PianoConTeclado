var papel = document.getElementById("canvas");
var lienzo = papel.getContext("2d");

var img = new Image();
img.src = "teclado.JPG";

lienzo.drawImage(img, 0, 0);

img.onload = function(){
  lienzo.drawImage(img, 0, 0);
}

var estado = 1;
document.addEventListener("keypress", function(evento){
	if (estado==1) {
		switch (evento.code){
			case "KeyQ":
				//DO
				lienzo.fillStyle="#f00";
				lienzo.fillRect(82,168,19,28);
				var audio = new Audio('sonidos/316899__jaz-the-man-2__do-stretched.wav');
				audio.play();
				estado = 2;
			break;
			case "KeyW":
				//RE
				lienzo.fillStyle="#f00";
				lienzo.fillRect(103,168,19,28);
				var audio = new Audio('sonidos/316909__jaz-the-man-2__re-stretched.wav');
				audio.play();
				estado = 2;
			break;
			case "KeyE":
				//MI
				lienzo.fillStyle="#f00";
				lienzo.fillRect(126,168,19,28);
				var audio = new Audio('sonidos/316907__jaz-the-man-2__mi-stretched.wav');
				audio.play();
				estado = 2;
			break;
			case "KeyR":
				//FA
				lienzo.fillStyle="#f00";
				lienzo.fillRect(148,168,19,28);
				var audio = new Audio('sonidos/316905__jaz-the-man-2__fa-stretched.wav');
				audio.play();
				estado = 2;
			break;
			case "KeyT":
				//SOL
				lienzo.fillStyle="#f00";
				lienzo.fillRect(170,168,19,28);
				var audio = new Audio('sonidos/316911__jaz-the-man-2__sol-stretched.wav');
				audio.play();
				estado = 2;
			break;
			case "KeyY":
				//LA
				lienzo.fillStyle="#f00";
				lienzo.fillRect(192,168,19,28);
				var audio = new Audio('sonidos/316903__jaz-the-man-2__la-stretched.wav');
				audio.play();
				estado = 2;
			break;
			case "KeyU":
				//SI
				lienzo.fillStyle="#f00";
				lienzo.fillRect(215,168,19,28);
				var audio = new Audio('sonidos/316910__jaz-the-man-2__si-stretched.wav');
				audio.play();
				estado = 2;
			break;
			case "KeyI":
				//DO 8
				lienzo.fillStyle="#f00";
				lienzo.fillRect(237,168,19,28);
				var audio = new Audio('sonidos/316900__jaz-the-man-2__do-stretched-octave.wav');
				audio.play();
				estado = 2;
		}
	}
});

document.addEventListener("keyup", function(evento){
  	lienzo.drawImage(img, 0, 0);
  	estado = 1;
});