
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


function groupBy(source, property){
    result = source.reduce(function(obj,item){
        //console.log(item.house)

        obj[item[property]] = (obj[item[property]] || []).concat(item);
        return obj;
    
    },{})
    return result
}

result = groupBy(students, 'classsss');
console.log(result);