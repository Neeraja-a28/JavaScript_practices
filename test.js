class Test{
	testMethod(){
		var test = document.querySelector(".test");
		test.innerHtml = "New test Method is created";
		console.log(test);

	}
}

const testInstance = new Test();