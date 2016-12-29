
angular.module('prototipoApp')
  .controller('footerCtrl', function($scope) {
     var ctrl = this;
     ctrl.enlaces_universitarios = [{nombre: 'Transparencia',
     link: '#/'},
     {nombre: 'Normatividad',
     link: '#/'},
     {nombre: 'Trámites',
     link: '#/'},
     {nombre: 'General',
     link: '#/'},
     {nombre: 'Docente',
     link: '#/'},
     {nombre: 'Académica Estudiantil ',
     link: '#/'},
     {nombre: 'Derechos Pecuniarios',
     link: '#/'},
     {nombre: 'Sistema de Notificaciones',
     link: '#/'},
     {nombre: 'CSU',
     link: '#/'},
     {nombre: 'PIGA',
     link: '#/'},
     {nombre: 'Bitácora',
     link: '#/'},
     {nombre: 'Noticias anterioresg',
     link: '#/'},
     {nombre: 'Área de Red UDNet',
     link: '#/'},
     {nombre: 'Administración PWI',
     link: '#/'}]
  });
