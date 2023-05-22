import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CountryDocument = HydratedDocument<Country>;

@Schema()
export class Country {
    @Prop()
    name: string;
    @Prop()
    countryCode: string
}

export const CountrySchema = SchemaFactory.createForClass(Country);