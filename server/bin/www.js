
import http from "http";
import app from "../app";

const port = parseInt(process.env.PORT, 10) || 5000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port,(err)=>{
    if(!err)
        console.log(`Server runing on port  ${port}`);
    else console.log(err);
 
});