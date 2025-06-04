
function factorialize(n) {
    let sum = 0;
    for(let i=0;i<=n;i++){
        if(i==0){
            sum =1;
        }else{
            sum = sum *i;
        }
        console.log(`i is : ${i} and sum is : ${sum}`);
    }
}
factorialize(0);