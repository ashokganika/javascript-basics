var sendMail = new Promise(function(success, failure){
    console.log("trying to send the mail.");
    
    setTimeout(function(){
        success('mail sent');
        failure('not sent ');
    },2000)

});



sendMail
.then(function(success){
    console.log("the mail is sent successfully:",success);
})
.catch(function(err){
    console.log("the mail failed to be sent.",err);
})
.finally(function(val){
    console.log("finally the try to send mail is settled",val);
})


console.log("this is the non blocking task>>uplaod profile picture");
