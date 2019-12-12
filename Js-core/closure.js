// // // // //scope
// // // // global scope
// // // // local scope
// // // // block socpe



// // // var test = 'test1';
// // // var vehicles = 'Van';

// // // function transpot(){

// // // 	vehicles = ['Truck', 'Bike', 'Car'];

// // // }


// // // transpot();
// // // console.log("the vehicles are : ", vehicles);

// // Block scope

// function Books(){
// 	let book = ['book1', 'book2', 'book3'];
// 	if(true){
// 		let book  = ['book4', 'book6'];
		
// 	}
// 	else{
// 		let book = 1;
		
// 	}
// 	console.log("the book value is " , book);
	
// }
// (Books(Books()));


//CLOUSERE

var inital = 'The';
function car(name){
	var model = "I series";

	function view(color){
		console.log(inital , 'new' ,name ,model, 'is' , 'of color', color);



	}
	return view;
}
 // car("Bugatti")("red");
 //  car("Buggfsdatti")("rfgdsed");
 //   car("dsgf")("fd");
 //    car("Bugafdtti")("re44d");

// car("BMW");
// car("Mercedes");

export default car;



