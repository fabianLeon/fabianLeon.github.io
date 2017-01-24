angular.module('pruebaApp')
.controller('menuCtrl', function ($location,$http, $scope) {
  var ctrl = this;
  ctrl.actual = $location.path();
  //Configuracion de parametros identificacion unica
  $scope.AUTORIZATION_URL = "https://wso2.intranetoas.udistrital.edu.co:9443/oauth2/authorize";
  $scope.CLIENTE_ID       = "mEEMLpePonJ91jKYB_s8sbE8slQa";
  $scope.REDIRECT_URL     = "http://10.20.0.254/prototipo/app";
  $scope.RESPONSE_TYPE    = "code";
  $scope.SCOPE            = "openid";

  /*$scope.menu_service = [
  {
    "Id": 4,
    "Nombre": "about",
    "Url": "about",
    "Opciones": null
  },
  {
    "Id": 2,
    "Nombre": "nivel 1",
    "Url": "argo.com/gestioncontratos",
    "Opciones": [
      {
        "Id": 3,
        "Nombre": "nivel 2",
        "Url": "contrato_horaCatedra",
        "Opciones": [
          {
            "Id": 7,
            "Nombre": "nivel 3",
            "Url": "agregar_contrato",
            "Opciones": [
              {
                "Id": 8,
                "Nombre": "nivel 4",
                "Url": "agregar_contrato",
                "Opciones": null
              }
            ]
          },
          {
            "Id": 7,
            "Nombre": "Agregar Contrato",
            "Url": "agregar_contrato",
            "Opciones": null
          }
        ]
      },
      {
        "Id": 4,
        "Nombre": "Contratos asdf",
        "Url": "contrato_admin",
        "Opciones": null
      }
    ]
  }
];
console.log($scope.menu_service[1].Opciones.length);*/

$scope.menu_service = [];

   //Función que obtiene todas las aplicaciones
      $http.get('http://127.0.0.1:8081/v1/perfil_x_menu_opcion/arbolMenus')
       .then(function(response) {
        
          $scope.menu_service = response.data;
        });

       


  var memoryToken;
    $scope.memoryTokenHandler = {
        get: function() { return memoryToken; },
        set: function($window, token) { memoryToken = token; },
        clear: function() { memoryToken = undefined; }
    };



  //Pendiente por definir json del menu
  (function($){
    $(document).ready(function(){
      $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
      });
    });
  })(jQuery);
});
