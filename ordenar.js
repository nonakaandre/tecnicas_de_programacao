let numeros = [12, 4, 6, 8, 1, 3, 7, 10, 2];
let pm = 0;
let aux = 0;
let v = 0;
for (i = 0; i < numeros.length-1; i++) {
    
    for (i = 1; i < numeros.length-1; i++) {
        if (numeros[i] < numeros[i + 1]) {
            aux = numeros[i];
            numeros[i] = numeros[i + 1];
            numeros[i + 1] = aux;
        }
    }
}
console.log('O menor número é: ' + numeros[pm]);