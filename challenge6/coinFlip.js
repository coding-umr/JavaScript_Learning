let randomNumber=Math.random();
let guess=prompt("Make a guess from: heads/tails: ")

let result="";
if (randomNumber>0.5){
    result="heads"
}
else{
    result="tails"
}
console.log(guess==result?"You win":"You lose");