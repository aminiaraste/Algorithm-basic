 function check(string){
    let s = string.split("").join("").toLowerCase();
    for (let i = 0; i <=s.length/2;i++){
        if(s[i] != s[s.length - i - 1]){
                  return false; 

        }
        return true;
    }
    console.log(s);
};
console.log(check("alla"));