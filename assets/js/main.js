//GENERADOR DE ENEMIGO//
var Monstruo = function(raza, vida, ataque, rango){
	this.raza = raza;
	this.vida = vida;
	this.ataque = ataque;
	this.rango = rango;
}

enemigo = new Monstruo('Hombre Bestia', 150, 100, 'soldado')
	alert('Un ' + enemigo.raza + ' esta destruyendo la aldea!!!');

//GENERADOR DE HEROE//
var Heroe = function(nombre, vida, ataque, experiencia, raza, nivel){
	this.nombre = nombre;
	this.vida = vida;
	this.ataque = ataque;
	this.experiencia = experiencia;
	this.raza = raza;
	this.nivel = nivel;
}

var heroe = new Heroe('Alf MacThrorin ', 300, 0, 0, 'Enano Barbon', 1)
	alert('Tu Heroe ' + '"' + heroe.nombre + '"'  + ' a llegado!!');
	alert(heroe.nombre + ': ' + 'el ' + heroe.raza + ' / Puntos de Vida: ' + heroe.vida + ' / Ataque: ' + heroe.ataque + ' / Nivel: ' + heroe.nivel + ' / Exp: ' + heroe.experiencia)
	alert('Elige un arma...')

//ATAQUE DEL ENEMIGO//
Monstruo.prototype.ataque = function(heroe){
	heroe.vida = (heroe.vida - enemigo.ataque);
	alert(enemigo.raza + ' a atacado!!');
	alert('La vida de ' + heroe.nombre + ' es ' + heroe.vida);
	if (heroe.vida <= 0) {
		alert('Tu Heroe ' + heroe.nombre +' ha Caido!!');
	}
};

//ATAQUE DEL HEROE//
Heroe.prototype.ataque = function(enemigo){
	enemigo.vida = (enemigo.vida - heroe.ataque);
	alert(heroe.nombre + ' a atacado!!');
	alert('La vida del ' + enemigo.raza + ' es ' + enemigo.vida);
	if (enemigo.vida <= 0) {
		alert('El enemigo ' + enemigo.raza +' fue derrotado!!');
		heroe.experiencia = heroe.experiencia + 1000;
	}

	if (heroe.experiencia % 1000 === 0 && heroe.experiencia !== 0){
		alert('SUBES DE NIVEL!!!')
		heroe.nivel = heroe.nivel + 1;
		heroe.vida = heroe.vida * heroe.nivel;
		heroe.ataque = heroe.ataque * heroe.nivel;
		alert(heroe.nombre + ': ' + 'el ' + heroe.raza + ' / Puntos de Vida: ' + heroe.vida + ' / Ataque: ' + heroe.ataque + ' / Nivel: ' + heroe.nivel + ' / Exp: ' + heroe.experiencia)
	}

};

//ARSENAL//
Heroe.prototype.posion = function(){
	heroe.vida = heroe.vida + 100;
	alert('Tomaste una Posión!!, tus puntos de vida ahora son ' + heroe.vida );
}

function Escudo() {
	heroe.vida = heroe.vida + 100;
}

function Espada() {
	heroe.ataque = heroe.ataque + 50;
	alert('El Heroe ' + heroe.nombre +' se ha equipado con Espada / ' + 'Ataque ' + heroe.ataque);
	alert('Ya Puedes Combatir!!');
}

function Martillo() {
	heroe.ataque = heroe.ataque + 100;
	alert('El Heroe ' + heroe.nombre +' se ha equipado con Martillo / ' + 'Ataque '+ heroe.ataque);
	alert('Ya Puedes Combatir!!');
}
