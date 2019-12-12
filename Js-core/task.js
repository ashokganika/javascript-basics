function multiply(value1){
	function calculation(value2){
		return value1*value2;
	}
	return calculation;
}

// var result = multiply(3)(4);
// console.log("The multipication of given numbers is: ", result);

module.exports = multiply;