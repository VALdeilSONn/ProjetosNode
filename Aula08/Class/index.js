class Pessoa {
    constructor(nome, altura, idade){
        this.nome = nome
        this.altura = altura
        this.idade = idade

    }

    falar(){
        console.log("bla bla bla")
    }
}


const p1 = new Pessoa('val', 1.70, 27)
p1.falar()
console.log(p1)