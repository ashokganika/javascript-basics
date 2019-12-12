// var a  = 'ashok';
// var b = a;

// b = 'ganika';
// console.log(a);
// console.log(b);



// var girls = ['rita','gita'];
// var keti = girls;
// girls[0] = 'kumari';
// keti[1]  = 'nirusha';
// keti[3]  ='asika';
// console.log(girls);
// console.log(keti);
// console.log(girls.length);




function carDetail(details){
	console.log(details);
	console.log(details.name);
	console.log(details.model);
	console.log(details.wheel);
	details.model = 'GTX x series',
	details.wheel = 6

}


var detail = {
	name: 'BMW',
	model: '4322GTX i series',
	wheel: 4
};

console.log(detail);
carDetail(detail);
console.log(detail);

