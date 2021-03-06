angular.module('corApp', ['ngRoute', 'ui.materialize'])

.constant("constants",
{
  "baseURL": "https://cor.herokuapp.com/"
})


.config(function ($routeProvider) {

  $routeProvider

  .when('/home', {
    templateUrl: "app/routes/home/homeTmpl.html",
    controller: "homeCtrl"
  })
  .when('/services', {
    templateUrl: "app/routes/services/servicesTmpl.html",
    controller: "servicesCtrl"
  })
  .when('/permits', {
    templateUrl: "app/routes/permits/permitsTmpl.html",
    controller: "permitsCtrl"
  })
  .when('/howto', {
    templateUrl: "app/routes/howto/howtoTmpl.html",
    controller: "howtoCtrl"
  })
  .when('/adminhome', {
    templateUrl: "app/routes/admin/adminHome/adminHomeTmpl.html",
    controller: "adminHomeCtrl"
  })
  .when('/login', {
    templateUrl: "app/routes/admin/login/loginTmpl.html",
    controller: "loginCtrl"
  })
  .when('/signup', {
    templateUrl: "app/routes/admin/signup/signupTmpl.html",
    controller: "signupCtrl"
  })
  .otherwise({
    redirectTo: '/home'
  });

});
