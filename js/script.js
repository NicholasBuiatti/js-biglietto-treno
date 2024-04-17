const km = prompt('Quanti Km vuoi percorrere?'); 
 //document.getElementById("kmDaPercorrere").value;

const anni = prompt(`Quanti hanni hai??`);
//document.getElementById("età").value;

let bigliettoIntero = km * 0.21;

let bigliettoScontato;

document.getElementById("km").innerHTML = km;
document.getElementById("età").innerHTML = anni;
// // function functionToExecute() {
    
// // }
if (anni < 18) {

    let scontoUnder = (bigliettoIntero * 20) / 100;
    bigliettoScontato = (bigliettoIntero - scontoUnder);
    
    document.getElementById("prezzoTotale").innerHTML = bigliettoScontato.toFixed(2);
    document.getElementById("sconto").innerHTML = `20%`;
    
    console.log(bigliettoScontato.toFixed(2));
    console.log(`Sconto del 20%`);

} else if (18 <= anni && anni < 65) {

    document.getElementById("prezzoTotale").innerHTML = bigliettoIntero;
    document.getElementById("sconto").innerHTML = `Non hai diritto allo sconto`;
    
    console.log(bigliettoIntero.toFixed(2));
    console.log(`non hai diritto`);

} else {

    let scontoOver = (bigliettoIntero * 40) / 100;
    bigliettoScontato = (bigliettoIntero - scontoOver);
    
    document.getElementById("prezzoTotale").innerHTML = bigliettoScontato.toFixed(2);
    document.getElementById("sconto").innerHTML = `40%`;
}
