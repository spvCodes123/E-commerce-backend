import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CountriesModule } from './countries/countries.module';
@Module({
  imports: [ProductsModule, CountriesModule, MongooseModule.forRoot(process.env.MONGODB_CONNECTION_USER)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
