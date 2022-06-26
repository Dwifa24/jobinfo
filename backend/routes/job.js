const jobRoute = require('express').Router()
const JobController = require('../controllers/JobController')

jobRoute.get('/', JobController.getAllJobs)
jobRoute.get('/info', JobController.getDetailJob)


module.exports = jobRoute