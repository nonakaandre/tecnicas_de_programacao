let numeros = [12, 4, 6, 8, 1, 3, 7, 10, 2];
let aux = 0;

for (let i = 0; i < numeros.length - 1; i++) {
    for (let j = 0; j < numeros.length - 1 - i; j++) {
        if (numeros[j] > numeros[j + 1]) {
            aux = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = aux;
        }
    }
}
console.log(numeros.join(', '));