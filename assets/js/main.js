"use strict";
/*
prototype code
var clicked = 0;

$("#turtleid").on("click",function() {
	clicked++;
	console.log(clicked);
})
*/

"use strict";
// add all the variables ()
var errors = 0;

var numberErrorsAllowed = 3;
// list all of the button listeners here
// first button is the "fake" X button at the top of task 1
$(".task1_fakeBtn").on("click",function(){
	// here update the number of errors
	errors ++;
	console.log(errors);
	updatingerrorDisplay();
});
$(".task1_correctBtn").on("click",function(){
	// here update the number of errors
//edit display to have check mark
//move on to task 2
console.log("correct!")
});



$(".task2_fakeBtn").on("click",function(){
	// here update the number of errors
	errors ++;
	console.log(errors)
	updatingerrorDisplay();
});

$(".task2_correctBtn").on("click",function(){
	// here update the number of errors
	errors ++;
	console.log("correct!")
	updatingerrorDisplay();
});

function updatingerrorDisplay(){
	$(".errorDisplay").html(errors)
}
//if hit button "i'm over it show education pop up, x to close game?"
//$("#imoverit").on("click", overit);

/*

Task 1: Monkey Image, Have to click on Register instead of 'X' to accomplish tasks
	if the person clicks on any button other than the register button,
		add one to their error score
		if they get to 3 errors end the game & show educational explanation message
	if they click on the register button
		cross task one off the list
		move to task 2

**reset error # before task 2 starts*
Task 2: Unsubscribe from the email list
	if they click the correctly worded option
		cross task off the list
		move to task 3
	if they click any option other than the correctly worded one..
		add one to the error score
		if they get more than 3 errors end the game & show the educational explanation message

**reset error # before task 3 starts**
Task 3:
	if they do it correctly
		cross task 3 off the list & show congrats/educational message
	if they do it incorrectly
		add 1 to error
		if they get more than 3 errors end the game & show educational explanation message

*/
