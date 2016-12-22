angular.module('prototipoApp')
  .controller('menuCtrl', function($location, $http, $scope) {
    var ctrl = this;
    ctrl.actual = $location.path();
    //Configuracion de parametros identificacion unica
    /*$scope.AUTORIZATION_URL = "https://wso2.intranetoas.udistrital.edu.co:9443/oauth2/authorize";
  $scope.CLIENTE_ID       = "mEEMLpePonJ91jKYB_s8sbE8slQa";
  $scope.REDIRECT_URL     = "http://10.20.0.254/prototipo/app";
  $scope.RESPONSE_TYPE    = "code";
  $scope.SCOPE            = "openid";
*/

    $scope.AUTORIZATION_URL = "https://accounts.google.com/o/oauth2/v2/auth";
    $scope.CLIENTE_ID = "794841744026-6p2i7lmiho204r4li2bb1ektd7j9dbd4.apps.googleusercontent.com";
    $scope.REDIRECT_URL = "https://fabianleon.github.io/app";
    $scope.RESPONSE_TYPE = "code";
    $scope.SCOPE = "openid user";

    var memoryToken;
    $scope.memoryTokenHandler = {
      get: function() {
        return memoryToken;
      },
      set: function($window, token) {
        memoryToken = token;
      },
      clear: function() {
        memoryToken = undefined;
      }
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
