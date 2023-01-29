
const deadpool = {
    nombre: 'Wade',
    apellido: 'Wilson',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

function imprimeHeroe( heroe ) {
    const { nombre, apellido, poder } = heroe;
    
    console.log(nombre, apellido, poder);
}


function imprimeHeroeMalo( { nombre, apellido, poder } ) {    
    console.log(nombre, apellido, poder);
}


imprimeHeroe(deadpool);
imprimeHeroeMalo(deadpool);


const heroes = [ 'Batman', 'Superman', 'Ironman' ];
// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [h1, h2, h3] = heroes;

console.log(h1, h2, h3);

const [, , he3] = heroes;

console.log(he3);