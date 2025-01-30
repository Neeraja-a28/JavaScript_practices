function Counter(){
	var count = 0;

	this.incrementCounter = function(){
		count++;
		console.log(count);
	}

	this.decrementCounter = function function_name(argument) {
		count--;
		console.log(count);

	}
}

function x(){
	// console.log(a);
	if(true){
		const a = 10;
		console.log(a);
	}
	console.log(a);
}

console.log(x());

var count1 = new Counter();
count1.incrementCounter();
count1.incrementCounter();

count1.decrementCounter();

