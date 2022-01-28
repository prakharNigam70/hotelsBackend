import * as koa from "koa";
import * as dotenv from "dotenv"
import { Pool } from "pg";
import './CreateConnection'
import hotels_csv from "./Hotels_Csv";

const app = new koa();

app.use(async context => {
        const data = await hotels_csv.find()
        context.response.body = data;
})

app.listen(process.env.PORT || 5000, ()=> console.log("Simple koa orm server created at port 5000"))

