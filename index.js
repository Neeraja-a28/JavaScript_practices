var data = 10;
console.log(data);

function greet(str){
	return `Hello, ${str}`;
}
// var userInput = prompt("Enter your name:");
//console.log(greet(userInput));

// using let, var and const

function method1(){
	user = prompt("Enter details");

	if(user){
		let name = "neeraja";
		console.log(name = "Jhon");
	} 

	// console.log(name); let value will be access within block level only

	inside_method();


	function inside_method(){
		var address = "hyd";

		if(true){
			console.log(address);
		}

		console.log(address); // var value will be access within function level
	}

	const t1 = 100;
	if(true){
		console.log(t1);
	}

	function m1(){
		console.log(t1); // const value will access within block level. by using const we need to assign value and we can't modify
	}
}

// method1();