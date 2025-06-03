

function balanceAmount(balance){
		if(balance < 100){
		
		}return balance;

		

	}
function withdrawalAmount(let balance,let moneyWithdraw){
	balance = balance - moneyWithdraw - 100;
		if(moneyWithdraw > balance){
			
			}return balance;



}



	console.log("Welcome To ABEE Bank!!!!!!");
		String BankApp = """

		1.Balance
		2.Account log
		3.exit

""";

	console.log(BankApp);

	
	console.log("Enter the balance:");
	let balance = 0.0
	console.log("Enter withdrawal amount must be multiples of $500 or $1000 only:");
		let moneyWithdraw  

		let reduction = balance - 100 - moneyWithdraw;  
		console.log("Withdrawal balance is:"+reduction);		

			if(moneyWithdraw % 500 == 0 && moneyWithdraw % 1000 == 0){
				console.log("Withdrawal fee is:"+100); 

				} 

			if(moneyWithdraw != 20000){
				console.log("You can't withdraw that amount");	
			}

			if(balance < 100){
				console.log("Insufficient account balance");
			}
			
			
	



}


}