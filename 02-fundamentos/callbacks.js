
setTimeout(() => {
    console.log('setTimeout');
}, 1000);

const getUsuarioByID = ( id, callback ) => {

    const user = {
        id,
        nombre: 'Juan',
    }

    setTimeout(() => {
        callback(user);
    }, 1000)
}

getUsuarioByID( 10, ( usuario ) => {
    console.log(usuario);
    console.log( usuario.id )
    console.log( usuario.nombre.toUpperCase() )
} )