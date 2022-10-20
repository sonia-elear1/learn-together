var countAndSay = function(n) {
    let j = 2;
    let result = "1"
    while(j <= n) {
        let temp = result.split("");
        let count  = 1
        result = "";
        for(let i = 0 ;i< temp.length; i++){
          if(temp[i] === temp[i+1]){
            count++
          }
          else{
            result+=count.toString()+ temp[i]
            count = 1;
          }
        }
        j++;
    }
    return result;
};

console.log(countAndSay(3))