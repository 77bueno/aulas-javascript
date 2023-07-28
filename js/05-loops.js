// console.log("loops!");

/* Principais comandos de repetição

Uso geral:
while    -> ENQUANTO
for      -> PARA

ATENÇÃO!
Os loops de uso geral PRECISAM de uma
variável de controle de repetição.

Usados e Objetos e Arrays
for/in   -> PARA/EM (Arrays)
for/off  -> PARA/DE (Objetos) */

/* Exemplo 1: loop while

Variável de controle */

/* let contador = 1;
while( contador <= 5 ){
    alert(`Posso fazer uma pergunta? (Irritante)`);

    // ++ INCREMENTO
    contador++;s
} */

// Exemplo 2: for (PARA)
/* for( let i = 1; i <= 50; i++ ){
    console.log(`Valor de i é: ${i}`);
} */

/* Nomenclatura para
variáveis de controle:
i, j, ou k */

// Exemplo 3: loop com array 
let bandas = [
    "Slayer", "Pink Floyd", "Rush", "Nightwish", "Savatage"
];

// com farofa (for of)
for( let banda of bandas ){
    console.log(`Banda: ${banda}`);
}

// sem farofa (for)
for( let i = 0; i < bandas.length; i++ ){
    console.log(`Banda: ${bandas[i]}`);
}

// Exemplo 4: loop for/in com objeto
let pessoa = { 
    nome: "Fulano da Silva",
    idade: 40,
    cidade: "São Paulo"
};

for(let dados in pessoa) { 
    // Mostra apenas o nome de cada propriedade
    console.log(dados);

    // Mostra valores de cada propriedade
    console.log(pessoa[dados]);
}