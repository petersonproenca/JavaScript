
function fibo(n){
    //sequencia de fibonacci ate o nth termo
    //sem recursao 
    let anterior = 1,
        proximo = 1;
    let counter = 1;
    while (counter < n){
        let fibo = anterior + proximo;
        console.log(fibo);
        anterior = proximo;
        proximo = fibo;
        counter++;
    }
}
fibo(10);
