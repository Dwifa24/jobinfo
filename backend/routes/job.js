const jobRoute = require('express').Router()
const JobController = require('../controllers/JobController')

jobRoute.get('/', JobController.getAllJobs)

// jobRoute.get('/', async (req, res) => {
//     const url = 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json';
//     const option = {
//         'method' : 'GET',
//     };

//     const response = await fetch(url, option)
//         .then(res => res.json())
//         .catch(e => {
//             res.json(err)
//         });
//     res.json(response)
// })

module.exports = jobRoute