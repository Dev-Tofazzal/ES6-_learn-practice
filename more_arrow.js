const difference = (x,y) => x-y; 
const multiply = (first,second,third)=> first*second*third;

// single parameter using object and array 
const getAge = (person) => person.age;
const student = { name: "ananata",age: 45};
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[3];
const third = getThird([5,445,45,64,3,45])
console.log(third);

// no parameter

const getPI = () => Math.PI
console.log(getPI());

// large arrow function. if you want to get anything returned from this function.Then you have to use the return keyword


const doMath = (x,y,z) => {
    const sum = x+y+z;
    const mult = x*y*z;
    const result = sum + mult;
    return result;
}
