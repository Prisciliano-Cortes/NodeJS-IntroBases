const empleados = [
    {
        id: 1,
        nombre: 'Juan'
    },
    {
        id: 2,
        nombre: 'Pedro'
    },
    {
        id: 3,
        nombre: 'Ana'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    },
];

const getEmpleado = ( id ) => {
    return new Promise( ( resolve, reject ) => {

        const empleado = empleados.find( empleado => empleado.id === id )?.nombre;

        empleado ?
        resolve(empleado)
        :
        reject(`Empleado con id ${id} no existe`)  
    });
}

const getSalario = (id) => {
    return new Promise( ( resolve, reject ) => {
        const salario = salarios.find( salario => salario.id === id )?.salario;

        salario ?
        resolve(salario)
        :
        reject(`Salario con id ${id} no existe`)
    });
}

const getInfoUsuario = async( id ) => {

    try {
        const empleado = await getEmpleado( id );
        const salario = await getSalario( id );
        
        return `El salario del empleado ${empleado} es de ${salario}`;

    } catch (error) {
        throw error;
    }

}

const id = 3;

getInfoUsuario(id)
    .then( msg => {
        console.log('TODO BIEN');
        console.log(msg);
    })
    .catch( err => {
        console.log('TODO MAL')
        console.log(err)
    })


