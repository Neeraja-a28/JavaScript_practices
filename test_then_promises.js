let p = new Promise((resolved, rejected) => {
	setTimeout(()=>{
		console.log("promise is resolved");
		resolved();
	}, 3000);
})

let p1 = new Promise((resolved, rejected) => {
	setTimeout(() => {
		console.log("another new promise is resolved");
		resolved();
	}, 5000);
})

let a = async function getDetails(){
	await p;
	await p1;
	console.log("getdetails function is invoked");
}


a();


// promise with try and catch

let myPromise = new Promise((resolve, reject) => 
{
	let success = false;

	if(success){
		resolve("operation was successfull");
	}
	else{
		reject("Something went wrong...")
	}
});

myPromise.then(result => {
	console.log(result);
})
.catch(error => {
	console.log(error);
})


function sampleTest(x){
	return new Promise((resolved) => {
		setTimeout(()=>{
			console.log("hello");
		},  2000);
	});
}

async  function f1(){
	const x = await sampleTest(10);
	console.log(x);
}

f1();
