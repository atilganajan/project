const mongoose = require("mongoose");

class Recruitment {

    static async getCountries(query) {
        const countriesCollection = mongoose.connection.collection("countries");
        /* if (query.region) {
            query.region = { $regex: new RegExp(query.region.split('').join('.*'), 'i') };  // TODO regex to list similar ones(like)
        } */
        const dataCursor = await countriesCollection.find(query);
        const data = await dataCursor.toArray();
        return data;
    }

}

module.exports = Recruitment;
