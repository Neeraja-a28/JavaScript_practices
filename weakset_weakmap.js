const weakMap = new WeakMap();
let obj1 = {name: "jhon", sal: 30000};
let obj2 = {name: "doe", sal: 25000};

weakMap.set(obj1, "valu1");
weakMap.set(obj2, "valu2");

console.log(weakMap.get(obj1));
console.log(weakMap.get(obj2));

obj1 = null;
console.log(weakMap.get(obj1));

// weakset

const weakSet = new WeakSet();
let obj3 = {name: "ravi", sal: 40000};
let obj4 = {name: "manasa", sal: 30000};

weakSet.add(obj3);
weakSet.add(obj4);

console.log(weakSet.has(obj3));
console.log(weakSet.has(obj4));

obj3 = null;
console.log(weakSet.has(obj3));