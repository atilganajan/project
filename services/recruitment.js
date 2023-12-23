class RecruitmentServices {
    static analyzeRegions(countries) {
        const regions = [...new Set(countries.map((country) => country.region))];

        const regionCounts = regions.reduce((counts, region) => {
            counts[region] = countries.filter((country) => country.region === region).length;
            return counts;
        }, {});

        const salesRepresentatives = regions.map((region) => {
            const countryCount = regionCounts[region];
            const minSalesReq = Math.ceil(countryCount / 7);
            const maxSalesReq = Math.ceil(countryCount / 3);

            return {
                region,
                minSalesReq,
                maxSalesReq,
            };
        });

        return salesRepresentatives;
    }

    static optimalDistribution(countries, salesrap) {
        let data = [];
        salesrap.map((item) => {
            const allMinSales = countries.filter((country) => country.region === item.region).map((country) => (country.name));

            const totalCount = allMinSales.length;
            let payCount = Math.floor(totalCount / item.minSalesReq);
            let remainder = totalCount % item.minSalesReq;

            let startSlice = 0;
            let remainderCount = 0;
            for (let i = 0; i < item.minSalesReq; i++) {

                if (remainder > 0) {
                    remainder -= 1;
                    remainderCount = 1;
                } else {
                    remainderCount = 0;
                }

                data.push({
                    "region": item.region,
                    "countryList": allMinSales.slice(startSlice, startSlice + payCount + remainderCount),
                    "countryCount": allMinSales.slice(startSlice, startSlice + payCount + remainderCount).length,
                });
                startSlice += payCount;

            }

        })


        return data;

    }


}

module.exports = RecruitmentServices;
