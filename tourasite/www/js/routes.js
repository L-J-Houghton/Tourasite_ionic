angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider
    

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.tourasite2', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/tourasite2.html',
        controller: 'tourasite2Ctrl'
      }
    }
  })

  .state('tabsController.explore', {
    url: '/page7',
    views: {
      'tab2': {
        templateUrl: 'templates/explore.html',
        controller: 'exploreCtrl'
      }
    }
  })

  .state('tabsController.myAccount', {
    url: '/page8',
    views: {
      'tab4': {
        templateUrl: 'templates/myAccount.html',
        controller: 'myAccountCtrl'
      }
    }
  })

  .state('tabsController.myTours', {
    url: '/page9',
    views: {
      'tab4': {
        templateUrl: 'templates/myTours.html',
        controller: 'myToursCtrl'
      }
    }
  })

  .state('tourasiteHelp', {
    url: '/page10',
    templateUrl: 'templates/tourasiteHelp.html',
    controller: 'tourasiteHelpCtrl'
  })

  .state('termsConditions', {
    url: '/page12',
    templateUrl: 'templates/termsConditions.html',
    controller: 'termsConditionsCtrl'
  })

  .state('signup', {
    url: '/page11',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })


  .state('tabsController.theLouvre', {
    url: '/page13',
    views: {
      'tab1': {
        templateUrl: 'templates/theLouvre.html',
        controller: 'theLouvreCtrl'
      },
      'tab2': {
        templateUrl: 'templates/theLouvre.html',
        controller: 'theLouvreCtrl'
      },
      'tab4': {
        templateUrl: 'templates/theLouvre.html',
        controller: 'theLouvreCtrl'
      }
    }
  })

  .state('tabsController.editAccount', {
    url: '/page14',
    views: {
      'tab4': {
        templateUrl: 'templates/editAccount.html',
        controller: 'editAccountCtrl'
      }
    }
  })

  .state('tabsController.updateYourEmail', {
    url: '/page16',
    views: {
      'tab4': {
        templateUrl: 'templates/updateYourEmail.html',
        controller: 'updateYourEmailCtrl'
      }
    }
  })

  .state('tabsController.changeYourPassword', {
    url: '/page17',
    views: {
      'tab4': {
        templateUrl: 'templates/changeYourPassword.html',
        controller: 'changeYourPasswordCtrl'
      }
    }
  })

  .state('tabsController.changeProfilePicture', {
    url: '/page18',
    views: {
      'tab4': {
        templateUrl: 'templates/changeProfilePicture.html',
        controller: 'changeProfilePictureCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page5')


});