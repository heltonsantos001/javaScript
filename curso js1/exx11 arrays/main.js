let lista = ['arroz', 'feijao', 'bobinha', 'macarrao']

let lista2 = []; lista2[0] = 'arroz'; lista2[1] = 'feijao';

let lista3 = new Array("arroz")

let cavalo

alert(lista2[lista2.length - 1])

alert(Array.isArray(cavalo))
let pessoa = ['helton', 'santos', 18];

document.querySelector('#teste').innerHTML = pessoa.join("---");

const aiZeDamanga = lista.concat(lista2);

const listaOrdem = lista.sort();

document.querySelector('#teste').innerHTML = listaOrdem

const numeros = [10, 20, 30, 40, 50, 60]


//pegando o maior numero do array
function MaiorNumero(arrays) {
    return Math.max.apply(null, arrays);
    
}
document.querySelector('#teste').innerHTML = MaiorNumero(numeros);


//pegando o menor numeros do array
function MenorNumero(arrays) {
    return Math.min.apply(null, arrays);

}
document.querySelector('#teste').innerHTML = MenorNumero(numeros);

