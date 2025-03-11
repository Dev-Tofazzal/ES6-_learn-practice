// function declaration
function add (a,b){
    const result = a+b; 
    return result;
}

// function expression 
const add2 = function(){
    return a+b;
}

// arrow function 
const add3 = (a,b) => a+b;


const sum = add3(50,60)
console.log(sum);
