function firstArmstrongNumber(number){
    let total = 0
    let lengthOfNumber = number.toString().length

    let result = 0
    for (let j = 0; j<lengthOfNumber; j++){
            let digit = number % 10;
            number = Math.floor(number / 10);
            let armstrong = Math.pow(digit,lengthOfNumber)
            result += armstrong;
    }      
    if(total == result) return true
    return false        
}
console.log(firstArmstrongNumber(153))
          
           
        
    
