/*Task 2: Conditional Sums
For this task, you'll be adding only the numbers in the array which match the given condition.

You'll be given an array of numbers and a condition, such as odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

Do not use Array.prototype.filter()

Expected Output
6
9
144
0 */

var conditionalSum = function(values, condition) {
  var accumulator = 0;

  // Check the case if condition is "even" or "odd"
  switch (condition.toLowerCase()){
  	case "even":
  	// If the number at index i is even, the remainder when divided by 2 is 0
  	//otherwise it is odd
	  	for (var i = 0; i < values.length; i++) {
	  		if (values[i] % 2 === 0) {
	  			accumulator += values[i];
	  		}
	  	}
  	break;

  	case "odd":
  		for (var i = 0; i < values.length; i++) {
	  		if (values[i] % 2 !== 0) {
	  			accumulator += values[i];
	  		}
	  	}
  	break;
  }
  return accumulator;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));