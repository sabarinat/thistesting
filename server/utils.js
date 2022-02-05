const url = require('url');
const config = require('./config');
const fetch = require('node-fetch');
const https = require('https');

module.exports = {

  // Create the URL for getting temperature
  generateWebAppURL: function(locationConfigType, locationConfigData) {
    const baseUrlConfig = config.baseUrl;
    const APIkey = config.APIkey;
    const queryConfig = config.query;

    let requestQuery = { appid: APIkey, units: "metric" };

    if (locationConfigType !== 'coordinates') {
      requestQuery[locationConfigType] = locationConfigData;
    } else {
      if (locationConfigData.latitude) {
        requestQuery[queryConfig.coordinates.latitude] = locationConfigData.latitude;
      }

      if (locationConfigData.longitude) {
        requestQuery[queryConfig.coordinates.longitude] = locationConfigData.longitude;
      }
    }
    console.log('requestQuery',requestQuery);
    return url.format({
      protocol: baseUrlConfig.protocol,
      hostname: baseUrlConfig.hostname,
      pathname: baseUrlConfig.path,
      query: requestQuery,
    });
  },

}
