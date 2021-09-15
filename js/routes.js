angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.matricularSe', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/matricularSe.html',
        controller: 'matricularSeCtrl'
      }
    }
  })

  .state('menu.consultarTurmas', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/consultarTurmas.html',
        controller: 'consultarTurmasCtrl'
      }
    }
  })

  .state('menu.avaliarTurmas', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/avaliarTurmas.html',
        controller: 'avaliarTurmasCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.matrCula', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/matrCula.html',
        controller: 'matrCulaCtrl'
      }
    }
  })

  .state('adicionarBoletins', {
    url: '/page5',
    templateUrl: 'templates/adicionarBoletins.html',
    controller: 'adicionarBoletinsCtrl'
  })

  .state('menu.avaliaO', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/avaliaO.html',
        controller: 'avaliaOCtrl'
      }
    }
  })

  .state('boletins', {
    url: '/page7',
    templateUrl: 'templates/boletins.html',
    controller: 'boletinsCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});