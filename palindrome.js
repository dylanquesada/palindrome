"use strict";

function userInput(message){
	if(message != null){
		return prompt(message);
	}
	else{
		return prompt("Enter user input:");
	}
}

function stringToArray(string){
	var stringArray = [];
	for (var i = 0; i < string.length; i++) {
		stringArray[i] = string.charAt(i);
	}
	return stringArray;
}


var test = "palindrome";
var test2 = "lalal";
console.log(stringToArray(test));
console.log(stringToArray(test2));