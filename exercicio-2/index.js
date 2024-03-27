/*Crie um algoritmo que peça um número inteiro positivo para o usuário. Em seguida, popule um array com os números de Fibonacci (o próximo número da sequência é a soma dos 2 números anteriores).
Na hora de somar com os termos anteriores, some com elementos anteriores do array. 
Faça com que o array tenha no máximo 10 elementos
Para iniciar a sequência use o (número inserido - 1).


   Ex.: inseriu o número 8, a sequência deve começar da

        seguinte maneira 7 8 15 23 ..*/

let recebeNumero = Number(prompt("Digite um número:"));
let array = [];
array[0] = recebeNumero - 1;
array[1] = recebeNumero;

for (let index = 2; index < 10; index++) {
  array[index] = array[index-2] + array[index-1];

}

console.log(array)
