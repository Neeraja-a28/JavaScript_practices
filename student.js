function student_marks(){
	marks = prompt("Enter Student marks");

	if (marks > 90){
		console.log("Grade A");
	}
	else if (marks > 75){
		console.log("Grade B");
	} else if (marks > 50){
		console.log("Grade C");
	}else if (marks > 35){
		console.log("Grade D");
	} else {
		console.log("Fail");
	}
}


function add_sum(num1, num2){
	console.log(num1 + num2);
}

// student_marks();
// add_sum(10, 15);