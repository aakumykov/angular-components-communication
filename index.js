'use strict';

var app = angular.module('MainApp',[
	'PageHeader',
	'PageFooter',
]);

app.controller('RootController', function(){
	this.page = {
		title: 'Главная страница',
		credits: 'Андрей Кумыков, 2016',
	}
});