function smallestNumberMultiply(number){
            let multiply = "";
            
    for(let count = 0; count < 10;count++){
        for(let counter = 0; counter< 10; counter++){
            if(counter * count == number){
                multiply = count + counter;
            }
           return multiply
        }
     }

}
let number = 36;
let result = smallestNumberMultiply(number)
console.log(result)
