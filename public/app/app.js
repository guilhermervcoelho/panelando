/**
 * Set the angular module
 */
angular.module('panelando', ['ngRoute', 'ngFileUpload'])

.config(['$routeProvider', function($routeProvider) {

	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})

		.when('/receitas', {
			templateUrl: 'views/receitas.html',
			controller: 'ReceitasController'
		})

		.when('/receitas/{:id}', {
			templateUrl: 'views/receita.html',
			controller: 'ReceitaController'
		})

		.when('/receitas/nova', {
			templateUrl: 'views/nova-receita.html',
			controller: 'NovaReceitaController'
		})

		.otherwise({redirectTo: '/'});
}])