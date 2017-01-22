
angular.module('prototipoApp')
  .controller('menuCtrl', function($location, $http, $scope, token_service) {
    var ctrl = this;
    ctrl.actual = $location.path();
    $scope.token_service = token_service;

    $scope.menu_service = [
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
  console.log($scope.menu_service[1].Opciones.length);
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
