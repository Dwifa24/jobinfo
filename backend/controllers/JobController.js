const fetch = require('node-fetch');


class JobController {
    static async getAllJobs(req, res) {
        const url = 'http://dev3.dansmultipro.co.id/api/recruitment/positions.json';
        const option = {
            'method': 'GET',
        };

        const response = await fetch(url, option)
            .then(res => res.json())
            .catch(e => {
                res.json(e)
            });
        res.json(response)
    }

    static async getDetailJob(req, res) {
        const id = req.params.id
        const url = `http://dev3.dansmultipro.co.id/api/recruitment/positions/32bf67e5-4971-47ce-985c-44b6b3860cdb`;
        const option = {
            'method': 'GET',
        };

        const response = await fetch(url, option)
            .then(res => res.json())
            .catch(e => {
                res.json(e)
            });
        res.json(response)
    }
}

module.exports = JobController