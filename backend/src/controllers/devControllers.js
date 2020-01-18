const axios = require("axios");
const Dev = require("../models/dev");
const parseStringAsArray = require('../utils/parseStringAsArray');
module.exports = {
  async index(request, response) {
    const devs = await Dev.find();
    return response.json(devs);
  },

  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    const dev = await Dev.findOne({ github_username });

    if (dev) {
      return response.json({ mensagem: "Dev já cadastrado" });
    }

    const apiResponse = await axios.get(
      `https://api.github.com/users/${github_username}`
    );

    let { name = login, avatar_url, bio } = apiResponse.data;

    const techsArray = parseStringAsArray(techs);

    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    const createdDev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location
    });
    return response.json(createdDev);
  }
};
