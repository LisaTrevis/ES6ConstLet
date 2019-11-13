// ----- Const, Let & Var ------

// Const & Let inform others if they can expect a variable in our code to remain the same or change over time

// Let doesn't exibit hoisting like var does, so it defaults to block scoping.

// Const variables are usually written in all caps,
// i.e. const AGE = 27;

// HOISTING no longer works with let and const, so a variable needs to be declared before it can be used

// Var is no longer needed but exists for backwards compatability

// Var is no longer needed


// Prior to ES6:

// var name = "Lisa";

// var title = "Software Engineer";

// var hourlyWage = 40;

// in ES6:

// const name = "Lisa";

// let title = " Software Engineer";

// // Sometime later:
// title = "Senior Software Engineer";

// let hourlyWage = 40;

// // Sometime later:
// hourlyWage = 60;


// function count(targetString) {
// 	const characters = ['a', 'e', 'i', 'o', 'u'];
// 	let number = 0;

// 	for (var i = 0; i < targetString.length; i++) {
// 		if (characters.includes(targetString[i])) {
// 			number++;
// 		}
// 	}

// 	return number;
// }

// console.log(count("lkjsdaoilknsdfklsoilweknl"))


// Refactor using const/let instead of var:
// var statuses = [ 
//   { code: 'OK', response: 'Request successful' },
//   { code: 'FAILED', response: 'There was an error with your request' },
//   { code: 'PENDING', response: 'Your reqeust is still pending' }
// ];
// var message = '';
// var currentCode = 'OK';

// for (var i = 0; i < statuses.length; i++) {
//   if (statuses[i].code === currentCode) {
//     message = statuses[i].response;
//   }
// }

// const statuses = [ 
//   { code: 'OK', response: 'Request successful' },
//   { code: 'FAILED', response: 'There was an error with your request' },
//   { code: 'PENDING', response: 'Your reqeust is still pending' }
// ];
// let message = '';
// let currentCode = 'OK';

// for (var i = 0; i < statuses.length; i++) {
//   if (statuses[i].code === currentCode) {
//     message = statuses[i].response;
//   }
// }

// ********************************* //
// ********************************* //

// ES6 Maximilian Schwartzmuller

// const AGES = [25, 27, 29]
// console.log(AGES) // returns original array

// AGES.push(32)
// console.log(AGES) // returns new array because AGES points to data in memory, which we can manupulate. But we AREN'T assigning the "pointer" to a new value or location in memory.

// const OBJ = {
// 	age: 42
// }

// console.log(OBJ)

// OBJ.age = 32

// console.log(OBJ)