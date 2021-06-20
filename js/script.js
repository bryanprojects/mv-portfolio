/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/

/* voor het verkrijgen van de informatie die de .button class bevat */

var buttons = document.querySelectorAll('.button');

var balEigenschap = document.querySelector('.ballen');
/* het eerste element in het document met de klasse "ballen" wordt teruggestuurd */

/* een functie die de zichtbaarheid van de ballen laat zien. De ballen worden zelf gehide door een dislay: none
door een .zichtbaar class laat ik wel het blok zien en die roep ik aan in de functie. */

/* functies die elementen toevoegd en verwijderd */

function toevoegenBlauwebal() {

    balEigenschap.classList.add('zichtbaarheid')
    return balEigenschap.src = 'img/ballen.png'
}

toevoegenBlauwebal();

function verwijderenBlauwebal() {
    balEigenschap.classList.remove('zichtbaarheid');
}

verwijderenBlauwebal();

function toevoegenRodebal() {

    balEigenschap.classList.add('zichtbaarheid');
    return balEigenschap.src = 'img/rodeballen.png'
}

toevoegenRodebal();

function verwijderenRodebal() {
    balEigenschap.classList.remove('zichtbaarheid');
    
    /* met een domtokenlist kan ik class-attributten terugsturen*/
}

verwijderenRodebal();

function toevoegenGelebal() {

    balEigenschap.classList.add('zichtbaarheid');
    return balEigenschap.src = 'img/geleballen.png'
}

toevoegenGelebal();

function verwijderenGelebal() {
    balEigenschap.classList.remove('zichtbaarheid');
}

verwijderenGelebal();

/* een addEventListener die een klikgebeurtenis toevoegd aan het document. Deze heb ik gekoppeld aan mijn functies */
/* met de dom kan ik acties uitvoeren op elementen */

buttons[0].addEventListener('click', toevoegenBlauwebal);
buttons[1].addEventListener('click', toevoegenRodebal);
buttons[2].addEventListener('click', toevoegenGelebal);
buttons[3].addEventListener('click', verwijderenBlauwebal);

/* bronnen: https://www.w3schools.com/jsref/met_document_addeventlistener.asp
Boek Javascript & J Query */
