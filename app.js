const http=require("http");
http.createServer((request,response)=>{
    // var text="Hello!";
    // console.log(text);
    // response.end(text);
}).listen(7777, "localhost",()=>{console.log("Sever run...")});