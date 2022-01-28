import { Query, Resolver } from "type-graphql";
import hotels_csv from "./Hotels_Csv";

@Resolver()
export default class HotelResolver{
    @Query(() => [hotels_csv])
    hotels(){
        return hotels_csv.find()
    }
}