'use strict';

var app = angular.module('MainApp',[
	'PageHeader',
	'PageFooter',
	'ButtonsArea',
]);

app.controller('RootController', function(){
	this.page = {
		title: 'Главная страница',
		credits: 'Андрей Кумыков, 2016',
	}

	this.pageTitle = function(arg=undefined){
		if (undefined==arg) {
			return this.page.title;
		} else {
			this.page.title = arg;
		}
	}
	this.pageCredits = function(){
		return this.page.credits;
	}
});