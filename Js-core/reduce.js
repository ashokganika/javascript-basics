var numbers = [1,1,1,1,1]

function numberArray(source){
    var addtion = source.reduce(function(acc,item,index,source){
        return acc + item

    },0)
    return addtion
}


result = numberArray(numbers)
console.log("The sum of given numbers in array is >> ",result);


