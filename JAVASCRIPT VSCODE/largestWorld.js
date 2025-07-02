   
function LargestWordSentence(word){
            let words = "";
            let largest = "";
     
    for(let index = 0; index<word.length; index++){
                if(word[index] === " "){
                    if(largest.length > words.length){
                        words = largest;
                    }
                    largest = "";

                }
                else{
                    largest += word[index]
                }

                
           
        }       
      if(word.length > largest.length){
        words = largest
      }
      return largest
    }

    console.log(LargestWordSentence("Ade is going to semicolon"))