/*aula do dia 06/06/2024
Tipos Primitivas:
01) Crie três variaveis do tipo:String, Number, Bolen:
*/
const nome = 'Demetrio';
const idade = '37';
const matriculado = true;
const ausente = false;


//02) Exiba no console as variaveis criadas:
console.log(nome);
console.log(idade);
console.log(matriculado);
console.log(ausente);
console.log('--------------');
console.log(nome,idade,matriculado,ausente);

//03) Exiba no console o tipo de cada variavel criada:
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof matriculado);
console.log(typeof ausente);
console.log(typeof'----------');
console.log('--------------');
//04) Mostre que o J.S e fracamente tipada.
let num1 = 1;
let num2 = 2;
let soma1 = num1 + num2;

/*
let soma2 = num3 + num4;
let num3 = 1;
let num4 = 2;
*/
console.log('--------------');
//05) Mostre a diferença entre let e const:

var altura = 5;
var comprimento =10;
area = altura = comprimento;
var area;
console.log('--------------');
let altura2 = 10;
let comprimento = 20;
let area2 = altura2 + comprimento2;//não podemos
//06) Operações aritimeticas em JS. Crie duas variaveis num1 e num2 e realize as operações de: soma, subtração,divisão e multiplicação
const num1 = 10;
const num2 = 15;

//soma
console.log(num1+num2);
//subtração
console.log(num1 - num2);
//multiplicação
console.log(num1*num2);
//divisao
console.log(num1/num2);
console.log('--------------');
//07) Crie um array com as seguintes frustas:Bananas,Maçã,Abacate,Limão,Jaca,Mamão e Pêra
const frutas = ['Banana','Maçã','Abacate','Limao','Jaca', 'Mamão', 'pera'];
console.log('--------------');
//08) Exiba o primeiro e o ultimo elemento do array.
console.log(frutas[0]);
console.log(frutas[6]);
console.log('--------------');
//09) Crie uma função que exiba no console o seu nome.
function meuNome(){
    return console.log('Demetrio Baladão');

}

console.log('--------------');
//10) Crie uma função para a soma de dois numeros
function somaDoisNumeros(numero1, numero2){
    return console.log(numero1 + numero2);
}

somaDoisNumeros(2,3);
console.log('--------------');
//11) Crie uma função que multipla dois numeros e use tamplate string para manipular o resultado no console.
function multiplicaDoisNumeros(num1, num2){
    return console.log(`Os números multiplicados foram ${num1} e ${num2} e o resultado é ${num1 * num2}`);
}
console.log('--------------');