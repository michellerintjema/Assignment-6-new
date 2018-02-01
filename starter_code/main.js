console.log('connected')

// storing cities
var cityNames = ["New York City", "San Francisco", "Los Angeles", "Austin", "Sydney"]

// adding options to the select box
cityNames.forEach(function(city) {
  $("#city-type").append('<option>' + city + '</option>')
})

//using .change function to change the background when a certain option is selected
//using .removeClass to remove the current background class, using .addClass to change the background
$("#city-type").change(function(event) {
  event.preventDefault()
  var userInput = $('#city-type').val()
  $('body').removeClass()
  if (userInput === cityNames[4]) {
    $('body').addClass('sydney')
  } else if (userInput === cityNames[0]) {
    $('body').addClass('nyc')
  } else if (userInput === cityNames[1]) {
    $('body').addClass('sf')
  } else if (userInput === cityNames[2]) {
    $('body').addClass('la')
  } else if (userInput === cityNames[3]) {
    $('body').addClass('austin')
  } else $('body').removeClass()
})
