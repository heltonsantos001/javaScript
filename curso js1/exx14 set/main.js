/*

document.querySelector("#iniciar").addEventListener('click', () =>
{
    document.querySelector("#h1").innerHTML = "começou a contar"
    tempo = setTimeout(function () {
        document.querySelector("#h1").innerHTML = "executou o set"
    }, 5000)

 
})

document.querySelector("#parar").addEventListener('click', () => {
    clearTimeout(tempo)
    document.querySelector("#h1").innerHTML = "parou contagm"
})*/
segundos = 0
let crono

function interval() {
    crono = setInterval(() => {

        segundos++
        document.querySelector("#h1").innerHTML = segundos

    }, 1000)

}
document.querySelector("#iniciar").addEventListener('click', interval)


document.querySelector("#parar").addEventListener('click', () => {
    document.querySelector("#h1").innerHTML = 0
    segundos = 0;
    clearInterval(crono);
})