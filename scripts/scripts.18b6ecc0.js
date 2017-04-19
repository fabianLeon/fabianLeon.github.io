"use strict";angular.module("estudiantesApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","afOAuth2","treeControl","ngMaterial","ui.grid","ui.grid.edit","ui.grid.rowEdit","ui.grid.cellNav","ui.grid.treeView","ui.grid.selection","ui.grid.exporter","ngStorage","ngWebSocket","angularMoment","ui.utils.masks","pascalprecht.translate"]).run(["amMoment",function(a){a.changeLocale("es")}]).config(["$locationProvider","$routeProvider",function(a,b){a.hashPrefix(""),b.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/notificaciones",{templateUrl:"views/notificaciones.html",controller:"NotificacionesCtrl",controllerAs:"notificaciones"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/ver_estudiantes",{templateUrl:"views/estudiante/ver_estudiantes.html",controller:"VerEstudiantesCtrl",controllerAs:"verEstudiantes"}).when("/editar_estudiantes",{templateUrl:"views/estudiante/editar_estudiantes.html",controller:"EditarEstudiantesCtrl",controllerAs:"editarEstudiantes"}).when("/ver_materias",{templateUrl:"views/materia/ver_materias.html",controller:"VerMateriasCtrl",controllerAs:"verMaterias"}).when("/editar_materias",{templateUrl:"views/materia/editar_materias.html",controller:"EditarMateriasCtrl",controllerAs:"editarMaterias"}).when("/nuevo_estudiante",{templateUrl:"views/estudiante/nuevo_estudiante.html",controller:"NuevoEstudianteCtrl",controllerAs:"nuevoEstudiante"}).when("/nueva_materia",{templateUrl:"views/materia/nueva_materia.html",controller:"NuevaMateriaCtrl",controllerAs:"nuevaMateria"}).when("/inscribir_materia",{templateUrl:"views/inscripciones/inscribir_materia.html",controller:"InscribirMateriaCtrl",controllerAs:"inscribirMateria"}).otherwise({redirectTo:"/"})}]),angular.module("estudiantesApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("estudiantesApp").run(["$templateCache",function(a){a.put("views/about.html",'<br> <div class="panel panel-default"> <div class="panel-heading"> about. </div> <div class="panel-body"> <p> Ahora puede empezar a construir la vista de about. </p> </div> <div class="panel-footer"> Panel Footer </div> </div>'),a.put("views/estudiante/editar_estudiantes.html",'<div class="col-md-4" ng-show="editarEstudiantes.vista_previa"> <div class="panel panel-default"> <div class="panel-heading"> {{ \'VISTA_PREVIA_ESTUDIANTES\' | translate }} </div> <div class="panel-body"> <div class="thumbnail"> <br> <img src="images/person-flat.53199732.png" alt="..." width="150px"> <div class="caption"> <h3>{{ \'DOCUMENTO\' | translate }}</h3> <input type="number" class="form-control" ng-model="editarEstudiantes.estudiante_actual.Documento"> <h3>{{ \'NOMBRES_ESTUDIANTE\' | translate }}</h3> <input type="text" class="form-control" ng-model="editarEstudiantes.estudiante_actual.Nombre"> <h3>{{ \'APELLIDOS_ESTUDIANTE\' | translate }}</h3> <input type="text" class="form-control" ng-model="editarEstudiantes.estudiante_actual.Apellido"> </div> </div> <div class="row" align="center" ng-show="editarEstudiantes.vista_previa"> <button class="btn btn-outline btn-success btn-md" ng-click="editarEstudiantes.guardar()">{{ \'GUARDAR\' | translate }} </button> <button class="btn btn-outline btn-danger btn-md" ng-click="editarEstudiantes.eliminar()">{{ \'ELIMINAR\' | translate }} </button> <button class="btn btn-outline btn-primary btn-md" ng-click="editarEstudiantes.limpiar_seleccion()">{{ \'CANCELAR\' | translate }} </button> </div> </div> </div> </div> <div ng-class="{\'col-md-8\': editarEstudiantes.vista_previa , \'col-md-8 col-md-offset-2\': !editarEstudiantes.vista_previa}"> <div class="panel panel-default"> <div class="panel-heading"> {{ \'LISTADO_ESTUDIANTES\' | translate }} </div> <div class="panel-body"> <div ui-grid="editarEstudiantes.gridOptions" ui-grid-auto-resize ui-grid-selection class="ui_grid"></div> </div> </div> <pre>\n      {{editarEstudiantes.estudiante_actual | json}}\n  </pre> <br> </div>'),a.put("views/estudiante/nuevo_estudiante.html",'<div class="col-md-4" ng-show="nuevoEstudiante.vista_previa"> <div class="panel panel-default"> <div class="panel-heading"> {{ \'VISTA_PREVIA_ESTUDIANTES\' | translate }} </div> <div class="panel-body"> <div class="thumbnail"> <br> <img src="images/person-flat.53199732.png" alt="..." width="150px"> <div class="caption"> <h4>Documento</h4> <input type="number" class="form-control" ng-model="nuevoEstudiante.nuevo_estudiante.Documento"> <h4>Nombres del estudiante</h4> <input type="text" class="form-control" ng-model="nuevoEstudiante.nuevo_estudiante.Nombre"> <h4>Apellidos del estudiante</h4> <input type="text" class="form-control" ng-model="nuevoEstudiante.nuevo_estudiante.Apellido"> </div> </div> <div class="row" align="center" ng-show="nuevoEstudiante.vista_previa"> <button class="btn btn-outline btn-success btn-md" ng-click="nuevoEstudiante.guardar()">Nuevo </button> <button class="btn btn-outline btn-primary btn-md" ng-click="nuevoEstudiante.limpiar_seleccion()">Cancelar </button> </div> </div> </div> </div> <div ng-class="{\'col-md-8\': nuevoEstudiante.vista_previa , \'col-md-8 col-md-offset-2\': !nuevoEstudiante.vista_previa}"> <div class="panel panel-default"> <div class="panel-heading"> {{ \'VER_ESTUDIANTES\' | translate }} </div> <div class="panel-body"> <div ui-grid="nuevoEstudiante.gridOptions" ui-grid-auto-resize ui-grid-selection class="ui_grid"></div> </div> </div> <div class="row" align="center" ng-show="!nuevoEstudiante.vista_previa"> <button class="btn btn-outline btn-primary btn-md" ng-click="nuevoEstudiante.limpiar_seleccion()">Nuevo Estudiante </button> </div> <br> </div>'),a.put("views/estudiante/ver_estudiantes.html",'<div class="col-md-4" ng-show="verEstudiantes.vista_previa"> <div class="panel panel-default"> <div class="panel-heading"> {{ \'VISTA_PREVIA_ESTUDIANTES\' | translate }} </div> <div class="panel-body"> <div class="thumbnail"> <br> <img src="images/person-flat.53199732.png" alt="..." width="150px"> <div class="caption"> <h3>{{ \'DOCUMENTO\' | translate }}</h3> <p>{{verEstudiantes.estudiante_actual.Documento}}</p> <h3>Nombre del Estudiante</h3> <p>{{verEstudiantes.estudiante_actual.Nombre +" "+verEstudiantes.estudiante_actual.Apellido}}</p> </div> </div> <div class="row" align="center" ng-show="verEstudiantes.vista_previa"> <button class="btn btn-outline btn-primary btn-md" ng-click="verEstudiantes.limpiar_seleccion()">Ok </button> </div> </div> </div> </div> <div ng-class="{\'col-md-8\': verEstudiantes.vista_previa , \'col-md-8 col-md-offset-2\': !verEstudiantes.vista_previa}"> <div class="panel panel-default"> <div class="panel-heading"> {{ \'LISTADO_ESTUDIANTES\' | translate }} </div> <div class="panel-body"> <div ui-grid="verEstudiantes.gridOptions" ui-grid-auto-resize ui-grid-selection class="ui_grid"></div> </div> </div> </div>'),a.put("views/footer.html",'<footer> <div class="container"> <div class="row"> <div class="col-md-4 col-sm-6 footerleft"> <div class="logofooter"> Universidad Distrital Francisco José de Caldas</div> <p> Institución de Educación Superior sujeta a inspección y vigilancia por el Ministerio de Educación Nacional Adscrita a la Alcaldía Mayor de Bogotá Distrito Capital </p> <p><i class="fa fa-map-pin"></i> Carrera 7 # 40B - 53 - Bogotá D.C. - Colombia</p> <p><i class="fa fa-phone"></i> Teléfono (Colombia) : +57 3 323 9300</p> <p><i class="fa fa-envelope"></i> E-mail : atencion@udistrital.edu.co</p> <p><i class="fa fa-handshake-o"></i> Lunes a Viernes de 8:00 a.m. a 5:00 p.m.</p> <div class="logofooter"> Redes Sociales</div> <div class="col-md-4"> <a href="https://es-la.facebook.com/UniversidadDistrital/" target="_blank"> <i class="fa fa-facebook-square fa-3x" aria-hidden="true"></i> </a> </div> <div class="col-md-4"> <a href="https://plus.google.com/106543869133961089207?hl=es" target="_blank"> <i class="fa fa-google-plus fa-3x" aria-hidden="true"></i></a> </div> <div class="col-md-4"> <a href="https://plus.google.com/106543869133961089207?hl=es" target="_blank"> <i class="fa fa-twitter fa-3x" aria-hidden="true"></i></a> </div> </div> <div class="col-md-4 col-sm-6 paddingtop-bottom"> <h6 class="heading7">ENLACES UNIVERSITARIOS</h6> <ul class="footer-ul"> <li ng-repeat="elemento in enlaces_universitarios"> <a href="{{elemento.link}}"> {{elemento.nombre}}</a> </li> </ul> </div> <div class="col-md-4 col-sm-6 paddingtop-bottom"> <h6 class="heading7">ENLACES DE INTERÉS</h6> <ul class="footer-ul"> <li ng-repeat="elemento in enlaces_universitarios"> <a href="{{elemento.link}}"> {{elemento.nombre}}</a> </li> </ul> </div> </div> </div> </footer> <div class="copyright"> <div class="container"> <div class="col-md-6"> <p>{{copyright}}</p> </div> <div class="col-md-6"> <ul class="bottom_ul"> <li ng-repeat="elemento in map"> <a href="{{elemento.link}}"> {{elemento.nombre}}</a> </li> </ul> </div> </div> </div>'),a.put("views/inscripciones/inscribir_materia.html",'<div class="col-md-4" ng-show="inscribirMateria.vista_previa"> <div class="panel panel-default"> <div class="panel-heading"> {{ \'ADICION_CANCELACION\' | translate }} </div> <div class="panel-body"> <ol> <li ng-repeat="m in inscribirMateria.mis_materias"> <label> {{m.Materia.Nombre}} </label> <button ng-click="inscribirMateria.cancelar_materia(m)" class="btn btn-outline btn-circle btn-danger btn-sm">x</button></li> <ol> <br> <div class="row"> <div class="col-md-4"><label>Seleccione ...</label></div> <div class="col-md-6"> <select ng-selected ng-model="inscribirMateria.materia_actual" class="form-control" ng-options="item.Nombre for item in inscribirMateria.materias"> </select> </div> </div> <br> <div class="row" align="center" ng-show="inscribirMateria.vista_previa"> <button class="btn btn-outline btn-success btn-md" ng-click="inscribirMateria.guardar()">Inscribir </button> <button class="btn btn-outline btn-primary btn-md" ng-click="inscribirMateria.limpiar_seleccion()">Cancelar </button> </div> </ol></ol></div> </div> </div> <div ng-class="{\'col-md-8\': inscribirMateria.vista_previa , \'col-md-8 col-md-offset-2\': !inscribirMateria.vista_previa}"> <div class="panel panel-default"> <div class="panel-heading"> {{ \'LISTADO_ESTUDIANTES\' | translate }} </div> <div class="panel-body"> <div ui-grid="inscribirMateria.gridOptions" ui-grid-auto-resize ui-grid-selection class="ui_grid"></div> </div> </div> <br> </div>'),a.put("views/main.html",'<br> <div class="panel panel-default"> <div class="panel-heading"> <h3 class="page-header"> {{ \'TITULO\' | translate }} </h3> </div> <div class="panel-body"> <p> {{ \'MENSAJE_INICIAL\' | translate }} </p> </div> <div class="panel-footer"> Panel Footer </div> </div>'),a.put("views/materia/editar_materias.html",'<div class="col-md-4" ng-show="editarMaterias.vista_previa"> <div class="panel panel-default"> <div class="panel-heading"> {{ \'VISTA_PREVIA_ESTUDIANTES\' | translate }} </div> <div class="panel-body"> <div class="thumbnail"> <br> <img src="images/book-flat.615ec4eb.png" alt="..." width="150px"> <div class="caption"> <h3>{{ \'MATERIA\' | translate }}</h3> <input type="text" class="form-control" ng-model="editarMaterias.materia_actual.Nombre"> <h3>Tipo de materia</h3> <select ng-selected ng-model="editarMaterias.materia_actual.Tipo" class="form-control" ng-options="item.Nombre for item in editarMaterias.tipo_materia"> </select> </div> </div> <div class="row" align="center" ng-show="editarMaterias.vista_previa"> <button class="btn btn-outline btn-success btn-md" ng-click="editarMaterias.guardar()">Guardar </button> <button class="btn btn-outline btn-danger btn-md" ng-click="editarMaterias.eliminar()">Eliminar </button> <button class="btn btn-outline btn-info btn-md" ng-click="editarMaterias.anadir_tipo()"> + Tipo </button> <button class="btn btn-outline btn-primary btn-md" ng-click="editarMaterias.limpiar_seleccion()">Cancelar </button> </div> </div> </div> </div> <div ng-class="{\'col-md-8\': editarMaterias.vista_previa , \'col-md-8 col-md-offset-2\': !editarMaterias.vista_previa}"> <div class="panel panel-default"> <div class="panel-heading"> {{ \'VER_ESTUDIANTES\' | translate }} </div> <div class="panel-body"> <div ui-grid="editarMaterias.gridOptions" ui-grid-auto-resize ui-grid-selection class="ui_grid"></div> </div> </div> <br> </div>'),a.put("views/materia/nueva_materia.html",'<div class="col-md-4" ng-show="nuevaMateria.vista_previa"> <div class="panel panel-default"> <div class="panel-heading"> {{ \'VISTA_PREVIA_ESTUDIANTES\' | translate }} </div> <div class="panel-body"> <div class="thumbnail"> <br> <img src="images/book-flat.615ec4eb.png" alt="..." width="150px"> <div class="caption"> <h3>Materia</h3> <input type="text" class="form-control" ng-model="nuevaMateria.nueva_materia.Nombre"> <h3>Tipo de materia</h3> <select ng-selected ng-model="nuevaMateria.nueva_materia.Tipo" class="form-control" ng-options="item.Nombre for item in nuevaMateria.tipo_materia"> </select> </div> </div> <div class="row" align="center" ng-show="nuevaMateria.vista_previa"> <button class="btn btn-outline btn-success btn-md" ng-click="nuevaMateria.guardar()"> + Materia </button> <button class="btn btn-outline btn-info btn-md" ng-click="nuevaMateria.anadir_tipo()"> + Tipo </button> <button class="btn btn-outline btn-primary btn-md" ng-click="nuevaMateria.limpiar_seleccion()">Cancelar </button> </div> </div> </div> </div> <div ng-class="{\'col-md-8\': nuevaMateria.vista_previa , \'col-md-8 col-md-offset-2\': !nuevaMateria.vista_previa}"> <div class="panel panel-default"> <div class="panel-heading"> {{ \'VER_ESTUDIANTES\' | translate }} </div> <div class="panel-body"> <div ui-grid="nuevaMateria.gridOptions" ui-grid-auto-resize ui-grid-selection class="ui_grid"></div> </div> </div> <div class="row" align="center" ng-show="!nuevaMateria.vista_previa"> <button class="btn btn-outline btn-primary btn-md" ng-click="nuevaMateria.limpiar_seleccion()">Nuevo </button> </div> <br> </div>'),a.put("views/materia/ver_materias.html",'<div class="col-md-4" ng-show="verMaterias.vista_previa"> <div class="panel panel-default"> <div class="panel-heading"> {{ \'VISTA_PREVIA_ESTUDIANTES\' | translate }} </div> <div class="panel-body"> <div class="thumbnail"> <br> <img src="images/book-flat.615ec4eb.png" alt="..." width="150px"> <div class="caption"> <h3>Asignatura</h3> <p>{{verMaterias.materia_actual.Nombre}}</p> <h3>Tipo</h3> <p>{{verMaterias.materia_actual.Tipo.Nombre}}</p> </div> </div> <div class="row" align="center" ng-show="verMaterias.vista_previa"> <button class="btn btn-outline btn-primary btn-md" ng-click="verMaterias.limpiar_seleccion()">Ok </button> </div> </div> </div> </div> <div ng-class="{\'col-md-8\': verMaterias.vista_previa , \'col-md-8 col-md-offset-2\': !verMaterias.vista_previa}"> <div class="panel panel-default"> <div class="panel-heading"> {{ \'VER_ESTUDIANTES\' | translate }} </div> <div class="panel-body"> <div ui-grid="verMaterias.gridOptions" ui-grid-auto-resize ui-grid-selection class="ui_grid"></div> </div> </div> </div>'),a.put("views/menu.html",'<nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <a href="" class="navbar-brand" ng-click="toggleLeft()"> <i class="fa fa-bars" aria-hidden="true"> Estudiantes</i> </a> </div> <div id="navbar" class="navbar-collapse collapse in"> <ul class="nav navbar-top-links navbar-right"> <li ng-repeat="nivel_1 in menu_service"> <a ng-if="nivel_1.Opciones === null" ng-href="{{\'#/\' + nivel_1.Url}}"> {{nivel_1.Nombre}} </a> </li> <li ng-repeat="nivel_1 in menu_service" class="dropdown"> <a ng-if="nivel_1.Opciones !== null" ng-href="{{actual}}" class="dropdown-toggle" data-toggle="dropdown"> {{nivel_1.Nombre}} <b class="caret"> </b> </a> <ul class="dropdown-menu"> <li ng-repeat="nivel_2 in nivel_1.Opciones"> <a ng-href="{{\'#/\' + nivel_2.Url}}" ng-if="nivel_2.Opciones === null"> {{nivel_2.Nombre}} </a> </li> <li class="dropdown dropdown-submenu" ng-repeat="nivel_2 in nivel_1.Opciones"> <a ng-href="{{actual}}" class="dropdown-toggle" data-toggle="dropdown" ng-if="nivel_2.Opciones !== null"> {{nivel_2.Nombre}} </a> <ul class="dropdown-menu"> <li ng-repeat="nivel_3 in nivel_2.Opciones"> <a ng-href="{{\'#/\' + nivel_3.Url}}" ng-if="nivel_3.Opciones === null"> {{nivel_3.Nombre}} </a> </li> <li class="dropdown dropdown-submenu" ng-repeat="nivel_3 in nivel_2.Opciones"> <a ng-href="{{actual}}" class="dropdown-toggle" data-toggle="dropdown" ng-if="nivel_3.Opciones !== null">{{nivel_3.Nombre}} </a> <ul class="dropdown-menu"> <li ng-repeat="nivel_4 in nivel_3.Opciones"> <a ng-href="{{\'#/\' + nivel_4.Url}}"> {{nivel_4.Nombre}} </a></li> </ul> </li> </ul> </li> </ul> </li> <!-- /.dropdown Notifications--> <li class="dropdown"> <a class="dropdown-toggle notificacion_vista" data-toggle="dropdown" ng-href="{{actual}}" ng-if="notificacion.no_vistos() > 0"> <i class="fa fa-bell fa-fw"></i>{{notificacion.no_vistos()}} <i class="fa fa-caret-down"></i> </a> <a class="dropdown-toggle" data-toggle="dropdown" ng-href="{{actual}}" ng-if="notificacion.no_vistos() == 0"> <i class="fa fa-bell fa-fw"></i> <i class="fa fa-caret-down"></i> </a> <ul class="dropdown-menu dropdown-alerts"> <li ng-repeat=" notificacion in notificacion.log | limitTo:6"> <a ng-href="{{\'#\' + actual}}" ng-click="notificacion.viewed = true"> <div> <i ng-if="! notificacion.viewed" class="fa fa-comment fa-fw"></i> <i ng-if="notificacion.viewed" class="fa fa-check-circle"></i> <strong>{{notificacion.user}}</strong> <span class="pull-right text-muted"> <em><span am-time-ago="notificacion.date"></span></em> </span> </div> <div ng-if="! notificacion.viewed">{{notificacion.message | limitTo:100}} ...</div> <div ng-if="notificacion.viewed">{{notificacion.message| limitTo:100}} ...</div> </a> </li> <li class="divider"></li> <li> <a class="text-center" ng-href="#/notificaciones"> <strong>Ver todas las notificaciones</strong> <i class="fa fa-angle-right"></i> </a> </li> </ul> <!-- /.dropdown --> </li><li class="dropdown" ng-if="token_service.live_token()"> <a class="dropdown-toggle" data-toggle="dropdown" ng-href="{{menuCtrl.actual}}"> <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i> </a> <ul class="dropdown-menu dropdown-user"> <li> <a ng-click=""> <i class="fa fa-sign-in fa-fw"></i> {{token_service.token.name}}</a>  </li> <li><a><i class="fa fa-gear fa-fw"></i> Settings</a> </li> <li class="divider"></li> <li><a ng-click="token_service.logout()"><i class="fa fa-sign-out fa-fw"></i> Logout</a> </li> </ul> <!-- /.dropdown-user --> </li> <li ng-if="!token_service.live_token()"> <oauth2 authorization-url="{{token_service.config.AUTORIZATION_URL}}" client-id="{{token_service.config.CLIENTE_ID}}" redirect-url="{{token_service.config.REDIRECT_URL}}" response-type="{{token_service.config.RESPONSE_TYPE}}" scope="{{token_service.config.SCOPE}}" button-class="{{token_service.config.BUTTON_CLASS}}"> </oauth2> </li> <!-- /.dropdown --> </ul> </div> <!-- /.navbar-header --> <!-- /.navbar-top-links --> <!-- /.navbar-static-side --> </nav> <ul class="breadcrumb"> <li ng-repeat="option in breadcrumb" ng-if="option === \'\'" class="breadcrumb-item"> <a href="#"><i class="fa fa-home" aria-hidden="true"></i>{{option}}</a> </li> <li ng-repeat="option in breadcrumb" ng-if="$middle" class="breadcrumb-item"> <a href="">{{option}}</a> </li> <li ng-repeat="option in breadcrumb" ng-if="$last" class="breadcrumb-item active"> {{option}} </li> <div class="pull-right" style="margin-top:-6px"> <a id="es" name="es" class="{{language.es}}" ng-click="changeLanguage(\'es\')"> es</a> <a id="en" mane="en" class="{{language.en}}" ng-click="changeLanguage(\'en\')"> en</a> </div> </ul> <div layout="column" ng-cloak> <section layout="row" flex> <md-sidenav class="md-sidenav-left" md-component-id="left"> <md-toolbar class="md-theme-indigo"> <h1 class="md-toolbar-tools">Disabled Backdrop</h1> </md-toolbar> <md-content layout-margin> <md-button href=""> <md-card><img src="images/book-flat.615ec4eb.png" class="md-card-image" alt="image caption"> </md-card></md-button> <md-button href=""> <md-card><img src="images/person-flat.53199732.png" class="md-card-image" alt="image caption"> </md-card></md-button> <md-button href=""> <md-card> <img src="images/yeoman.8cb970fb.png" class="md-card-image" alt="image caption"> </md-card> </md-button> <md-button href=""> <md-card> <img src="images/kronos.008ddae1.png" class="md-card-image" alt="image caption"> </md-card> </md-button> </md-content> </md-sidenav> </section> </div>'),a.put("views/notificaciones.html",'<div class="container"> <div class="panel panel-default"> <div class="panel-heading"> notificaciones. </div> <div class="panel-body"> <div class="row"> <div class="col-md-8 col-md-offset-2"> <div class="input-group"> <span class="input-group-addon"><i class="fa fa-search" aria-hidden="true"></i></span> <input type="text" class="form-control" ng-model="buscador" placeholder="Filtrar Notificación"> </div> </div> </div> <br> <md-content style="height: 500px"> <md-subheader class="md-warn">Notificaciones Pendientes</md-subheader> <div ng-repeat="m in notificacion.log | filter:{ $: buscador}" ng-if="!m.viewed"> <md-list-item class="md-3-line" ng-click="m.viewed = true"> <img ng-src="{{imagePath}}" class="img-responsive img-thumbnail" alt="No funciona"> <div class="md-list-item-text"> <h3>{{"Usuario:\\t" + m.user}}</h3> <p>{{"Mensaje: \\t" + m.message}}</p> <em><span am-time-ago="m.date"></span></em> </div> </md-list-item> </div> <md-subheader class="md-primary">Notificaciones Vistas</md-subheader> <div ng-repeat="m in notificacion.log | filter:{ $: buscador}" ng-if="m.viewed"> <md-list-item class="md-3-line" ng-click=""> <img ng-src="{{imagePath}}" class="img-responsive img-thumbnail" alt="No funciona"> <div class="md-list-item-text"> <h3>{{m.user}}</h3> <p>{{m.message}}</p> <em><span am-time-ago="m.date"></span></em> </div> </md-list-item></div>  </md-content></div> </div> </div>')}]);