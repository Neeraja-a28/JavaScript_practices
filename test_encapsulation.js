class TestEncapsulation{
	constructor(){
		var name;
		var marks;
	}

	getName(){
		return this.name;
	}

	getMarks(){
		return this.marks;
	}

	setName(name){
		this.name = name;
	}

	setMarks(marks){
		if(marks<0 || marks>100){
			alert("invalid marks");
		}else{
			this.marks = marks;
		}
	}

}

var test = new TestEncapsulation();
test.setName("Neeraja");
test.setMarks(100);

test.getName();
test.getMarks();
document.writeln(test.getName() + " "+ test.getMarks());
