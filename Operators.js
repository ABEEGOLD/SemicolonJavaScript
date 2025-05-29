 const prompt = require("prompt-sync")();


let  left_operand = Number(prompt("Enter a number")) 
let  right_operand = Number(prompt("Enter a number"))
let  ans = 0;
let operator = prompt("Choose between + to add, or - to subtract, or * to multiply or / to divide")

switch(operator){
	case "+":
		ans =left_operand + right_operand
		console.log(ans) 
		break;

	case "-":
		ans =left_operand - right_operand
		console.log(ans) 
		break;

	case "*":
		ans =left_operand * right_operand
		console.log(ans) 
		break;

	case "/":
		ans =left_operand / right_operand
		console.log(ans) 
		break;
	
	default: 
		ans = "NAN"
		console.log(ans)

	
		
 
		

		

		

		
		









}

