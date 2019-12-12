
var students = [
    {
        name: 'ramesh',
        class: 3,
        house: 'red',
        roll_no: 1
    },
    {
        name: 'sita',
        class: 4,
        house: 'green',
        roll_no: 5
    },
    {
        name: 'rajesh',
        class: 3,
        house: 'red',
        roll_no: 33
    },
    {
        name: 'gita',
        class: 6,
        house: 'blue',
        roll_no: 4
    },
    {
        name: 'govinda',
        class: 2,
        house: 'blue',
        roll_no: 21
    },
    {
        name: 'krishna',
        class: 5,
        house: 'green',
        roll_no: 44
    },
    {
        name: 'maya',
        class: 5,
        house: 'green',
        roll_no: 34
    },
    {
        name: 'kumar',
        class: 7,
        house: 'red',
        roll_no: 33
    },
    {
        name: 'rama',
        class: 8,
        house: 'blue',
        roll_no: 22
    },
    {
        name: 'hari',
        class: 2,
        house: 'yellow',
        roll_no: 4
    },
]


function order(source,property){
    a= []
     source.forEach(function(item,index){
         
            //console.log(item.hasOwnProperty(property))
            a.push(item[property])
         
        
    })
     //console.log(a)
    unique = []
    a.forEach(function(item,index){
        if (unique.indexOf(item)==-1){
            unique.push(item)
        }
    })
    //console.log(unique)
    var obj = {}
    unique.forEach(function(item,index){
         var itemfiltered = source.filter(function(items,indexx){
            if(items[property] == item){
                return items
            }
        })
        obj[item] = itemfiltered;

    })
   return  {
       obj,
       property
   }
}

var result = order(students,'classss');
console.log('grouped By: ',result.property);
console.log(result.obj)
//console.log(Object.keys(result));


