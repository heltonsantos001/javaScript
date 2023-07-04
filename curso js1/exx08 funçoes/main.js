// funçoes

//declarando funçao

function soma(v1, v2) {
    return v1 + v2
}

console.log(soma(2, 20))

let v1 = parseFloat(prompt())
let v2 = parseFloat(prompt())

alert(soma(v1, v2))
//--------------------------------------


function realParaDolar(real, dolar) {
    return real * dolar
}

let real, dolar;
real = 7.40;
dolar = 5.30;

let total = realParaDolar(real, dolar)

alert(`o valor do dolar ficou R$: ${total} reais`)


//--------------------------------------

function ParaCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 77);
}

let x = ParaCelsius(77)
alert(x)
//---------------------------------------

function parImp(n) {
    if (n % 2 == 1) {
        return "impa"
    } else {
        return 'par'
    }
}

let res = parImp(7);

console.log(res)
//---------------------------------------

//n = 0 faz com que o params fique com o valor 0 caso nao receba um valor e fique
function soma(n = 0, n2 = 0) {
    return n + n2
}

console.log(soma(2, 9))

let v = function (x) {
    return x * 2
}
console.log(v(5))


//---------------------------------------


function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c

    }
    return fat
}
console.log(fatorial(5))

//recursividade