// Criando um array (vetor)
let alunos = ["Melissa", "Jon", "Phelipe", "Victor", "Patrícia"];

// Exibindo a estrutura de dados do array
console.log(alunos);

// O melhor aluno da sala é o Victor
// E o pior é o Phelipe.
console.log(`O melhor aluno da sala é a ${alunos[3]}`);

console.log(`E o pior é o ${alunos[2]}`);

/* Exercício 
1) Crie um array com o nome de 4 tecnologias/programas
que vc quer aprender/estudar mais.

2) Monte uma frase falando qual para que serve
o nome da segunda e da última tecnologia/programa*/

let programas = ["Python", "Javascript", "Java", "Php"];

console.log(programas);

console.log(`Quero aprender ${programas[1]} para fazer páginas interativas na web, e irei focar em ${programas[3]} porque gosto da linguagem.`);

// Array como matriz de 2 dimensões
let linguagens = [
    [ "HTML", "CSS", "JS" ], 
    [ "JAVA", "C++", 'C#' ]
];

console.log(linguagens);

console.log(linguagens[0][1]); // CSS 
console.log(linguagens[1][0]) // JAVA
console.log(linguagens[0][0]) // HTML


