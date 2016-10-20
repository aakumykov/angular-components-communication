'use strict';

var app = angular.module('MainApp',[
	'PageHeader'
]);

app.controller('RootController', function(){
	this.page = {
		title: 'Главная страница'
	}
});