// GLOBAL VARIABLES
var numArray = [];

// FUNCTION TO BUILD ORIGINAL ARRAY
var buildArray = function (number) {
  for (i = 0; i <= number; i++) {
    numArray.push(i);
  }
};

// FUNCTION TO REPLACE INTEGER WITH STRING
var rules = function (number) {

  if (number === "") {
    console.log("Input field cannot be blank, please enter a Positive Integer ie: 13");
  } else if (number < 0) {
    console.log("Input cannot be a Negative Integer, please enter a Positive Integer ie: 23");
  } else if (number.toString().includes("3")) {
    return "I'm sorry, Dave. I'm afraid I can't do that."
  } else if (number.toString().includes("2")) {
    return "Boop!";
  } else if (number.toString().includes("1")) {
    return "Beep!";
  } else {
    return number;
  }
};


// USER LOGIC
$(document).ready(function () {
  $("form#numberInput").submit(function (event) {
    event.preventDefault();

    $('ul').empty();

    // VARIABLES
    var userNumInput = parseInt($("#userNumInput").val());


    // BUILD ORIGINAL ARRAY
    buildArray(userNumInput);

    // MAP ARRAY TO NEW ARRAY
    var newArray = numArray.map(rules);

    // RESULTS
    for (i = 0; i < numArray.length || i < newArray.length; i++) {
      $("#resultsList").append('<li class="list-group-item"><strong>' + numArray[i] + ':</strong>&emsp;&emsp;' + newArray[i] + '</li>');
    };

    $("#results").slideDown(200);

    $('html, body').animate({
      scrollTop: ($('#results').offset().top)
    }, 500);
  });
});