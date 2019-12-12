// //taks

// function storyToBuyGift(salary,cb){
// 	//console.log(cb);
// 	setTimeout(function(){
// 		console.log("Father is now rich . He has salary.")
// 		console.log("the amount is: ",salary );
// 		cb(null,salary);

// 	},2000);

// }


// //execution

// console.log("child asked to buy the phone");
// storyToBuyGift(10000,function(noSalary,salary){
// 	if(noSalary){
// 		console.log("no salary so cant buy the gift.");
// 	}
// 	else{
// 		console.log("buy the gift from",salary, "availabel");

// 	}
	
	

// })


// console.log("do other non blocking task by children");

console.log("this is task",1);
setTimeout(
	function(){
		console.log("thsi is the async task");
	}, 2000)
console.log("this is task",2);
console.log("this is task",3);
console.log("this is task",4);
