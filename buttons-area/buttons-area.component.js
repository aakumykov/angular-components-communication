'use strict';

function ButtonsAreaController(){
	this.changeTitle = function(title){
		console.log("changeTitle('"+title+"')");
		this.onTitleChange({$event: {newTitle: title}});
	}
}

angular.module('ButtonsArea').
component('buttonsArea',{
	templateUrl: 'buttons-area/buttons-area.template.html',
	controller: ButtonsAreaController,
	bindings: {
		onTitleChange: '&'
	}
});
