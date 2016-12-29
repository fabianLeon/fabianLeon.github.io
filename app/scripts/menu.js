

angular.module('prototipoApp')
  .controller('menuCtrl', function($location, $http, $scope, $localStorage, $sessionStorage, token_service) {
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
    $scope.config = token_service.config;

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
