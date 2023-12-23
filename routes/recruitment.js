const express = require('express')
const router = express();

const {getCountries, getSalesreps, getOptimalRoster} = require("../controllers/recruitment");

router.get('/countries', getCountries);
router.get('/salesrap', getSalesreps);
router.get('/optimal', getOptimalRoster);

module.exports = router;