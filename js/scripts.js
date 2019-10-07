// Business Logic
var numArray = [];
var resultArray = [];

// FUNCTION TO REPLACE INTEGER WITH STRING
var replace = function (number) {


};



// USER LOGIC

$(document).ready(function () {
  $("form#numberInput").submit(function (event) {
    event.PreventDefault();

    // VARIABLES
    var resultsID = document.getElementById("results");
    var userNumInput = $("#userNumInput").val();



    // OUTPUT RESULTS


    // SCROLL TO RESULTS
    resultsID.scrollIntoView(true);


    // $('html, body').animate({
    //   scrollTop: ($('#results').offset().top)
    // }, 500);
  });
});