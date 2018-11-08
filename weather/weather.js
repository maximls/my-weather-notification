const request = require("request");
const apiKey = require("./../config/config.json");
const getWeather = (lat, long, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/${
        apiKey.weatherkey
      }/${lat},${long}?exclude=minutely, daily&units=ca`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback("Unable to connect to forecast.io");
      } else if (response.statusCode === 404) {
        callback("Bad Coords");
      } else if (response.statusCode === 200) {
        callback(undefined, body);
      }
    }
  );
};

module.exports.getWeather = getWeather;