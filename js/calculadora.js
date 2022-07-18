
    let precioVehiculo = document.getElementById('precioVehiculo');
    let precioEntrega = document.getElementById('precioEntrega');
    let cuotas = document.getElementById('cuotas');
    let interes = 1.3
    const resta = (precioVehiculo,precioEntrega) => { return precioVehiculo - precioEntrega }
    const financiacion = (resta,cuotas) => { return resta / cuotas }

    
    let final = resta(precioVehiculo.value,precioEntrega.value)/cuotas.value*interes.value


    let botonForm = document.getElementById("btn-formulario")
    botonForm.addEventListener('click',()=>{
        Swal.fire({
            title: `Presupuesto confirmado, la diferencia de $ ${resta(precioVehiculo.value,precioEntrega.value)} será pagada en ${cuotas.value} cuotas de $ ${Math.round((resta(precioVehiculo.value,precioEntrega.value)/cuotas.value*interes))} cada una.`,
            icon: 'seccess',
            confirmButtonColor: 'black',
            background :'rgb(48, 46, 44)',
            color: 'antiquewhite',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }     
        })
    })

// let formulario = document.getElementById('formSubmit');
// formulario.addEventListener ('submit',validarFormulario);

// function validarFormulario (e){
//     e.preventDefault();
// }