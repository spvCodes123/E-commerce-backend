import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from 'src/schemas/product.schema';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {

    }
    getProducts() {
        return this.productModel.find().exec();
    }

    getProductById(id: string) {
        return this.productModel.findById(id);
    }

    async createProduct(product: Product) {
        product.orderTimeStamp = new Date();
        return await this.productModel.create(product);
    }

    deleteProductById(id: string) {
        return this.productModel.findByIdAndDelete(id);
    }

    updateProductById(id: string, product: Product) {
        return this.productModel.findByIdAndUpdate(id, product);
    }
}
