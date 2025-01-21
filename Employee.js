
// inheritance concept and polymorphism example
class Employee extends Company{
	constructor(cname, mobilenum, sal, name){
		super(cname, mobilenum);
		this.sal = sal;
		this.name = name;
	}


	employee_detail(){
		return `Hi, I'm ${this.name} and my salary is ${this.sal}.`;
	}

	static say_hello(){
		// document.write("Hello Jhon")
	}

	getCompanyInfo(){
		console.log("Employee name is:", this.name + " With salary is",this.sal + " company name is:", this.cname  +" and "+ "mobile number:", this.mobilenum);
	}
}

var e1 = new Employee("amazon", 9009008001, 15000, "Jhon");
console.log(e1.employee_detail());
console.log(e1.getCompanyInfo());

Employee.say_hello();