import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { Product } from 'src/schemas/product.schema';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {
    }
    @Get()
    getProducts() {
        return this.productsService.getProducts();
    }

    @Get('/getProductById')
    getProductById(@Query() id: string) {
        return this.productsService.getProductById(id);
    }

    @Post('/create')
    async createProduct(@Body() product: Product) {
        return await this.productsService.createProduct(product);
    }

    @Delete('/deleteProductById')
    deleteProductById(@Query("id") id: string) {
        return this.productsService.deleteProductById(id);
    }

    @Post('/updateProductById')
    updateProductById(@Query("id") id: string, @Body() product: Product) {
        return this.productsService.updateProductById(id, product);
    }
}
