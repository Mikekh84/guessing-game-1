var question1 = prompt('Do you live in Montana?');

if (question1.toUpperCase() === 'YES' || question1.toUpperCase() === 'Y') {
	alert('Lucky you! What a beautiful place to live!');
} else {
	alert('No? You are missing out!');
}

var question2 = prompt('Is autumn the best season?');

if (question2.toUpperCase() === 'YES' || question2.toUpperCase() === 'Y') {
	alert('You are correct! Autumn is the best season!');
} else {
	alert('Sorry, you are wrong. Autumn means sweaters and boots and Pumpkin Spiced Lattes!');
}
var question3 = prompt('Is Harry Potter your favorite book series?');

if (question3.toUpperCase() === 'YES' || question3.toUpperCase() === 'Y') {
	alert('Yes! You are a pretty cool person!');
} else {
	alert('It is not? You need to rethink your answer.');
}

console.log('Does user live in Montana ' + question1);
console.log('Is autumn the best season? ' + question2); 		
console.log('Is Harry Potter favorite book series? ' + question3);





