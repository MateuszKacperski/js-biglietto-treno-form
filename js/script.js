console.log('JS OK');


//Recupero gli elementi

const km = document.getElementById('km');
const eta = document.getElementById('age');
const button = document.getElementById('button');
const prezzo = document.getElementById('prezzo');
let carozza = document.getElementById('carozza');
let offerta = document.getElementById('offerta');
let nbiglietto = document.getElementById('nbiglietto');


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
        prezzo.innerText = price.toFixed(2) + '€';
        //offerta.innerText = `${offerta}Biglietto scontato 40%`;
    }else if(eta === 'minorenne'){
        const sconto20 = (20 * price) / 100 ;
        price = price - sconto20;
        console.log(price.toFixed(2));
        prezzo.innerText = price.toFixed(2) + '€';
        offerta.innerText = `Biglietto scontato 20%`;
    }else {
        console.log(price);
        prezzo.innerText = price.toFixed(2) + '€';
        //offerta.innerText = 'Biglietto prezzo pieno';
    }

    //Creo il numero carozza

    const numeroCarozza = Math.floor(Math.random()*12)+1;
    carozza.innerText =  numeroCarozza;


    //Creo Numero biglietto
    const numeroBiglietto = Math.floor(Math.random()*10000)+1;
    nbiglietto.innerText = numeroBiglietto;
})


