/*
"use strict";

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



$(".task1_fakeBtn").on("click",function(){
	// here update the number of errors
	errors ++;
	updatingerrorDisplay();
});

$(".task1_correctBtn").on("click",function(){
	//$(this).addClass("checkmarktask1");
jQuery("#task1emptybox").addClass("checkmarktask1");
console.log("correct!") //change to check mark task
//move to task 2

});




$(".task2_fakeBtn").on("click",function(){
	errors ++;
	updatingerrorDisplay();
});


$(".task2_correctBtn").on("click",function(){
	console.log("correct!") //change to check mark task
	//move to task 3
	});




$(".task3_fakeBtn").on("click",function(){
	errors ++;
	updatingerrorDisplay();
	});


$(".task3_correctBtn").on("click",function(){
	console.log("correct!") //change to check mark task
	//display congrats you completed game message
	});








$("#imoverit").on("click", imoverIt)



function imoverIt(){
alert("This game is all about Dark Patterns (a user interface that has been carefully crafted to trick users into doing things, such as buying insurance with their purchase or signing up for recurring bills. Task 1 plays off user expectation that buttons should work how you expect (Answer: click register instead of the x button). Task 2 shows how wording can be deceptive when trying to opt out of a service (Answer: click option 1). Task 3 shows how people are often tricked when trying to sign up for free services (Answer: click audit)");
errors = 0;
}

function updatingerrorDisplay(){
	if (errors <= numberErrorsAllowed) {
			$(".errorDisplay").html(errors);
	}	else {
		errors = 0
		$(".errorDisplay").html(errors)
		imoverIt()
		/*reset to task 1 image and task 1 buttons*/
	}
}
/*
function updatingerrorDisplay() {
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
