// ATALHO CTRL ; COMENTÁRIO DE UMA LINHA

/*  ATALHO SHIFT ALT A
    COMENTÁRIO DE VÁRIAS LINHAS 
*/

// Comando de saída para o programador(a)
console.log("Oláaa JavaScript! :)");

// Outros comandos de saída (mais antigos)
// document.write("Saída direta na p´ágina")

// alert("Janela de diálogo para saída")


/* Criar "espaços de armazenamento"
temporário de dados na Memória RAM. Estes 
espaços são chamados de Variáveis e Constantes.
 
Variáveis e Constantes

Variáveis: declaradas com a palavra let ou var
Constantes: declaradas com a palavra const */

// Declarando e atribuindo valores
const nome = "Chapolin Colorado";
let ano = 2023;

// Declarando variáveis (sem atribuição)
// (elas são iniciadas como indefinida)
let curso, escola, uc; // várias separadas por ,
let cidade; //uma única

console.log(nome)
console.log(ano)
console.log(curso)


// declarando e atribuindo
/* let teste = "qualquer coisa" */

// apenas declaração
/* const teste; NÃO FUNCIONA */

// Atribuindo valores às variáveis declaradas
curso = "Téc. Informática para Internet";
escola = "Senac";
uc = 3;
cidade = "São Paulo";

let preco = 1457.88; // exemplo número "quebrado"
/* Quando o dado se trata de texto (ncluindo símbolos e outros caracteres), ele deve ser colocado entre aspas (simples ou duplas. Quando se trata de valor númerico (inteiro ou decimal), NÃO USE aspas.) */

// Saída de dados
console.log(curso, uc);
console.log(escola, cidade);


/* Saída de dados combinando dados 
dinâmicos (variáveis e constantes) COM dados estáticos
(textos/frases mais elaboradas.) */

/* Frase de exemplo para a saída:
Olá, me chamo Chapolin Colorado e 
estou fazendo o Téc. Informática para Internet
no Senac (2023). */

// Forma 1: CONCATENAÇÃO (tradicional, antiga)
console.log("Olá, me chamo " + nome + " e estou fazendo o " + curso + " no " + escola + " (" + ano + ")")

// Forma 2: TEMPLATE LITERAL/STRING (moderna)
console.log(`Olá, me chamo ${nome} e estou o ${curso} no ${escola} (${ano})`)

