// var a = '   kathmandu is       the     capital   city of nepal    ';
// console.log(a.toUpperCase());
// console.log(a);
// console.log("total length >> ",a.length);
// console.log(a.trim());
// console.log(a.trim().length);


// var phones = 'iphone,s10+,notebookpro';
// console.log(phones.split('e'));


//################################## task ###############################################

function objectConversion(arg) {
    var splitting  = arg.split(/[ms]/)
    var time = {
        minute: Number(splitting[0]),
        seconds: Number(splitting[1])
    }
    return time

   

}


arg = '22m44s';

console.log(objectConversion(arg));


// var value = 24443
// console.log(value.toFixed(5));


// var car = {
//     name: 'ise',
//     wheel:4
// }

// // if('wheelss' in car){
// //     console.log("it exists")
// // }

// var serialze = JSON.stringify(car);
// console.log(serialze);
// console.log(JSON.parse(serialze))


// console.log(Object.keys(car));
// console.log(Object.values(car));


// for (item in car){
//     console.log(item);
//     console.log(car[item]);
// }