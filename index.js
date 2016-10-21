'use strict';

var app = angular.module('MainApp',[
	'PageHeader',
	'PageFooter',
	'SideBar',
]);

app.controller('RootController', function(){
	this.page = {
		title: 'Главная страница',
		credits: 'Андрей Кумыков, 2016',
		sideBar: false,
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
	this.sideBar = function(cmd){
		console.log("RootController.sideBar('"+cmd+"')");
		switch (cmd) {
			//case '?' || 'status':
			case '?':
				return this.page.sideBar;
			case 'show':
				this.page.sideBar = true;
				break;
			case 'hide':
				this.page.sideBar = false;
				break;
			case 'toggle':
				this.page.sideBar = !this.page.sideBar;
				break;
			default:
				console.log("неизвестная команда '"+cmd+"'");
		}
	}
});