$(document).ready(function(){

//define a variable and instantiate it means to tell the computer that the variable exists and what type of variable it is (string, float, etc)
var firstWord = ""; 
//this would be called a "global" variable

	$("form").submit(function(event){
		console.log("submitted");
		var userInput = $("input:first").val();
		console.log(userInput)
		event.preventDefault();


 		$.ajax ({
 			url: "https://api.datamuse.com/words?rel_rhy="+userInput,
 			datatype: "JSON",
			success : function(parsed_json){
				// console.log(parsed_json);
				var randomNumber = Math.floor((Math.random())*(parsed_json.length));
				//".length" is a property of all arrays -- each array has a certain number of objects in it and .length is the number of objects
				//Math.floor() and Math.random() are good to know! 
				console.log(randomNumber);
				console.log(parsed_json[randomNumber]);
				// calling an element of an array or an object inside another object uses [] and the numerical position of the object in the array
				console.log(parsed_json[randomNumber].word);
				//to call a property of an object, you'll usually use a period and the property name, like ".word"
				var firstWord = parsed_json[randomNumber].word;
				 	$.ajax ({
				 		url: "https://api.datamuse.com/words?ml="+firstWord,
				 		datatype: "json",
				 	 	success: function(parsed_json2){
				 	 			if (parsed_json2 == 0) {
				 	 				console.log(parsed_json2);
				 	 				console.log("nope");
				 	 			} else { 
				 	 				var randomNumber2 = Math.floor((Math.random())*(parsed_json2.length));
				 		 			var firstWordML = parsed_json2[randomNumber2].word;	
				 		 			console.log(firstWordML);

									// var secondWord = firstWord[17].word;
									// 	$.ajax ({
									// 		url: "https://api.datamuse.com/words?rel_ant="+secondWord,
									// 		datatype: "json",
									// 		success: function(parsed_json){
									// 		console.log(parsed_json);
									// 		}
									// 	})
				 	 			}

				 		 }



				 	 	})
				 			



 					
			}

 		

		})

	})

})

		
	

 		

 		





