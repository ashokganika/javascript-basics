var languages = ['js', 'python', 'ruby', 'c++', 'php', 'java', 'go', 'js', 'python', 'ruby', 'php', 'c', 'java', 'go', 'js', 'js', 'python', 'ruby', 'php', 'java', 'go', 'python', 'ruby', 'php', 'java', 'go'];

function uniqueArray(languages){
    var array1 = []
    
     languages.forEach(function(item,index){
         if(languages.indexOf(item) == index){
            array1.push(item)
            
            
         }
         
       
         
        

    })
    return array1

}


var unique = (uniqueArray(languages));
console.log("The unique languages are: ",unique);


function languagesCount(languages){
    var obj = {}
    languages.forEach(function(item,index){
        obj[item] = (obj[item] || 0 ) + 1
    })
    console.log(obj)
}
languagesCount(languages)



