// console.log("Condicionais!");

/* if (SE) / else (SENÃO) */
let nome = "Klaibert";
let idade = 79;

/*  Verificar a idade pra saber
se esta pessoa é maior ou menor 
de idade. */

/* O if/else usará esta variável para
guardar o resultado da condicional. Por isso, 
a inicializamos sem valor (indefinida) */
let mensagem; // inicializada sem valor/indefinida
if( idade >= 18){
    mensagem = "É maior de idade!"
} else { 
    mensagem = "É menor de idade!"
}

// Apresentando os resultados da condicional
console.log(`${nome}, ${mensagem}`);

/* Exercícios*/

let nota1 = 9;
let nota2 = 5;

let media = (nota1 + nota2)/2;

let resultado;
if( media >= 7){
    resultado = "Aprovado";
} else {
    resultado = "Reprovado";
}

console.log(`${media}, ${resultado}`);
/* Operadores RELACIONAIS 
>=  MAIOR OU IGUAL
<=  OU IGUAL
>   MAIOR
<   MENOR
==  IGUALDADE (VERIFICAR SE VALORES IGUAIS)
!=  DIFERENÇA (VERIFICAR SE VALORES DIFERENTES) */