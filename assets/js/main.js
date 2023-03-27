// let numeroKilometri = parseFloat (prompt ('Quanti kilometri devi fare?'));
// let eta = parseFloat (prompt ('Quanti anni hai?'));

// const prezzoAlKilometro = 0.21;

// let costo = numeroKilometri * prezzoAlKilometro

// if(eta < 18){
//     costo *= 0.80;
//     document.writeln(`Il costo del biglietto per i minorenni è ${costo.toFixed(2)}€`)
// } else if(eta > 65){
//     costo *= 0.60;
//     document.writeln(`Il costo del biglietto per gli over 65 è ${costo.toFixed(2)}€`)
// } else {
//     document.writeln(`Il costo del biglietto per i maggiorenni è ${costo.toFixed(2)}€`)
// }

// console.log (parseFloat (costo.toFixed(2) ) )

document.getElementById('btn-invia').addEventListener('click', function(){
    let nomeCognome = document.getElementById('nomeCognome').value
    let km = parseFloat(document.getElementById('km').value) 
    let fasciaEta = document.getElementById('fascia-eta').value
    const prezzoAlKilometro = 0.21;

    let costo = km * prezzoAlKilometro

    if(fasciaEta == 'minorenne'){
        costo *= 0.80;
        
    } else if(fasciaEta == 'over'){
        costo *= 0.60;
    
    }

    document.querySelector('#dettagli-passeggero').innerHTML += `<span>${nomeCognome}</span>`
    document.querySelector('#offerta').innerHTML += `<span>${fasciaEta}</span>`
    document.querySelector('#costo').innerHTML += `<span> Il biglietto costa ${costo.toFixed(2)}€</span>`

    document.querySelector('#carrozza').innerHTML += `<span>${numeroRandomico(0, 10)}</span>`
    document.querySelector('#codice').innerHTML += `<span>${numeroRandomico(0, 10000)}</span>`

    console.log( nomeCognome, km, fasciaEta, prezzoAlKilometro, costo.toFixed(2) )
})

function numeroRandomico(min, max){
        return Math.floor(Math.random() * max) + min;
    }