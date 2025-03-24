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

// console.log(carroDoJoao2);
// console.log(carroDaMaria2);

//---------- Criando objetos de forma literal sem o uso do NEW Object

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

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof maiorDeIdade)
// console.log(typeof conhecimentos)

// console.log(carroDaMaria2 instanceof Carro)


//---------Acessando atributos
pessoa.nome = 'Caio Croccia'
console.log(pessoa.nome);

Object.freeze(pessoa)





console.log(pessoa['nome']);

// Adicionando atributos de forma dinamicar
function exibeAtributos(nomeAtributo){
    console.log(pessoa[nomeAtributo])
}

exibeAtributos('nome')

pessoa.nome = 'Croccia Caio';

// Verifica se o valor da propriedade sobrenome é "truthy" (ou seja, um valor que o JavaScript considera verdadeiro).
if(pessoa['sobrenome']){
    console.log('a pesssoa tem um sobrenome')
}


// Verifica se a chave/prpriedade "sobrenome" existe no objeto, independentemente do valor dela.
if ('sobrenome' in pessoa){
    console.log('tem sobrenome')
}

console.log(pessoa.nome)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))