
//operadores aritimerico
//+ - * / % **



let valor = 5
let valor2 = 4

console.log(++valor)//++ adiciona 1
console.log(--valor)//-- tira 1


valor2 += valor
console.log(valor2)

/* 
+= faz uma variavel somar seu proprio valor com outra e atribuir nela mesma
como ex:

valor1 = valor1 + valor2
*/

//operadores de comparaçao 
// ==, ===, >, <, >=, <=, != !==

let total, v1, v2;
v1 = 4;
v2 = 4;
total = v2 == v1; //true (verdadeiro) ou false (falso)

alert(total)

//operador ternario
let add = prompt('adicione um valor')
let bianka, oqueE;
bianka = add
oqueE = (bianka > 5000) ? 'fiel' : 'infiel'
//se a condiçao for true aparece o primeiro bloco se for false o segundo

console.log(oqueE)

let idade = 100;

let resultado = (idade > 30 && idade < 120) ? true : false

console.log(resultado)

let x = 2;
let y = 1

//soma

x += y

//subtraçao

x -= y

//multiplicaçao

x *= y

//divisao

x /= y

//loops

++x
--y

while (x <= 100) {
    console.log(x)

    x *= 2
}


let n = 3
n = n + 4
n = n - 5
n = n * 4
n = n / 2
n = n ** 2
n = n % 5

n += 4
n -= 5
n *= 4
n /= 2
n **= 2
n %= 5








let quadrado, azul;

quadrado = 5 % 3
azul = (quadrado == 2) ? 'ai ze da manga' : 'fui tapiado'

console.log(azul)