'use strict';

var app = angular.module('MainApp',[
	'PageHeader',
	'PageFooter',
	'ButtonsArea',
	'SideBar',
]);

app.controller('RootController', function(){
	this.page = {
		title: 'Главная страница',
		credits: 'Андрей Кумыков, 2016',
		navigation: false,
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
	this.navBar = function(cmd='status'){
		switch (cmd) {
			case 'status':
				return this.page.navigation;
			case 'toggle':
				this.page.navigation = !this.page.navigation;
				break;
			default:
				console.log("неизвестная команда '"+cmd+"'");
		}
	}
});