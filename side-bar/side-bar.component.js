'use strict';

var module = angular.module('SideBar');

module.component('sideBar',{
	templateUrl: 'side-bar/side-bar.template.html',
	controller: function(){
		this.hideSideBar = function() {
			console.log('hideSideBar()');
			this.callback({
				$event: {cmd:'hide'}
			});
		}
	},
	bindings: {
		visible: '<',
		callback: '&',
	},
});

module.component('sideBarToggle',{
	templateUrl: 'side-bar/side-bar-toggle.template.html',
	controller: function(){
		this.toggleSideBar = function(){
			console.log('toggleSideBar()');
			this.callback({
				$event: {cmd:'toggle'}
			});
		}
	},
	bindings: {
		callback: '&',
	},
});