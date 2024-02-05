var name="James";
function greet(){
    if(!name)
    {    console.log(`Hey there`);}
    else{
        console.log(`Hello ${name}`);
    }
}

greet(promt('Enter your name'));