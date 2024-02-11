//Challenge (3): 

//1. Create the text "My name is: as a string. 
const someText = '"My name is: as a string.';
console.log(someText);

//2. Create your name as a string (for eg: "Simon")
const myName='"Umamaheswar"';
console.log(myName);

//3. Using Concatenation, add the 2 strings from 1st qos and 2nd qos together to create the text: 'My name is ___' (replace ___ with you name).
const splitText = someText.split(":");
const splitText1=splitText[0];
const concatText = splitText1 + " " + myName;
console.log(concatText);

//4. At a restaurant, you order 1 coffee (rs-5) and 1 bagel(rss-3). Using math, calculate the total cost, and using concatenation, create the text: 'Total cost: $___' (replace ___ with the total you calculated).
const coffeePrice=5, bagelPrice=3;
const totalOrderCost=coffeePrice+bagelPrice;
console.log("Total cost: $" + totalOrderCost);

//5. Do the same thins as 4th qos, but use a template string and interpolation. 
console.log(`'Total cost: $${totalOrderCost}'`)

//6. Display the text from 5th qos in a popup using alert(...);
alert(`Total cost: $${totalOrderCost}`);

//7. You order 1 coffee ($5.99) and 1 bagel($2.95). Using math, calculate the total cost, and using concatenation, create the text: 'Total cost: $____' (hint: calculate in cents to avoid inaccuracies)
const coffeeCost=5.99*100,bagelCost=2.95*100;
const totalOrderAmount=(coffeeCost+bagelCost)/100;
console.log("'Total cost: $"+totalOrderAmount+"'");

//8. Do the same thing as 7th question, but use a template string and interpolation. 
console.log(`'Total cost: $${totalOrderAmount}'`);

//9. Display the text from 8th question in a popup. 
alert(`Total cost: $${totalOrderAmount}`);

//10. Using a multi-line string, create the text from 8th question and add a line of text underneath: 'Thank You, come again!'. Display both lines in a popup. 
alert(`'Total cost: $${totalOrderAmount}
 'Thank you, come again!'`);