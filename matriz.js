let matriz = [
    [1, 2, 3, 12, 12],
    [4, 5, 6, 12, 12, 21, 21, 2],
    [7, 8, 9, 2],
]

console.log("Bucle for normal");
for(let i = 0; i < matriz.length; i++){
    const subMatriz = matriz[i]
    for (let j = 0; j < subMatriz.length; j++) {
        const number = subMatriz[j];
        console.log(number);
    }
}
console.log("-".repeat(30));
console.log("For de JS");
matriz = matriz.flat()
matriz.forEach(e => console.log(e));
