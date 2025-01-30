let person = {
	name: "jhon",
	sal: 30000,
	address: {
		city: "hyd",
		country: "india",
	}
}

// shallow copy
let person2 = {...person}
person2.address.city = "chennai";

console.log(person.address.city); // Output: chennai (Original object is also affected)
console.log(person2.address.city); // Output: chennai (Copied object reflects the change)


// deep copy

let person3 = JSON.parse(JSON.stringify(person));
person3.address.city = "banglore";

console.log(person.address.city);  // Output: hyd (Original object is NOT affected)

console.log(person3.address.city); // Output: bangalore (Copied object reflects the change)

  