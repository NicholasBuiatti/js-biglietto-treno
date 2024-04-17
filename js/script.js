const km = prompt(`Quanti km intendi percorrere?`);

const anni = prompt(`Indica la tua età`);

let bigliettoIntero = km * 0.21;

if (anni < 18) {

    let scontoUnder = (bigliettoIntero * 20) / 100;
    let bigliettoScontato = (bigliettoIntero - scontoUnder)
    console.log(bigliettoScontato)
    console.log(`Sconto del 20%`);

} else if (18 <= anni && anni < 65) {

    console.log(bigliettoIntero);
    console.log(`non hai diritto`);

} else {

    let scontoOver = (bigliettoIntero * 40) / 100;
    let bigliettoScontato = (bigliettoIntero - scontoOver);
    console.log(bigliettoScontato);
    console.log(`Sconto del 40%`);

}