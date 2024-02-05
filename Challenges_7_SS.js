//Challenge7 - Functions

//7.a. Create a function called 'greet' that displays the message "hello!" in the console. 
function greet(){
    console.log("Hello!");
}

greet();


//7.b. Continue from 7.a, add a parameter called 'name' to the 'greet' function and display the message: Hello (your name). 
//e.g. -> Hello James
var name="James";
function greet(){
    console.log("Hello, " + name + "!");
}

greet(name);

//7.c. Now, try calling greet() without a name (it will display 'Hello undefined()). 
//So, you need to modify the function so that if 'name' is undefined, it will display "hi there!", else.. display "Hey name".
function greet(name)
{
    if(!name)
    { console.log("Hi, there!"); }
    else 
    {console.log(`Hey ${name}`);}
}

greet(prompt("Your name?"));

/*
7.d. Create a function 'convertTemperature(degree,unit)' that takes a number and a unit (c or f) and converts it into the other unit. 
<> convertTemperature(25,c)=> 77F
<> convertTemperature(86,f)=> 30C
*/
var celci,fahre;
function convertCelciusToFahrenheit(degree)
{
    celci=(degree-32)/1.8;
    return celci;
}

function convertFahrenheitToCelcius(degree)
{
    fahre=(degree*1.8)+32;
    return fahre;
}

var aCelcius=convertCelciusToFahrenheit(89);
console.log("89 degree celcius is equal to ", aCelcius);

var aFahrenheit=convertFahrenheitToCelcius(45);
console.log("45 degree Fahrenheit is equal to ", aFahrenheit);

/*
{Add-on, in this same question} -> 
1) You need to take the input from the user in both degree and units. 
2) And while taking the input from unit, user should not be allowed to give input more than 1 character in input box. 
e.g. -> f (is correct input) 
	fah (is not correct input: because it's taking more than 1 character). 
*/
var celci,fahre;
function convertCelciusToFahrenheit(degree)
{
    celci=(degree-32)/1.8;
    return celci;
}

function convertFahrenheitToCelcius(degree)
{
    fahre=(degree*1.8)+32;
    return fahre;
}

var degree=prompt("Enter degree 'f' or 'c'");
var unit=prompt("Enter unit to convert as");
if(unit.length==1)
{
    if (unit=="f" || unit=="F")
    {
        console.log("Conversion of C to F ", convertCelciusToFahrenheit(degree));
        prompt("Conversion of C to F ", convertCelciusToFahrenheit(degree));
    }
    else if(unit=="c" || unit=="C")
    {
        console.log("Conversion of F to C ", convertFahrenheitToCelcius(degree));
        prompt("Conversion of F to C ", convertFahrenheitToCelcius(degree));
    }
    }
else
{
    unit=prompt("Enter unit in single character 'f' or 'c'");
}



/*
Challenger exercise: 
<-> Create a simple To-Do List. 
Things to add: 
1. Users can add, edit, and delete tasks.
2. Implement checkboxes to mark tasks as completed. 
3. Integrate functions to set custom reminders for tasks (using browser popups)
*/