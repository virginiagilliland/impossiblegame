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
var errors = 0;

var numberErrorsAllowed = 3;


$(".task1_fakeBtn").show()
$(".task1_correctBtn").show()
$(".task2_fakeBtn").hide()
$(".task2_correctBtn").hide()
$(".task3_fakeBtn").hide()
$(".task3_correctBtn").hide()

$(".task1_fakeBtn").on("click",function(){
	errors ++;
	updatingerrorDisplay();
});

$(".task1_correctBtn").on("click",function(){
jQuery("#task1emptybox").removeClass("blankwhite");
jQuery("#image1task1").css("z-index", "-999999");
$(".task1_fakeBtn").hide()
$(".task1_correctBtn").hide()
$(".task2_fakeBtn").show()
$(".task2_correctBtn").show()
errors = 0;
});




$(".task2_fakeBtn").on("click",function(){
	errors ++;
	updatingerrorDisplay();
});


$(".task2_correctBtn").on("click",function(){
	jQuery("#task2emptybox").removeClass("blankwhite2");
	jQuery("#image2task2").css("z-index", "-999998");
	$(".task2_fakeBtn").hide()
	$(".task2_correctBtn").hide()
	$(".task3_fakeBtn").show()
	$(".task3_correctBtn").show()
	errors = 0;
	});




$(".task3_fakeBtn").on("click",function(){
	errors ++;
	updatingerrorDisplay();
	});


$(".task3_correctBtn").on("click",function(){
	jQuery("#task3emptybox").removeClass("blankwhite3");
	jQuery("#image3task3").css("z-index", "-999997");
$(".task3_fakeBtn").hide()
$(".task3_correctBtn").hide()
	errors = 0;
	});








$("#imoverit").on("click", imoverIt)



function imoverIt(){
alert("This game is all about Dark Patterns (a user interface that has been carefully crafted to trick users into doing things, such as buying insurance with their purchase or signing up for recurring bills). Task 1 plays off user expectation that buttons should work how you expect (Answer: click register instead of the x button). Task 2 shows how wording can be deceptive when trying to opt out of a service (Answer: click option 1). Task 3 shows how people are often tricked when trying to sign up for free services (Answer: click audit)");
errors = 0;
}

function updatingerrorDisplay(){
	if (errors <= numberErrorsAllowed) {
			$(".errorDisplay").html(errors);
	}	else {
		errors = 0
		$(".errorDisplay").html(errors)
		imoverIt()
	}
}
