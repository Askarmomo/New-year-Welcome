
const form = document.querySelector("#greeter-form")


form.addEventListener("submit", (event) => {
    event.preventDefault()

    const greeterinputEl = event.target[0].value

    window.location.href = "./greeting.html?name=" + greeterinputEl

    console.log("form submiting");
})
