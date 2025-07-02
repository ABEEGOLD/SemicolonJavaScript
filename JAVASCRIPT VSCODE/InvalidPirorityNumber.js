function remove_invalid_priority_Number(number){
       
       let newArray = []
    for(let count = 0; count<number.length; count++){
        if(number[count] > 1 && number[count] <= 5){
                        newArray.push(number[count])
                       
}
    } 
             return newArray
}
let number = [1,2,3,4,5,0,6]
result = remove_invalid_priority_Number(number)
console.log(result)


