//#######################33 task part #########################################



function add(value1 ,value2) {
    console.log("the addition of given 2 number is :",value1+value2);
    
}

function planPainting(painter,cb) {
    console.log("call the painter for painting the house");
    setTimeout(function(){
        console.log("the painter receiev the call ");
        cb(null,'he will come');

    },2000);
}


function buyThePaint(paintbucketwithcolortype,cb){
    console.log("given money to buy the paint to painter");
    setTimeout(function(){
        console.log("bought the paint which is : ",paintbucketwithcolortype);
        cb(null, 'start painting');
    },2000);
}

function ceilingPainting(howmanytimes,cb){
    console.log("advide given that ceiling must be paintaed 2 times");
    setTimeout(function(){
        console.log("the ceiling is painted: ",howmanytimes);
        cb(null, 'another job');
    })
}


function rest(cb) {
    console.log("only rest after finishing all painting process");
    setTimeout(function(){
        console.log("all the painting jobs are finised");
        cb(null,'rest');
        
    })
    
}

//#######################33 execution part #########################################

console.log("the story begins from here");
console.log("plan to paint the new house");
planPainting('housepainter',function(err,done){
    if (err) {
        console.log("the painter did not agreed to paint the house", err);
    } else {
        console.log("the painter agreed to paint the house: ", done);
        buyThePaint('Asian paints blue color',function(err, done){
            if (err) {
                console.log("could not start painting",err);
                
            } else {
                console.log("painting started in house because paint is: ",done);
                ceilingPainting('2 times',function(err,done){
                    if (err) {
                        console.log("the ceiling is not painted 2 times");
                        
                    } else {
                        console.log("the ceiling is already painted now 2 times so: ",done);
                        rest(function(err,done){
                            if (err) {
                                console.log("you cannot rest yet");
                                
                            } else {
                                console.log("you can now: ",done);
;                                
                            }
                        })
                        console.log("keep on serching to final touch of painting");                      
                    }
                })
                console.log("paint the other remaining small parts"); 
                add(100,234);               
            }
        })
        console.log("plan how to paint the house from the starting point by another painter");
        }    
})
console.log("cleaning the house");

