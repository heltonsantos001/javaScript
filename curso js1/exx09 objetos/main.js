
let a, b;
a = 10
b = 5


const carro = {
    cor: 'azul',
    placa: 'abc123',
    marca: 'ford',
    modelo: 'ka',
    buzina: function () { alert('biiiiiiiiii') },
    completo: function () {
        return `a marca é ${this.marca} e o modelo e ${this.modelo}`
    }
}

alert(carro.completo());