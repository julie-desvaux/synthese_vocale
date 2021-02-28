let btnRead = document.getElementById("read");
let btnChut = document.getElementById("chut");
let inputTxt = document.getElementById("txt");

btnChut.addEventListener("click", () => {
	speechSynthesis.cancel();
});

btnRead.addEventListener("click", () => {
	let txt = inputTxt.value;

	// instancier un objet d'énonciation
	let parole = new SpeechSynthesisUtterance();
	// paramètre de notre objet
	parole.text = txt;
	parole.pitch = 1; // 0 à 2 = hauteur
	parole.rate = 1; // 0.5 à 2 = la vitesse
	parole.volume = 1; // 0 à 1 = volume
	// faire parler
	speechSynthesis.speak(parole);

	// à la fin de la lecture, lance une fonction
	parole.onend = () => {
		console.log("fin de lecture");
	};
});
