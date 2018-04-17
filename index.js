'use strict';

var request = require('request');

class CmApi {
  constructor(options = {}) {
    this.redirectUri  = options.redirectUri || "https://app.contextmatters.com"
    this.accessToken  = options.accessToken
    this.apiBase      = options.apiBase || "/api/v1/"
  }

  get(endpoint, queryParams, callback) {
    var url            = this.redirectUri + this.apiBase + endpoint
    var authorization  = "Bearer " + this.accessToken
    var requestOptions = {
      url: url,
      qs: queryParams,
      qsStringifyOptions: {arrayFormat: "brackets"},
      headers: {"Authorization": authorization}
    }
    
    request(requestOptions, this.wrapCallback(callback))
  }

  wrapCallback(callback) {
    return function (error, response, body) {
      return callback(JSON.parse(body))
    }
  }
}

module.exports = CmApi;
