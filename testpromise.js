// var Promise = require('promise');
// var request = require('request');
// var a=2;
// 	var promise2 = new Promise(function(resolve,reject){
// 		resolve("asdf");
// 	});
// var promise = new Promise(function(resolve,reject){
// resolve(promise2)

// });

// promise.then(function(res){
// 	console.log(res);
// })
// //result is asdf เพราะเราสามารถ .then ต่อได้เลย และค่า res มือค่าเท่ากับค่าที่ resolve มาแล้วจึงสามารถ return ต่อไปได้ทันที

//=========================================================//

// var Promise = require('promise');
// var request = require('request');
// var a=2;
// 	var promise2 = new Promise(function(resolve,reject){
// 		resolve("asdf");
// 	});
// var promise = new Promise(function(resolve,reject){
// resolve(promise2)

// });

// promise.then(function(res){
// 	console.log("sdfsdf");

// }).then(function(){console.log("aadf")});

//result is sdfsdf aadf

//=====================================================//

// var Promise = require('promise');
// var request = require('request');
// var a=2;
// var promise = new Promise(function(resolve,reject){
// 	setTimeout(function(){
// 		a=10;
// 		resolve("start")
// 	},200);


// });

// promise.then(function(res){
// 	console.log(a);
// 	console.log(res);
// 	return Promise.resolve("a")	
// }).then(function(res){	
// 	request('https://www.google.co.th', function (error, response, body) {
// 		a++;
// 		console.log("1 |"+a+res);
// 		return Promise.resolve(a)
// 	});
// }).then(function(res){
// 	var b=res;
// 	console.log("2 |"+res);
// 	return Promise.resolve(b)

// }).then(function(res){
// 	setTimeout(function(){
// 		console.log("3 |"+res);
// 		console.log("4 |"+a);
// 	},25)
// });

// //result is not work

//==========================================================================//

// var Promise = require('promise');
// var request = require('request');
// var a=2;
// var promise = new Promise(function(resolve,reject){
// 	setTimeout(function(){
// 		a=10;
// 		resolve("start")
// 	},200);
	
	
// });

// promise.then(function(res){
// 	console.log(a);
// 	console.log(res);
// 	//return Promise.resolve("a")	
// }).then(function(res){	
// 	a++;
// 	console.log("1 |"+a/*+res*/);
// 	return Promise.resolve(a)
// }).then(function(res){
// 	var b=res;
// 	console.log("2 |"+res);
// 	return Promise.resolve(b)

// }).then(function(res){
// 	console.log("3 |"+res);
// 	console.log("4 |"+a);
// });





	// console.log(res);
	// console.log(a);
	// promise2.then(function(res){console.log(res);});
//Promise.all(promise).then(function (res){console.log(res);});
// var promise2=new Promise(function(resolve,reject){
// 	setTimeout(function(){
// 	resolve(++a);
// 	},50)
// });
//promise1.then();
// var Promise = require('promise');
// var request = require('request');
// 	var c=0;
// 	var promise=[];
// 	//console.log(pageStop);
// 	//console.log("ssss");
// 	for(n=0;n<=10;n++)
// 	{
// 		//console.log(c);
// 		//console.log("ccc");
// 		var flag=true;
// 		promise[n] = new Promise(function(resolve,reject){
// 			request('https://www.google.co.th', function (error, response, body) {
// 				var item =[];
// 				if(response.statusCode == 200 && !error)
// 				{
// 					//console.log("aaa");
// 					resolve(body);	
// 				}
// 				else
// 				{
// 					//console.log("bbb");
// 					item.push({
// 						'status' : response.statusCode,
// 						'error' : error,
// 					});
// 					resolve(item);
// 				}
// 			});
// 		});
// 		c++;
// 	}
// 	Promise.all(promise).then(function (res){console.log(res);});
