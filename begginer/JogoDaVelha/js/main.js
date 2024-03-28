console.log('javascript works!');

let count = 0;

function Clear(){
    document.getElementById('result').value = "";
    document.getElementById('error-msg').innerText = "";
}

function append(value){
    
    if (value === '.') {
        
        count += 1;}
    if (document.getElementById("result").value == '' || value === '*' || value === '+' || value === '-' || value === '/')count = 0;
  
    if (count > 1 && value == '.' ) {
        document.getElementById('error-msg').innerText = "PROBLEMA";
    }
    else {
        document.getElementById('result').value += value;
        console.log(document.getElementById("result").value);
        document.getElementById('error-msg').innerText = "";
    }
    console.log(count);
}

function Calculate(){
    let x = document.getElementById('result').value;
    let result = eval(x);
    document.getElementById('result').value = result;
}



