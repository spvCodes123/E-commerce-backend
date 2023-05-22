import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Country, CountryDocument } from 'src/schemas/country.schema';

@Injectable()
export class CountriesService {
    constructor(@InjectModel(Country.name) private countryModel: Model<CountryDocument>) {

    }
    async getCountries(): Promise<Country[]> {
        return this.countryModel.find().exec();
    }
}
