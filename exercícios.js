// exercicio 1
var listaFrutas = []
listaFrutas.push( "maçã", "banana", "laranja" )

console.log( listaFrutas)

// exercicio 2

const numeros = [1, 2, 3, 4, 5]
numeros.splice(2,1)
console.log( numeros)

var pessoa = {
    nome : "Joaquim",
    idade : 20,
    cpf : '123.456.789-00'
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.cpf)

pessoa.nome = "Maria"
pessoa.idade = 25
pessoa.cpf = '987.654.321-00'

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.cpf)

// função com retorno 
var numero1 = 10
var numero2 = 12
function soma(n1, n2){
    console.log(n1 + n2)
    
}
soma(numero1, numero2)

function retorno(){
    return 10
}

var resultado = retorno()+10

console.log(resultado)
