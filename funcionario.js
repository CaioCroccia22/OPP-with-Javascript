function Pessoa(nome){
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + ' diz olá');
    }
    // Graças a herança é possível acessar o atributo cargo da classe Funcionario, mas o método só consegue ser chamado pelo Objeto instânciado da classe funcionário
    this.dizCargo = function(){
        console.log(this.cargo);
    }
}


function Funcionario(nome, cargo, salario){
    this.cargo = cargo;
    let _salario = salario;

    this.getSalario = function(){
        return _salario;
    }

    this.setSalario = function(valor){
        if (typeof valor === 'number'){
            _salario = valor; 
        }
    }

    this.aumento = function(){
        const novoSalario = _salario * 1.1;
        // console.log(novoSalario);
        _salario = novoSalario;
    }

    // Herança de atributos da classe Pessoa
    Pessoa.call(this, nome);
}

function Estagiario(nome){
    Funcionario.call(this, nome, "Dev front-end Júnior", 2000)

    this.aumento = function(){
        const novoSalario = this.getSalario() * 1.07;
        this.setSalario(novoSalario);
    }
}


const funcionario1 = new Funcionario("Maria", "Dev front-end", 5000);
const funcionario2 = new Estagiario("Pedro");
const pessoa = new Pessoa('Caio Crocccia')
funcionario1.dizOi();
pessoa.dizCargo(); // undefined

// funcionario1.salario = 1000
// console.log(funcionario1)

funcionario1.aumento();
console.log(funcionario1.getSalario())

funcionario2.aumento();
console.log(funcionario2.getSalario())