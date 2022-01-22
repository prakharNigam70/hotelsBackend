import * as express from 'express'

const app = express()

const router = express.Router()

router.get('/a', (req,res)=> {
    res.send("Endpoint a is hit in express server")
})

app.use(router)

app.listen(5001, ()=> console.log("Express server created"))