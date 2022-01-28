import * as dotenv from 'dotenv';
import hotels_csv from './Hotels_Csv';
import { createConnection } from 'typeorm';

dotenv.config();

createConnection({
    url : process.env.URI,
    entities : [hotels_csv],
    type : 'postgres',
    extra : {
        ssl : {
            rejectUnauthorized : false
        }
    }
})