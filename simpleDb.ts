import * as koa from "koa";
import * as dotenv from "dotenv"
import { Pool } from "pg";

dotenv.config();

const db = new Pool({
    connectionString : process.env.URI,
    ssl : {
        rejectUnauthorized : false
    }
})
const app = new koa();

app.use(async context => {
        db.connect();
        const data = await db.query("SELECT * FROM hotels_csv")
        context.response.body = data.rows
})

app.listen(process.env.PORT || 5000, ()=> console.log("Simple db server created at port 5000"))

