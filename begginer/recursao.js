//recursividade JS
function somaLista(temp){
    if (temp.length == 1){
        return temp[0]
    }
    while (temp.length) {
        let num = temp.pop();
        return num + somaLista(temp);
    }
}

function fatorial(n){
    if (n == 0) return 1
    else {
        let fat = n
        return fat * fatorial(n-1);
    }
}


console.log(somaLista([1,2,3,4,5]));

let a = somaLista([2,3,4]);
console.log(a);

console.log(fatorial(5))
