/*let arr = [1,2,3,-4,15,6,7,8,9,12];
let newArr = [];
for (let j = 0; j < 3; j++) {
    let max = arr[0];
    for ( let i=1 ; i<arr.length;i++){
        if(max <= arr[i]){
            max = arr[i];
            
            
        };
    };
    newArr.push(max);
    let index = arr.indexOf(max);
    if (index !== -1) {
    arr.splice(index, 1); 
    }
    if(newArr.length ==3){
        console.log(newArr);
    }
}
*/
let arr = [12, 5, 7, 1, 99, 23, 45];


function thirdHighest(arr) {
  let first = -Infinity, second = -Infinity, third = -Infinity;

  for (let num of arr) {
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second && num < first) {
      third = second;
      second = num;
    } else if (num > third && num < second) {
      third = num;
    }
  }

  return third === -Infinity ? null : third;
}
console.log(thirdHighest(arr)); 


