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

function areArraysSameLength(arrayOne, arrayTwo){
	if(arrayOne.length != arrayTwo.length){
		return false;
	}
	else{
		return true;
	}
}

function compareSameLengthArrays(arrayOne, arrayTwo) {
	for (var i = arrayOne.length - 1; i >= 0; i--){
		if(arrayOne[i] != arrayTwo[i]){
			return false;
		}
		return true;
	}	
}


var test = "palindrome";
var test2 = "lalal";
var testArray = ["a", "b", "c"];
var testArray2 = ["a", "b", "a"];
var testArray3 = ["x", "f", "b", "f"];

console.log(areArraysSameLength(testArray, testArray3));
console.log(areArraysSameLength(testArray2, testArray3));
console.log(createReverseArray(testArray3));
console.log(compareSameLengthArrays(testArray, testArray2));
console.log(compareSameLengthArrays(testArray2, testArray2));