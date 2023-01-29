console.log('Inicio del programa');


setTimeout(() => {
    console.log('Primer setTimeout');
}, 3000);


setTimeout(() => {
    console.log('Segundo setTimeout');
}, 0);


setTimeout(() => {
    console.log('Tercer setTimeout');
}, 0);


console.log('Fin del programa');