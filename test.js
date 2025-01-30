class Test{
	testMethod(){
		var test = document.querySelector(".test");
		test.innerHtml = "New test Method is created";
		console.log(test);

		setTimeout(function() {
			console.log("Waiting!...");
			}, 2000);
		console.log("welcome Javascript");
	}

   
}

const testInstance = new Test();