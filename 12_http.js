
const http=require('http');

const server=http.createServer((req,res)=>{
if(req.url=='/'){
res.end("your / output")

}
if(req.url=="/about"){
    res.end("your about output")
}
// res.end(
//    <h1>Oops! </h1>
// )
console.log(req);
res.write("there we have our code");
res.end();


})

server.listen(5000);