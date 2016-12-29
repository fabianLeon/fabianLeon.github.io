'use strict';

/**
 * @ngdoc service
 * @name prototipoApp.token
 * @description
 * # token
 * Factory in the prototipoApp.
 */


// First, parse the query string
var params = {},
  queryString = location.hash.substring(1),
  regex = /([^&=]+)=([^&]*)/g,
  m;
while (m = regex.exec(queryString)) {
  params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
}
console.log(params);
console.log(location.hash.substring(1));
// And send the token over to the server
var req = new XMLHttpRequest();
// consider using POST so query isn't logged
req.open('GET', 'https://' + window.location.host + '?' + queryString, true);

req.onreadystatechange = function(e) {
  if (req.readyState == 4) {
    if (req.status == 200) {
      window.location = params['state']
    } else if (req.status == 400) {
      alert('There was an error processing the token.')
    } else {

      //alert('something else other than 200 was returned')
      console.log(req);
    }
  }
};
/*
req.send(null);
*/

angular.module('prototipoApp')
  .factory('token_service', function($http, $localStorage, $sessionStorage) {
    var service = {
      config: {
        AUTORIZATION_URL: "https://accounts.google.com/o/oauth2/v2/auth",
        CLIENTE_ID:       "794841744026-6p2i7lmiho204r4li2bb1ektd7j9dbd4.apps.googleusercontent.com",
        REDIRECT_URL:     "https://fabianleon.github.io/app",
        RESPONSE_TYPE:    "id_token token",
        SCOPE:            "openid profile email",
        BUTTON_CLASS:     "btn btn-outline btn-primary btn-sm"
      }
    };
    return service;
  });
