const actor = {
    name: "towfique",
    age: 30,
    phone: "01702497001",
    money: 123457854
}

const name = actor.name;
// if right side is an object left side of distructuring will be object as well

//use property name as a variable that contains the property value
const {phone,money, age} = actor; // Distructuring 

console.log(money);

// array distructuring 
const numbers = [12,23,4534,34,34];
const [x,y,z,r,t] = numbers;

//advanced
function doubleThem (a,b){
    return [a*2, b*2]
}

const [prothom, second] = doubleThem(6,9)
console.log(prothom,second);


