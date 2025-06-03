let sum = 0;
for(let i =200; i<=2700;  i++){
    if ((i%3 == 0 || i%5 == 0)&& !(i%3 == 0 && i%5 == 0) ) {
        sum+=i;
        
    }
}
console.log(sum);
//////////////////////////////////
//example2
let arr =  [2,1,6,4,-7];
let newarr =[];
console.log(arr.length)
for(let i=0; i<arr.length;i++){
    newarr.unshift(arr[i]);
}
console.log(newarr);
//////////////////////////////////////////////
//example3
let bizarry = [];
for(let i =1 ; i<=135;i++){
    if(i%3==0){
        bizarry.push("Fizz");
    }else if(i%5==0){
        bizarry.push("Buzz");
    }else if(i%3==0 && i%5==0 ){
        bizarry.push("FizzBuzz");
    }
    else{
        bizarry.push(i);
    }
    
}
console.log(bizarry);
////////////////////////////////////////////
//example4
let myarrr =[];
 for(let i =0; i<=100;i++){
    if(i == 0 || i == 1){
        myarrr[i]=i;
    }else{
        myarrr[i]= myarrr[i-1]+myarrr[i-2];
    }
 }
 console.log(myarrr);
 /////////////////////////////////////////////
 //example5
 let array =[1,-2,4,-1];
 for(let i =0; i <array.length;i++){
    if(array[i]<0){
        array.splice(i,1);
        i=i-1;
    }
 }
 console.log(array);
////////////////////////////////////////////////////
//example6
let aaray =  ['Man', 'I','Love','The','Matrix','Program'];
for(let i=0;i<aaray.length;i++){
    if(aaray[i]=="Program"){
        let star = "*".repeat(aaray[i].length);
        aaray.splice(i,1,star);
    }
    
}
console.log(aaray);
