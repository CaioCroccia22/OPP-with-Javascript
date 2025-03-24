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
    this.salario = salario;

    // Herança de atributos da classe Pessoa
    Pessoa.call(this, nome);
}


const funcionario1 = new Funcionario("Maria", "Dev front-end", 5000);
const pessoa = new Pessoa('Caio Crocccia')
funcionario1.dizOi();
pessoa.dizCargo(); // undefined

