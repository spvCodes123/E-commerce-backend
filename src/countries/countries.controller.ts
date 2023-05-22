import { Controller, Get } from '@nestjs/common';
import { Country } from 'src/schemas/country.schema';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
    constructor(private readonly countriesService: CountriesService) { }

    @Get()
    async getCountries(): Promise<Country[]> {
        return await this.countriesService.getCountries();
    }
}
