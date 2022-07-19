const nuevos = document.querySelector('#catalogo-nuevos')

fetch('/catalogo-nuevos.json')
    .then( (response) => response.json())
    .then( (data) => {

        data.forEach((vehiculo) => {
            const div = document.createElement('div')
            div.innerHTML = `
            <div class="card h-100">
                ${vehiculo.imagen}
                <div class="card-body">
                    <h5 class="card-title">${vehiculo.marca}</h5>
                    <h6 class="card-text">Modelo: ${vehiculo.modelo}</h6>
                    <h6 class="card-text">${vehiculo.km} km</h6>
                    <h6 class="card-text">${vehiculo.combustible}</h6>
                    <h6 class="card-text">Valor: $ ${vehiculo.precio}</h6>
                </div>
                <div>
                    <a href="#" class="btn btn-card">Consultar</a>
                </div>
            </div>
            `
   
         nuevos.append(div)
        })
    })

