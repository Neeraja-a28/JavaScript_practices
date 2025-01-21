// Primitive: String, Number, Boolean, Null, Undefined, Symbol, BigInt.

var account = "primary"; 
var money = true;
var nil_account = null;
var location;
console.log(account);
console.log(money);
console.log(nil_account);
console.log(location);

// Non-Primitive: Object (including Arrays and Functions).

var obj = {
	name: "neeraja",
	location: "hyd"
}

var a1 = "neeraja";
var a2 = "Neeraja";

// console.log(a1 == a2);
// console.log(a1 === a2);
// console.log(2 === '2');

// console.log(obj);

const array = [1,2,3,4,2,3]
console.log(array);

const set = new Set([...array])
console.log(set);