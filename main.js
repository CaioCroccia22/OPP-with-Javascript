const carroDoJoão = {
    modelo: 'Fiesta',
    Fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log('Vrummm!! ')
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    Fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log('Vrummm!! ')
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao){
    //This faz referência ao próprio carro
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function() {
        console.log('acelerar')
    }
}

const carroDoJoao2 = new Carro('Fiesta', 'Ford', 2020, 2019);
const carroDaMaria2 = new Carro('Ka', 'Ford', 2021, 2020);

console.log(carroDoJoao2);
console.log(carroDaMaria2);

// Criando objetos de forma literal sem o uso do NEW Object

const nome = 'Caio'
const idade = 23
const maiorDeIdade = true
const conhecimentos = ['html', 'css', 'javascript']

const pessoa = {
    nome: nome,
    idade: idade,
    maiorDeIdade: maiorDeIdade,
    conhecimentos: conhecimentos
}

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof maiorDeIdade)
console.log(typeof conhecimentos)

console.log(carroDaMaria2 instanceof Carro)