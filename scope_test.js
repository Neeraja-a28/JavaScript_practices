var a = 10;
let b = 60;
const c = 100;
function m1(){
	console.log(c);
	m2();
	function m2(){
		var x = 50;
		console.log(x);
	}
}

// console.log(window.a);
// console.log(a);
// m1();
// console.log(x);

/*
{
	var a = 20;
	let b = 30;
	const c = 40;
	console.log(a);
	console.log(b);
	console.log(c);
}
	console.log(a);
	console.log(b);
	console.log(c);

	*/

function x(){
	var i = 7;
	return function y(){
		console.log(i);
	}
}

var z = x();
console.log(z);
z();

// setTimeout function using let and var

function sample(){
	for(let i = 0; i <= 5; i++){
		setTimeout(function(){
			console.log(i);
		}, 3000);
	}
	console.log("triggred sample function");
}
sample();


function sample2(){

	for(var i = 0; i<=5; i++){

		function close(argument) {
			setTimeout(function(){
			   console.log(argument);
		    }, 3000);
	    }

	    close(i);
	}
	
	console.log("sample2 is triggred")
}

sample2();