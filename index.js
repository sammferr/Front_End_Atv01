import { Produto } from './Produto.js';

// 1. Variáveis
const nomeLoja = "Tech Store";
let desconto = 0.1;
var categoriaPrincipal = "Eletrônicos";

// 2. Funções (Tradicional e Arrow)
function calcular(p, d) { return p - (p * d); }
const calcularArrow = (p, d) => p - (p * d);

// 3. Objeto Literal
const prodObjeto = { nome: "Mouse", preco: 50, categoria: "TI" };

// 4. Array com 5 produtos
const lista = [
    new Produto("Monitor", 800, "Hardware"),
    new Produto("Teclado", 150, "Hardware"),
    new Produto("Mouse", 80, "Hardware"),
    new Produto("Fone", 200, "Acessórios"),
    new Produto("Cabo HDMI", 30, "Acessórios")
];

// 4. Manipulação de Arrays (Map, Filter, Reduce)
const nomes = lista.map(item => item.nome);
const apenasHardware = lista.filter(item => item.categoria === "Hardware");
const totalGeral = lista.reduce((soma, item) => soma + item.preco, 0);

// 5. Destructuring
const { nome, preco } = lista[0];

// 7. Operadores (Ternário e Spread)
const status = desconto > 0 ? "Promoção" : "Normal";
const novaLista = [...lista, new Produto("Webcam", 120, "Hardware")];

// --- SAÍDAS NO CONSOLE PARA COMPROVAÇÃO ---
console.log("Loja:", nomeLoja);
console.log("Nomes:", nomes);
console.log("Apenas Hardware:", apenasHardware);
console.log("Preço Total:", totalGeral);
console.log(`Produto Destructuring: ${nome} - R$${preco}`);
console.log("Status:", status);
console.log("Total itens com Spread:", novaLista.length);
console.log("Método exibirInfo:", lista[1].exibirInfo());