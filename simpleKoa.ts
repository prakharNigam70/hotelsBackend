import * as koa from "koa";
import * as Router from "koa-router"

const app = new koa();

const router = new Router();

router.get('/a', (context)=>{
    context.response.body = "Endpoint a is hit in koa server"
})

app.use(router.routes())

app.listen(5000, ()=> console.log("Koa server created at port 5000"))

