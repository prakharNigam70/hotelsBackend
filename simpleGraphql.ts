import * as koa from "koa";
import './CreateConnection'
import { buildSchema } from "type-graphql";
import HotelResolver from "./HotelResolver";
import { ApolloServer } from "apollo-server-koa";
import * as Router from "koa-router";
import * as graphqlHttp from 'koa-graphql'
import * as cors from "@koa/cors";

async function main() {
    const app = new koa();
    const schema = await buildSchema({resolvers : [HotelResolver]});
    const appolo = new ApolloServer({schema : schema});
    appolo.applyMiddleware({app});
    const router = new Router();
    router.get("/graphql", graphqlHttp({schema : schema}))
    app.use(router.routes())
    app.use(cors());
    app.listen(process.env.PORT || 5000, ()=> console.log("Simple koa graphql server created at port 5000"))
}

main();
