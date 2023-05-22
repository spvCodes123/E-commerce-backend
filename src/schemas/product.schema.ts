import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
    @Prop()
    name: string;
    @Prop()
    price: Number;
    @Prop()
    stock: Number;
    @Prop()
    description: string;
    @Prop()
    shippingCountry: string
    @Prop()
    shippingAddress: string;
    @Prop()
    shippingPostCode: string;
    @Prop()
    orderTimeStamp: Date;
    @Prop()
    base64image: string;

}

export const ProductSchema = SchemaFactory.createForClass(Product);