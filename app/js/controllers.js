function helloWorld() {
return "Hello world!";
}


var app=angular.module('MyApp',[]);

app.factory('Pulse',function(){
	var users=[{name:'Amit'},{name:'Bhavik'},{name:'Zahid'}];
	return{
	all:function(){
	return users;
	},
	first:function(){
		return users[0];
	}};
});

app.controller('AllController',function($scope,Pulse){
	$scope.All=Pulse.all();
});

app.controller('FirstController',function($scope,Pulse){
	$scope.First=Pulse.first();
})


function AdditionalCtrl($scope,a,b){
		return a+b;
});





