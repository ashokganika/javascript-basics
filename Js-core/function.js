// (function(){
// 	console.log('this is IIFE function');
// })()



 function car(){
	console.log('this is a brand new car of model ');
 }


// (car)('BMW I series',43)

// function intro(name){
// 	console.log("the name is : ",name , 'and its data type is ', typeof(name));
// }



// intro([32,323])
// intro('Ashok')
// intro(553)
// intro()

// function introduction(name,age){
// 	console.log("the name is : ",name , 'and age   is ', age);
// }


// introduction('Krishna',20)
// introduction(null,34)

function CarDetail(detail){
	var name = 'ashok'
	return {
		car,
		name,
		detail
	}






}





var details = CarDetail({
	name:'BMW',
	model:'GTX',
	model_no:133303,
	color:'red'
})

console.log(details.car)
console.log(details.name)
console.log(details.detail)