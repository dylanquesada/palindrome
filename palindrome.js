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


function areArraysSameLength(arrayOne, arrayTwo){
	if(arrayOne.length != arrayTwo.length){
		return false;
	}
	else{
		return true;
	}
}
// function compareArrays(arrayOne, arrayTwo){
// 	var same = true;
// 	if


// }
var test = "palindrome";
var test2 = "lalal";
var testArray = ["a", "b", "c"];
var testArray2 = ["a", "b", "c"];
var testArray3 = ["x", "f", "b", "f"];

console.log(areArraysSameLength(testArray, testArray3));
console.log(areArraysSameLength(testArray2, testArray3));
console.log(areArraysSameLength(testArray, testArray2));