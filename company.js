class Company{
	constructor(cname, mobilenum){
		this.cname = cname;
		this.mobilenum = mobilenum;
	}

	getCompanyInfo(){
		console.log("company name is:", this.cname  +" and "+ "mobile number:", this.mobilenum);
	}
}

var c = new Company("genpact", 9000888123);
c.getCompanyInfo();