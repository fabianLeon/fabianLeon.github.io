'use strict';

/**
 * @ngdoc service
 * @name prototipoApp.token
 * @description
 * # token
 * Factory in the prototipoApp.
 */
angular.module('prototipoApp')
  .factory('token', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
