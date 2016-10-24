'use strict';

var module = angular.module('SideBar');

module.component('sideBar',{
	templateUrl: 'side-bar/side-bar.template.html',
	bindings: {
		visibility: '<',
		toggleAction: '&',
	},
});

module.component('sideBarToggle',{
	templateUrl: 'side-bar/side-bar-toggle.template.html',
	bindings: {
		toggleAction: '&',
	},
});