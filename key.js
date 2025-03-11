const glass= {
    name: "glass",
    color: "golden",
    price: 1200,
    isCleaned: true
}

console.log(glass);

const keys = Object.keys(glass); // output: ['name', 'color', 'price', 'isCleaned' ]
const value = Object.values(glass); //output: ['glass', 'golden', 1200, true ]
const entries = Object.entries(glass)
// console.log(keys, value);
// console.log(entries); 
//output: 
// (two dimensional array / array of array)
// [
//     [ 'name', 'glass' ],  
//     [ 'color', 'golden' ],
//     [ 'price', 1200 ],    
//     [ 'isCleaned', true ] 
//   ]
delete glass.isCleaned;
const {isCleaned,...shortGlass} = glass
Object.freeze(glass)

console.log(shortGlass);


