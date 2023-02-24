let lista = [];
for (let i = 2; i < 100; i++){
    let prime = true;
    const temp = [2,3,5,7,11];
    for (let j in temp) {
        if (i != temp[j] && (i%temp[j] == 0)){
            prime = false;
        }
    }
    if (prime) {lista.push(i)};
}
console.log(lista);
