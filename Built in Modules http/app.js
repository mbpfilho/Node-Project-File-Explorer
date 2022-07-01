const http=require("http");

//connections settings
//a port is an end point of communication
const port=3000;
//hostname: IP - associated with any device connected to a computer network
const hostname="127.0.0.1"; //localhost


//callback function to be executed when a user makes a request to our server
const respond=(request,response)=>{
    if(request.url!=="/favicon.ico"){
        console.log(request.url);
    }
    //response.setHeader(header name,value)
    response.setHeader("Content-Type","text/plain")
    //writeHead(status code,{header})
    response.writeHead(200,{"Content-Type":"text/html"});
    //response.write sends the body of the response
    response.write(`<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>Node</title>
    </head>
    <body>`);
        response.write(`<p>Node is fun!</p>`);
        response.end(`</body>
    </html>`);
   
};

//create a server
const server=http.createServer(respond);

//listen to user request
server.listen(port,hostname,()=>{console.log(`listening on port: ${port}, hostname: ${hostname}`)});