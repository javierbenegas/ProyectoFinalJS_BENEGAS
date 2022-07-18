let nombreContacto = document.getElementById('nameContact');
let apellidoContacto = document.getElementById('lastNameContact');
let direccionContacto = document.getElementById('addresContact');
let alturaContacto = document.getElementById('numContact');
let celContacto = document.getElementById('phoneContact');
let emailContacto = document.getElementById('mailContact');
let comentarioContacto = document.getElementById('comentContact')


//Funcionalidad para el boton de envio de información

let botonContacto = document.getElementById("btn-contacto")
botonContacto.addEventListener('click',()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Tu consulta fue enviada con exito',
        confirmButtonColor: 'black',
        background :'rgb(48, 46, 44)',
        color: 'antiquewhite',
        showConfirmButton: false,
        timer: 1500
      })
})

// let formulario = document.getElementById('formularioSubmit');
// formulario.addEventListener ('submit',validarFormulario);

// function validarFormulario (e){
//     e.preventDefault();
// }