/*Task 1: Repeating Numbers
You'll be given a two dimensional array (an array of arrays), each sub-array will only have two values. The first will be the value to repeat, the second will be the amount of times to repeat that value.

Your function repeatNumbers should return a string with each of the given values repeated the appropriate number of times, each set of values separated by a comma. If there is only one set of values then you should omit the comma.

Expected Output
1111111111
11, 222
10101010, 343434343434, 9292*/

var repeatNumbers = function(data) {
  // Put your solution here
	var accumulator = ""; //Create accumulator as string

	for(var i = 0; i < data.length; i++) { //Loop through multidemnsional array
		//Put the array in index i of data into oneDimensionalArray
	    var oneDimensionalArray = data[i]; 

	    //Loop through the oneDimensionalArray
	    for(var j = 0; j < oneDimensionalArray[1]; j++) { // Loop through one dimensional array
	        //Add number in position 0 of oneDimensionalArray to accumulator        
	        accumulator += oneDimensionalArray[0];
	    }
	    //If we haven't reached the end of the array add a comma and space
	    if (i != data.length -1) {
	    	accumulator += ", ";
	    }
	}

	return accumulator;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));