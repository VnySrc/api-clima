let input = document.querySelector("#searchInput")
let inputBtn= document.querySelector("#searchBtn")


inputBtn.addEventListener("click" , buscar )

async function buscar () {
    event.preventDefault()
  
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input.value)}&appid=68879565a460a5b79a830eccb7f96e1c&units=metric&lang=pt_br`
    let result = await fetch(url)
    json = await result.json()

    console.log(json)
 try {  
    if (json.cod === "400") {
        document.querySelector("#resultTitle").innerHTML = "Campo De Pesquisa Vazio"
        document.querySelector("#resultTitle").style.color = "red";
    }

    else if (json.cod === "404") {
        document.querySelector("#resultTitle").innerHTML = "Cidade não localizada"
        document.querySelector("#resultTitle").style.color = "red";
    }
    

    else {document.querySelector("#resultTitle").innerHTML = "Pesquisando..."
          document.querySelector("#resultTitle").style.color = "white";
         
     }
    
   


cityName = json.name
country = json.sys.country
weather = json.main.temp
weatherIcon = json.weather[0].icon
descTemp = json.weather[0].description
wind = json.wind.speed
wind.locate = json.wind.deg
    
    } catch {console.log("Campo de pesquisa vazio, ou cidade invalida")}

document.querySelector("#detailsTitle").innerHTML =  `${cityName} / ${country}`
document.querySelector("#tempResult").innerHTML = `${weather} <sup>°C<sup>`
document.querySelector("#windResult").innerHTML = `${wind} km/h`
document.querySelector("#resultTitle").innerHTML = "Resultado:"
document.querySelector("#resultTitle").style.color = "white"



document.querySelector("#imgTemp").setAttribute("src" , `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`)

    



document.querySelector("#containerDetails").setAttribute("class" , "details1")

    document.querySelector("#link").setAttribute("class" , "link")

    


} 

