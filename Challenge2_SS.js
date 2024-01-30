// At a restaurant, you order 1 soup of Rs-10, 3 burgers for Rs-8 each, and 1 ice-cream for Rs-5. 
//Use JavaScript to calculate the cost of the order. 
let soup=10;
let burger=8;
let iceCream=5;
var totalCost=soup+(3*burger)+iceCream;
console.log("1. The total cost of the order is Rs.", totalCost);

// You're at a restaurant with 2 friends (3 people in total) and make the same order as above 1. Calculate how much each person pays. 
console.log("2. The cost per person of the order is Rs.", totalCost/3);


// Calculate the total cost of a toaster (Rs-18.50) and 2 Shirts (7.50 each). 
let toaster=18.50;
let shirt=7.50;
let total=toaster+(2*shirt);
console.log("3. The total cost is Rs.", total);

// Calculate a 10% tax for the total in above (qos-3).
var tax10=total*(10/100);
console.log("4. The 10% tax of the total (3) is Rs.", tax10);

// Calculate a 20% tax for the total in (qos 3) (remember that 1% = 1/100, so 20% = 20/100).
var tax20=total*(20/100);
console.log("5. The 10% tax of the total (3) is Rs.", tax20);

// The temperature is 25 degree Celcius. Calculate the temperature in Fahrenheit.
const cel=25;
const fahr=(cel*1.8)+32;
console.log("6. Answer: "+cel+" degree Celcius is equal to "+fahr+ " degree Fahrenheit");

// The temperature is 86 degree Fahrenheit. Calculate the temperature in Celcius.
let fahren=86;
let celc=(fahr-32)/1.8;
console.log("7. Answer: "+fahren+" degree Fahrenheit is equal to "+celc+ " degree Celcius");

// The temperature is -5 degree Celcius. Calculate the temperature in Fahrenheit.
const celci=25;
const fahrenh=(cel*1.8)+32;
console.log("8. Answer: "+celci+" degree Celcius is equal to "+fahrenh+ " degree Fahrenheit");