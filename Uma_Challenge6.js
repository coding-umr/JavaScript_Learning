//Challenge(6)- Booleans and If-Statements

/*6.a. Create a variable called "hour" and save the current hour of the day (use 24-hour format and save it as a number b/w 0 and 23).
- If hour is b/w 6 and 12, display "good morning".
- If hour is b/w 13 and 17, display "good afternoon".
- If hour is b/w 17+, display "good night".*/
/*const name=prompt("Welcome! JS learning. what is your name?");
const hour=prompt("What is the time now?");

if(hour >= 6 & hour <=12)
	console.log("good morning " + name);
else if(hour >=13 & hour <=17)
	console.log("good afternoon " + name);
else if(hour >17 & hour <=23)
	console.log("good night " + name);
else
	console.log("have a nice day " + name);*/

//6.b. Continue with 6.a., store the variable called 'name' and save your name inside as a string. (e.g. -> Good morning James) 


/*6.c. Imagine a park that has a discount for children (6 years and younger) or senior(65years+)
- You need to display "disount" and "no discount" in console according to condition.
- [Add-on in same qos]: Now, let's say the discount is only available if it is not a holiday. You just need to update above code with this new code with the same display in console. */

/*const day=prompt("Is it holidy?");
const age=prompt("What is the your age?");
let holiday = false;
if(day=='yes')
	holiday = true;

if(holiday==false){
	if(age <= 6 | age >65)
		console.log("Discount applied");
	else 
	console.log("Sorry! No discount");
}else 
	console.log("Sorry! No discount");
/*
/*
6.d. Create a Coin-flip game: 
- Generate a random_number and save it in a variable.
- If the no > 0.5 then display 'heads' else 'tails'.
- [Add-on]: Now create a variable and save the user's response (head/tail) and match with the computer_choice (basically from the random_number)(just need to add your code in bullet point 1).
- [Challenge]: Instead of using if-else try to use ternery operators for the same question. 
*/
let x = Math.random();
console.log(x);
/*let outcome = '';
let userResponse = prompt("What is your call");
if(x > 0.5 & userResponse == 'heads')
	//outcome = 'heads';
	console.log('heads');
else
	//outcome = 'tails';
	console.log('tails');
*/	
const tossResult = x>0.5 ? 'heads' : 'tails';
console.log(tossResult);	

/*
6.e. Create a Cart_Quantity Project. 
- Go to exercise 5.k. 
- Let's say the cart has a maximum quantity of 10. before updating the quantity, check if the quantity will be greater than 10: 
(1): if it is greater display: "the cart if full" else update the quantity in the cart. 
- And in case of -2,-3 before updating the quantity in cart, check if it is equals to 0 or not.
(1) if it's equal to 0, display "Not enough items in the cart" else just update the cart. 

//updated in challenge 5 code

6.f. Create a rock/paper/scissor game. 
(hint: Use math.random() for generating the random values from computer) 

- You need to create (1) button that will ask from the user: rock/paper/scissor. 
- If the button's value matches with the computer's value you need to print: You win!, else: You lose! 
*/