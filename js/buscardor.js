//Array de objetos con listado de vehiculos
const vehiculos = [
    {marca: 'Fiat Cronos', "precio": 5000000},
    {marca: 'Fiat MOBI', "precio": 5000000},
    {marca: 'Fiat MOBI', "precio": 4300000},
    {marca: 'Renault Kwid', "precio": 3900000},
    {marca: 'Renault Logan', "precio": 4250000},
    {marca: 'Volkswagen Gol', "precio": 4450000},
    {marca: 'Fiat Cronos', "precio": 3500000},
    {marca: 'Fiat MOBI', "precio": 3200000},
    {marca: 'Fiat MOBI', "precio": 2900000},
    {marca: 'Renault Logan', "precio": 2500000},
    {marca: 'Renault Sandero', "precio": 4000000},
    {marca: 'Volkswagen Golf', "precio": 4300000},
]

//Variables para ejecutar el buscardor
const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#botonBuscar');
const resultado = document.querySelector('#resultado');

//Función para ejecutar el buscardor
const filtrar = ()=>{

    resultado.innerHTML = '';

    const texto = formulario.value.toLowerCase();

    for(let vehiculo of vehiculos){
        let marca = vehiculo.marca.toLowerCase();
        if(marca.indexOf(texto) !== -1){
            resultado.innerHTML += `<li class="lista-menu">${vehiculo.marca} - Valor: $ ${vehiculo.precio}</li>`
        }
    }

    if(resultado.innerHTML === ''){
        resultado.innerHTML += `<li>Vehículo no encontrado...</li>`
    }
}

boton.addEventListener('click',filtrar)

// formulario.addEventListener('keyup',filtrar)
// filtrar();

