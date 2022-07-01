//require node modules
const http=require('http');

//file imports
const respond=require('./lib/respond.js')

//connection settings
const port=process.env.PORT || 3000;

//create server
const server=http.createServer(respond);

//listen to client requestes on the specific port - port should be available
server.listen(port,()=>{
    console.log(`listening on port: ${port}`);
}); 