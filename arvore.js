class Node {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }
}

class ArvoreBinaria {
    constructor() {
        this.raiz = null;
    }

    inserir(valor) {

        const novoNo = new Node(valor);

        // 1. Árvore vazia
        if (this.raiz === null) {
            this.raiz = novoNo;
            return;
        }

        // 2. Começamos pela raiz
        let atual = this.raiz;

        // 3. Caminhamos pela árvore
        while (true) {

            // Vai para a esquerda
            if (valor < atual.valor) {

                // Encontrou espaço
                if (atual.esquerda === null) {
                    atual.esquerda = novoNo;
                    return;
                }

                // Continua caminhando
                atual = atual.esquerda;

            } else {

                // Vai para a direita
                if (atual.direita === null) {
                    atual.direita = novoNo;
                    return;
                }

                // Continua caminhando
                atual = atual.direita;
            }
        }
    }
}

const arvore = new ArvoreBinaria();

arvore.inserir(10);
arvore.inserir(5);
arvore.inserir(15);
arvore.inserir(2);
arvore.inserir(7);
arvore.inserir(12);
arvore.inserir(20);

console.log(arvore);