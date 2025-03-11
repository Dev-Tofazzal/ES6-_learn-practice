const numbers = [1,23,445,464,34,32];

// for(let i=0; i<numbers.length; i++)

for(const num of numbers){
    // console.log(num);
}

const nobab = "siraj ud doula";

for (const char of nobab ){
    // console.log(char);
    
}

const glass= {
    name: "glass",
    color: "golden",
    price: 1200,
    isCleaned: true
}

const keys = Object.keys(glass)
console.log(keys);

for(const keys in glass){
    const value = glass[keys]
    // console.log(keys,value);
    
}