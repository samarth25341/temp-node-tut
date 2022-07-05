const {readFile,writeFile}= require('fs');



readFile('./content/first.txt','utf8',(error,result)=>{
if(error){
    console.log("error");
    return;
}
else{
    console.log(result);
}

});
console.log("i am first")


// console.log(first);
// console.log(second);




