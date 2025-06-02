const prompt = require("prompt-sync")();


function randomNumbers(numbers){
	let firstNumber = Math.floor(Math.random() * 101);
	let secondNumber = Math.floor(Math.random() * 101);
	
	let subtractionOperator = 0;

		
	if(firstNumber > secondNumber){
		subtractionOperator = firstNumber - secondNumber;
		console.log(subtractionOperator)
				}
			else if(firstNumber < secondNumber){
				let scorelow = secondNumber;
				subtractionOperator = secondNumber - scorelow;
					console.log(secondNumber+ "-" +scorelow)
		        			}
		
		return subtractionOperator

}

count = 0;

for(let ans = 1; ans <= 10; ans++){
	console.log("question"+ ans)

	let Attempt = randomNumbers();
	userAnswer = prompt("What is your answer?")

	if(userAnswer == randomNumbers){
		count++		
	}
	
	else if(userAnswer != randomNumbers){
		console.log("second try")
		console.log("What is your answer?")
	}			


}
	
console.log("The score is  "+ count + "/10")

	





	
	
	




