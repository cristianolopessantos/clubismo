const axios = require('axios');
const League = require('../model/League');
const config = {
  headers: {
    'RapidAPI Project': 'default-application_3871742',
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    'X-RapidAPI-Key': '38d9332562msh098fafb58471983p1cd938jsn275ed1a70b20'
  }
};
module.exports = {
  async store(req, res) {
    const response = await axios.get('https://api-football-v1.p.rapidapi.com/v2/teams/league/6', config);

    return res.json(response.data);
  }
};
