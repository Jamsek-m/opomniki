window.addEventListener('load', function() {
	//stran nalozena
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			var naziv = document.getElementById('naziv_opomnika');
			if(cas == 0){
				alert("Opomnik!\n\nZadolžitev "+naziv.value+" je potekla!");
			} else{
				cas--;
				casovnik
			}
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});

var potrdiGumb = function(){
var text = document.getElementById('uporabnisko_ime').value;
document.getElementById('uporabnik').innerHTML=text
var pokrivalo = document.querySelector(".pokrivalo").style.visibility="hidden";
	
}

var dodajOpomnik = function(){
	var naziv = document.getElementById('naziv_opomnika');
	var cas = document.getElementById('cas_opomnika');
	var opomniki = document.getElementById('opomniki');
	
	var naziv_opomnika = document.getElementById('naziv_opomnika').value;
	var cas_opomnika = document.getElementById('cas_opomnika').value;
	naziv.value="";
	cas.value="";
	
	opomniki.innerHTML+=" \
	<div class='opomnik rob senca'> \
	<div class='naziv_opomnika'>"+naziv_opomnika+"</div> \
	<div class='cas_opomnika'>Opomnik cez "+cas_opomnika+
	"</span> sekund.</div> \
	</div>";
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}