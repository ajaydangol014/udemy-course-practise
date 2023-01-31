/*Synchronous Javascript

- Synchronous code is executed line by line.
- Each line of code waits for previous line to finish;
- Long running operations block code execution.
*/

const p = document.querySelector('.p');
p.textContent='Aj0';
alert('Dangol');
p.style.color='red';

/*Asynchronous Javascript

- Functions running in parallel with other functions
- addEventListener, Callback doesnot automatically make code asynchronous
*/

const p = document.querySelector('.p');
setTimeout(function(){
	p.textContent='Aj';
},5000);
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


/*Async Await*/