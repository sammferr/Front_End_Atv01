// 6. Módulo ES6 - Export
export class Produto {
    // 3. Classe e Propriedades
    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }

    // Métodos solicitados
    aplicarDesconto() {
        return this.preco - 10; // Desconto simples de 10 reais
    }

    exibirInfo() {
        // 5. Template Literals
        return `${this.nome} custa R$${this.preco}`;
    }
}