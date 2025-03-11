const max = Math.max(6,23,45,1,89,23);
const numbers = [34,342,232,53,533,64,45]
const arrayMax = Math.max(...numbers)
console.log(arrayMax);

// console.log(...numbers);

console.log(max);

// use spread operator to copy
const nums = [23,34,54,345,64];
const nums2 = nums;
const nums3 = [...nums]
nums2.push(12);

console.log(nums2);
console.log(nums3);
