import Fireworks from 'fireworks-js'

const fircontainer = document.querySelector("#fireworks")
const namespan = document.querySelector("#greetername")
const firework = new Fireworks(fircontainer, {})

firework.start()
// firework.stop()

// console.log(window.location.search.split("?name=Askar")[0]);

const url = new URL(window.location.href)

const name = url.searchParams.get("name")

if(name){
    namespan.textContent = name
}else{
    location.href = "./index.html"
}

