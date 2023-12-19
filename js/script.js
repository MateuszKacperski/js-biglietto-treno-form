console.log('JS OK');


//Recupero gli elementi

const km = document.getElementById('km');
const eta = document.getElementById('age');
const button = document.getElementById('button');


//Aggiungo un evento sul click del bottone
button.addEventListener('click', function(){
    
    //Inserisco i dati dell'imput nelle variabili 
    const kmUtente = parseInt(km.value);
    let eta = age.value;

    //Validazione
    if(isNaN(kmUtente)){
        alert('Devi inserire un numero');
    }

    //Calcolo il prezzo del biglietto base
    let price = kmUtente * 0.21;
  


    //Applico gli sconti in base all'eta e stampo
    if(eta === 'over65'){
        const sconto40 = (40 * price) / 100 ;
        price = price - sconto40;
        console.log(price.toFixed(2));
    }else if(eta === 'minorenne'){
        const sconto20 = (20 * price) / 100 ;
        price = price - sconto20;
        console.log(price.toFixed(2));
    }else {
        console.log(price);
    }

   

})


/*
//Chiedere all'utente i chilometri da percorrere

const chilometri = parseInt(prompt('Quanti chilometri devi percorrere ?', '10'));

// Chidere all'utente la sua età

const eta = parseInt(prompt('Quanti anni hai ?', '66'));

console.log(chilometri, eta);

//validazione

if(isNaN(eta) || isNaN(chilometri) || eta <= 0 || chilometri <= 0){
    alert('I dati inseriti non sono corretti');
}

//Creo costante prezzo biglietto per chilometro
const perkm = 0.21 ;


//calcolo il prezzo del biglietto
let prezzobiglietto = chilometri * perkm ;

console.log(prezzobiglietto);

//Sconto del 20%

const sconto20 = (20 * prezzobiglietto) / 100 ;

console.log(sconto20);

//Sconto del 40%

const sconto40 = (40 * prezzobiglietto) / 100 ;

console.log(sconto40);


//Controllo se lo sconto va applicato

if(eta < 18){
    prezzobiglietto = prezzobiglietto - sconto20 ;
}else if(eta > 65) {
    prezzobiglietto = prezzobiglietto - sconto40 ;
}

//Tolgo i decimali in piu
prezzobiglietto = prezzobiglietto.toFixed(2);


console.log(prezzobiglietto);


//Stampo il prezzo finale del biglietto
document.getElementById('result').innerText += prezzobiglietto + '€';  */