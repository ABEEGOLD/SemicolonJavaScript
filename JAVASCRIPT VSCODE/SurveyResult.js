function survey_result(array){
    let number = []
    for(let count = 0; count < array.length; count++){
        if(array[count].score > 80 && array[count].score <= 100){
                    number.push(array[count].name);
                    
        } 
    }
            return number;
}
let array = [{name: "abee", score: 45}, {name: "purity", score: 90}, {name: "caleb", score: 98}, {name: "john", score:78}];
totalResult = survey_result(array);
console.log(totalResult);
