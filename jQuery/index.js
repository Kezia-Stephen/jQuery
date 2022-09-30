//start with jQuery or $

// When it is linked in the head section
// $(document).ready(function(){
// $("h1").css("color","#FF74B1");
// })

// $("h1").css("color","#FF74B1");

//In jQuery there is no difference between selecting one or selecting all the elements

$("button");

//Use JQuery to add a class
$("h1").addClass("big-title margin-50");//Adding two classes at a time

//Changing the text inside an element
$("h1").text("Ah0y😆");

// Using innerHTML
$("button").html("<em>Wohoo</em>");

//Changing the attributes
$("a").attr("href", "https://www.yahoo.com");

//Adding event listeners
$("h1").click(function() {
  $("h1").css("color", "#FF577F");
});


$("button").click(function() {
  $("h1").css("color", "#42855B");
});


$("input").keydown(function(event){
  console.log(event.key);
});

//Challenge
$(document).keydown(function(event) {
  $("h1").text(event.key);
});

//Another easy way
$("h1").on("mouseover", function() {
  $("h1").css("color", "#A62349");
});

//Animations
$("button").on("click", function() {
  $("h1").animate({opacity: 0.5}); //only works with numeric values
})
