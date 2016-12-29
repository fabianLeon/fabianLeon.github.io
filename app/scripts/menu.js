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
  .controller('menuCtrl', function($location, $http, $scope, $localStorage, $sessionStorage, token) {
    $scope.local = $localStorage.$default(params);
    console.log($scope.local);
    var ctrl = this;
    $scope.actual = $location.path();
    console.log($location.absUrl());
    console.log($location.absUrl());
    //Configuracion de parametros identificacion unica
    /*$scope.AUTORIZATION_URL = "https://wso2.intranetoas.udistrital.edu.co:9443/oauth2/authorize";
    $scope.CLIENTE_ID       = "mEEMLpePonJ91jKYB_s8sbE8slQa";
    $scope.REDIRECT_URL     = "http://10.20.2.52/prototipo/app";
    $scope.RESPONSE_TYPE    = "code";
    $scope.SCOPE            = "openid";
*/
    $scope.AUTORIZATION_URL = "https://accounts.google.com/o/oauth2/v2/auth";
    $scope.CLIENTE_ID = "794841744026-6p2i7lmiho204r4li2bb1ektd7j9dbd4.apps.googleusercontent.com";
    $scope.REDIRECT_URL = "https://fabianleon.github.io/app";
    $scope.RESPONSE_TYPE = "id_token token";
    $scope.SCOPE = "openid profile email";


    $scope.logout = function() {
      $scope.token = null;
      $localStorage.$reset();
      window.location.replace("https://fabianleon.github.io/app/#/");
    };

    $scope.token = null;

    if (typeof $scope.local.id_token === 'undefined' || $scope.local.id_token === null ) {
      console.log("hola");
    } else {
      var headerObj = KJUR.jws.JWS.readSafeJSONString(b64utoutf8($scope.local.id_token.split(".")[0]));
      $scope.token = KJUR.jws.JWS.readSafeJSONString(b64utoutf8($scope.local.id_token.split(".")[1]));
      console.log(headerObj);
      console.log($scope.token);
    };

    //Pendiente por definir json del menu
    (function($) {
      $(document).ready(function() {
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
          event.preventDefault();
          event.stopPropagation();
          $(this).parent().siblings().removeClass('open');
          $(this).parent().toggleClass('open');
        });
      });
    })(jQuery);
  });
