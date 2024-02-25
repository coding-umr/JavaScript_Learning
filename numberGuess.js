function result(guess) {
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  count = count + 1;
  if (count <= 10) {
    console.log("Computer choice is " + randomNumber);
    console.log("User input is " + guess);
    if (guess >= 1 && guess <= 100) {
      if (guess < randomNumber) {
        console.log("Matching guess: Too Low!");
      } else if (guess > randomNumber) {
        console.log("Matching guess: Too High!");
      } else if (guess == randomNumber) {
        console.log("Matching guess: Correct!");
      } else {
        console.log("Better luck next time");
      }
    } else console.log("Input is out of range");
    console.log("Attempt number " + count);
    console.log("---------------------");
  } else console.log("Exceeded maximum number of attempts");
}

let count = 0;

result(1);
result(11);
result(10);
result(1000);
result(12);
result(55);
result(87);
result(74);
result(23);
result(22);
result(75);
result(1000);
