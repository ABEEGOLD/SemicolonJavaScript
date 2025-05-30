function validateAtmCardNumberAndIdentifiesCardIssuer(numbers){


let array = [7,4,5,7,5,7,8,9,3,7,9,3,0,9,0,6];  

	let AtmIssuer = {visa, mastercard, discover,american express};
			console.log(AtmIssuer);
	let isValid = true
	for(let index = 0;index<array.length;index++){
		if(array.length === 16 && AtmIssuer[0] == 4){
			console.log(AtmIssuer(valid: true, AtmIssuer: "visa" ==4));
			return True 
			}
		if(array.length === 16 && AtmIssuer[1] == 5){
			console.log(AtmIssuer(valid: true, AtmIssuer: "mastercard" ==5));
			return true
			}
		if(array.length === 16 && AtmIssuer[2] == 6){
			console.log(AtmIssuer(valid: true,AtmIssuer: "discover"==6));
			return true
			}
		if(array.length === 15 && AtmIssuer[3] == 3){
			console.log(AtmIssuer(valid: true,AtmIssuer: "american express" ==3));
			return true
			}
			else{
				console.log(array.length("Invalid length"));
		
				};
		

		




		



	







