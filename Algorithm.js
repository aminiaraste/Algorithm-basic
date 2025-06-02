for (let i=1; i < 135; i++) {
    console.log(i);
}
///////////////////////////////////////////////////
// example 2
for (let i = 1; i < 135; i++) {
    if (i % 2 !== 0) {
    console.log(i + " is odd");
}
}
// example 3
let sum = 0;
for (let i = 1; i < 135; i++) {
    sum +=i;
    console.log(`Number: ${i}, Sum: ${sum}`);
}
// example 4
let Xarr = [1,4,2,12];
for (let i = 0; i < Xarr.length; i++) {
    console.log(`index :${i}, value: ${Xarr[i]}`);
}
// example 5
let Y = [1,4,2,12,2,-3,-1,0];
let max = 0;
for (let i=0; i< Y.length; i++) {
    if (Y[i]>max){
        max = Y[i];
    }
}
console.log(`Max value: ${max}`); // Max value: 12
// example 6
let avrage =0;
let X = [1,4,2,12,2,-3,-1,0];
for (let i = 0; i < X.length; i++) {
    avrage += X[i]; 
}
console.log(`Average: ${avrage / X.length}`); // Average: 2.25
// example 7
let Number = [1, 4, 2, 12, 2, -3, -1, 0];
for (let i = 0; i < Number.length; i++) {
    if (Number[i]<0){
        Number[i] = 0;
    }
}
console .log(Number);
// example 8
let arr = [1, 2,-3, 3, 4,-9, 5];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        arr[i] = 'N';
    }
}
console.log(arr);