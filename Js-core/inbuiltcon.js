
var bikes = [{
    name: 'pulsar',
    brand: 'bajaj',
    cc: 220,
    color: 'red'
},
{
    name: 'xr',
    brand: 'honda',
    cc: 190,
    color: 'red'
},
{
    name: 'abcd',
    brand: 'xyz',
    cc: 220,
    color: 'black'
}, {
    name: 'fz',
    brand: 'yamaha',
    cc: 250,
    color: 'black'
},
{
    name: 'cbz',
    brand: 'honda',
    cc: 150,
    color: 'black'
},
{
    name: 'splender',
    brand: 'hero',
    cc: 100,
    color: 'black'
},
{
    name: 'cbr',
    brand: 'honda',
    cc: 250,
    color: 'red'
},
{
    name: 'duke',
    brand: 'ktm',
    cc: 200,
    color: 'red'
}];
bikes.forEach(function(item, index){
    item.status = 'availabel'
    
})


var redBikes = bikes.filter(function(item, index){
    if(item.color == 'red'){
        return true
    }
})
 var highPerformances = redBikes.filter(function(item, index){
     if (item.cc >=200){
         return item
     }
 })
 console.log(highPerformances.length)
 var hondaBikes = highPerformances.filter(function(item,index){
     if (item.brand == 'honda'){
         return true
     }
 })

 console.log(hondaBikes);
 bikes.map(function(item, index){
     if(item.color == 'red' && item.cc >=200 && item.brand == 'honda'){
         item.status = 'booked'
         return item
     }
 })
console.log(bikes.length)

bikes.forEach(function(item, index){
    if (item.status == 'booked'){
        bikes.splice(index ,1)
    }
})

console.log(bikes.length)