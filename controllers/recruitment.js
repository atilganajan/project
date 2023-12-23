const Recruitment = require("../models/countries");
const RecruitmentServices = require("../services/recruitment")

const getCountries = async (req, res) => {
    try {
      const region = req.query.region;
      const query = region ? { region } : {}; 
      const response = await Recruitment.getCountries(query);
      return res.status(200).send(response);
    } catch (err) {
      return res.status(500).send("Unexpected error");
    }
  };

  const getSalesreps = async (req, res) => {
    try {
        const countries = await Recruitment.getCountries();
        const salesRepresentatives = RecruitmentServices.analyzeRegions(countries);
      return res.status(200).send(salesRepresentatives);
    } catch (err) {
      return res.status(500).send("Unexpected error");
    }
  };

  const getOptimalRoster = async (req, res) => {
    try {
      const countries = await Recruitment.getCountries();
      const salesRepresentatives = RecruitmentServices.analyzeRegions(countries);
      const optimalRoster = RecruitmentServices.optimalDistribution(countries,salesRepresentatives);
  
      return res.status(200).send(optimalRoster);
    } catch (err) {
      console.log(err);
      return res.status(500).send("Unexpected error");
    }
  };
  


  


module.exports = {
    getCountries,
    getSalesreps,
    getOptimalRoster
};