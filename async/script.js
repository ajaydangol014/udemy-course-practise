/*Synchronous Javascript

- Synchronous code is executed line by line.
- Each line of code waits for previous line to finish;
- Long running operations block code execution.
*/

// const paragraph= document.querySelector('.p');
// paragraph.textContent='Aj0';
// alert('Dangol');
// paragraph.style.color='red';

/*Asynchronous Javascript

- Functions running in parallel with other functions
- addEventListener, Callback doesnot automatically make code asynchronous
*/

const p = document.querySelector('.p');
setTimeout(function(){
	console.log('test');
	p.textContent='Aj';
},0);
console.log('baira');
p.style.color='red';


/*

AJAX Calls
- Allows us to communicate with remote webservers in an asynchronous way
- can request data from web servers dynamically.


API
- Application Programming INterface.
- Self contained piece of software that allows other pieces of software to interact with them
- API can be used for weather data, data about countries, APIs for sending eamils or SMS.

*/

//XMLHttpRequest
//-oldschool way of AJAX call

const countryData = function (country) {
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);

  request.send(); //fetches the data in the background.
  request.addEventListener("load", function () {
    console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
  });
};

countryData("usa");
countryData("nepal");


/*
Callback Hells
-- When we have lot of nested callbacks in order to execute asynschrounous tasks in sequence
-Problems
--- it makes our code look very messym
--- it makes our code read very hard to maintain and hard to understand
*/

setTimeout(function(){
	console.log('1 second');
		setTimeout(function(){
		console.log('2 second');
			setTimeout(function(){
			console.log('3 second');
				setTimeout(function(){
				console.log('4 second');
			},1000);
		},1000);
	},1000);
},1000);