db = connect(process.env.MONGODB_CONNECTION_USER);
db.countries.insertMany([
    { name: 'Portugal', countryCode: 'PT' },
    { name: 'United Kingdom', countryCode: 'GBT' }
]);