window.addEventListener('load', ()=> {
    let lon
    let lat
    
    let temperaturaValor = document.getElementById('temperatura-valor')
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion')

    let ubicacion = document.getElementById('ubicacion')
    let iconoAnimado = document.getElementById('icono-animado')

    let vientoVelocidad = document.getElementById('viento-velocidad')



    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( posicion => {
            lon = posicion.coords.longitude
            lat = posicion.coords.latitude

             //const url = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=3199f773d31a89f98d9c8f20cb160071'//

            const url = 'https://api.openweathermap.org/data/2.5/weather?q=Maipu&lang=es&units=metric&appid=3199f773d31a89f98d9c8f20cb160071'


            //console.log(url)
            fetch(url)
                .then(response => {
                return response.json()
                })
                .then(data => {
                console.log(data.main.temp)
                let temp = Math.round(data.main.temp)
                temperaturaValor.textContent = `${temp} °C`

                console.log(data.weather[0].description)
                let desc = data.weather[0].description
                temperaturaDescripcion.textContent = desc.toUpperCase()

                ubicacion.textContent =data.name

                vientoVelocidad.textContent = `${data.wind.speed} m/s`
                    
                    /*console.log(data.weather[0].icon)
                    let iconCode = data.weather[0].icon
                    const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`
                    console.log(urlIcon)*/

                console.log(data.weather[0].main)
                switch (data.weather[0].main) {
                        case 'Thunderstorm':
                            iconoAnimado.src="{% static 'img/lluvia.svg' %}"
                            console.log('TORMENTA');
                            break;
                        case 'Drizzle':
                            iconoAnimado.src="{% static 'img/lluvia.svg' %}"
                            console.log('LLOVIZNA');
                            break;
                        case 'Rain':
                            iconoAnimado.src="{% static 'img/lluvia.svg' %}"
                            console.log('LLUVIA');
                            break;
                        case 'Snow':
                            iconoAnimado.src="{% static 'img/lluvia.svg' %}"
                            console.log('NIEVE');
    lluvia.svg
                        case 'Clear':
                            iconoAnimado.src="{% static 'img/lluvia.svg' %}"
                            console.log('LIMPIO');
                            break;
                        case 'Atmosphere':
                            iconoAnimado.src="{% static 'img/lluvia.svg' %}"
                            console.log('ATMOSFERA');
                            break;
                        case 'Clouds':
                            iconoAnimado.src="{% static 'img/lluvia.svg' %}"
                            console.log('NUBES');
                            break;
                        default:
                            iconoAnimado.src="{% static 'img/lluvia.svg' %}"
                            console.log('por defecto')
                    }

                })             
                    
                
            
                .catch( error => {
                    console.log(error)
                })
        })
    }
})