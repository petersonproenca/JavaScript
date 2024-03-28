
function btn(){
    //mudar o botap para stop
    const btn = document.getElementById('btn');
    const start_msg = document.getElementById('start');
    //let value_btn = document.getElementById('btn').value;
    btn.classList.toggle('btn-stop');
    if (!btn.classList[1]){
        //quando aperta o stop
        btn.innerText= 'start';
        start_msg.innerText = '';
        reset();
        
    }
    else {
        //quando aperta o start 
        btn.innerText= 'stop';
        start_msg.innerText = 'JOGO COMEÇOU!';
        let c = 0;
       
        document.onclick = (e) => {
            console.log(e.target.tagName);
            console.log(e.target.className);
            if (e.target.className == 'casa'){
                if (c %2 == 0){
                    document.getElementById('start')
                    e.target.innerText = 'X';
                    if (checkwinner()){
                        alert('fim');
                        reset();
                    };
                }
                else {
                    e.target.innerText = 'O';
                    if (checkwinner()){
                        alert('fim');
                        reset();
                    };
                }
                c++;
                
            }
            
        }
        

    }
}
function checkwinner() {
    let casas = new Array(9);
    for (i=0; i < 9;i++){
        casas[i] = document.getElementsByClassName('casa')[i].innerText;

    }
    let w = false;
    //let casas = ['x','','','','x','','','','x'];
    const posicoes = [[0,1,2],[0,3,6],[0,4,8],[3,4,5],[1,4,7],[6,7,8],[6,4,2],[2,5,8]];
    for (let pos of posicoes){ //cada grupo de 3
        let set = new Set();
        for (let i of pos){
            set.add(casas[i]);
        }

        if (set.size > 1 || set.has('')){
            w = false;
        }
        else{
            console.log(pos);
            w = true;
            return w; 
        }
    }
    return w;

}
function reset(){
    for (i = 0; i < document.querySelectorAll('.casa').length; i++) {
        document.querySelectorAll('.casa')[i].innerText= '';
    }
}


/* class JogodaVelha {
    constructor() {
        this.board = new Array(9);
        this.freesize = 9;
    }

    checkwinner() {
        const posicoes = [[0,1,2],[0,3,6],[0,4,8],[3,4,5],[1,4,7],[6,7,8],[6,4,2],[2,5,8]];
        //let casas = new Array(9);
        let w = false;
        for (let pos of posicoes){ //cada grupo de 3
            let set = new Set();
            for (let i of pos){
                set.add(this.board[i]);
            }
    
            if (set.size > 1 || set.has('') || set.has(undefined)){
                w = false;
            }
            else{
                console.log(this.board,pos,set);
                w = true;
                return w; 
            }
        }

        return w;
    }
    //funcao para colocar o x ou o 0 na casa
    click () {
        let arg; 
        if (this.freesize%2 == 0){arg = 'X'}
        else{arg ='O'}

        this.freesize -= 1;
        document.onclick = (e) => {
            if (e.target.className == 'casa'){
                e.target.innerText = arg;
                this.board[e.target.id-1] = arg;
                console.log(this.board);
            }
        }
        if (this.checkwinner()){
            return alert('fim com winner');
            
        }
        if (!this.winner && !this.freesize == 0){
            return alert('FIM TIED');
        }

    }

}
console.log('funciona');
let game = new JogodaVelha();
console.log(game.freesize);
 */
/* if (game.freesize%2 == 0){arg = 'X'}
        else{arg ='O'}

        game.freesize -= 1;
        document.onclick = (e) => {
            if (e.target.className == 'casa'){
                e.target.innerText = arg;
                game.board[e.target.id-1] = arg;
                console.log(game.board);
            }
        }
        if (game.checkwinner()){
             alert('fim com winner');
            
        }
        if (!game.winner && !game.freesize){
             alert('FIM TIED');
        } */




