import * as http from 'http'

const app = http.createServer((req, res)=>{
    if(req.url === '/a') res.write("Endpoint a is hit")
    else if(req.url === '/b') res.write("Endpoint b is hit")
    else res.write("Else is hit")
    res.end();
})

app.listen(5000, ()=> console.log("Simple Node created at port 5000"))