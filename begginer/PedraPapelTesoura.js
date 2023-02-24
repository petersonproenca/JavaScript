//Jogo de pedra, papel e tesoura
const array = ['pedra', 'papel','tesoura'];
const rodadas = 5;
let Score1 = 0,
    Score2 = 0;

let counter = 0;

while (counter < rodadas){
    
    let player1 = array[Math.floor(Math.random()*3)],
        player2 = array[Math.floor(Math.random()*3)];
        
    if (player1 === player2) {
        console.log(counter,'empate',player1,player2)
        continue;
    };
    
    if (player1 === 'pedra'){
        if (player2 === 'papel') {Score2++}
        else {Score1++}
    }
    
    else if (player1 === 'papel') {
        if (player2 === 'tesoura') {Score2++}
        else {Score1++}
    }
    
    else if (player1 === 'tesoura'){
        if (player2 =='pedra') {Score2++}
        else {Score1++}
    }
    
    console.log(player1,player2);
    console.log(Score1,Score2);
    counter++;

}
 
let winner = (Score1 > Score2) ? 'Player 1 Wins!': 'Player 2 wins!';
console.log(winner,Score1, Score2);
