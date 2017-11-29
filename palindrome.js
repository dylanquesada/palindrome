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

function createReverseArray(array) {
	var newArray = [];
	for (var i = 1; i <= array.length; i++) {
		newArray[array.length - i] = array[i - 1];
	}
	return newArray;
}

// function areArraysSameLength(arrayOne, arrayTwo){
// 	if(arrayOne.length != arrayTwo.length){
// 		return false;
// 	}
// 	else{
// 		return true;
// 	}
// }

function compareSameLengthArrays(arrayOne, arrayTwo) {
	for (var i = arrayOne.length - 1; i >= 0; i--){
		if(arrayOne[i] != arrayTwo[i]){
			return false;
		}
		return true;
	}	
}

function runPalindromeDetector(){
	let input = userInput();
	input = stringToArray(input);
	let test = createReverseArray(input);
	if(!compareSameLengthArrays(input, test)){
		alert("That's not a palindrome!");
		return false;
	}
	else
	{
		alert("Okay! That's a pallindrome!");
		return true;
	}
}

runPalindromeDetector();
