$(document).ready(function() {



function basicCalc() {
  var numone = $('#basic-num-1');
  var numtwo = $('#basic-num-2');
  var calcnum = $('#basic-calc');
  calcnum.click(function() {
    if($("#basic-operation option:selected").html() === 'plus') {
      var sum = parseInt(numone.val()) + parseInt(numtwo.val());
      $('#basic-answer-alert').html("The Answer is " + sum);
    }
    else if($("#basic-operation option:selected").html() === 'minus') {
      var remainder = parseInt(numone.val()) - parseInt(numtwo.val());
      $('#basic-answer-alert').html("The Answer is " + remainder);
    }
    else if($("#basic-operation option:selected").html() === 'multiplied by') {
      var multiplied = parseInt(numone.val()) * parseInt(numtwo.val());
      $('#basic-answer-alert').html("The Answer is " + multiplied);
    }
    else if($("#basic-operation option:selected").html() === 'divided by') {
      var divided = parseInt(numone.val()) / parseInt(numtwo.val());
      $('#basic-answer-alert').html("The Answer is " + divided);
    }
  }
);}


basicCalc();

function tripcostCalc() {
  var distance = $('#trip-distance');
  var mpg = $('#trip-mpg');
  var cost = $('#trip-cost');
  var speed = $('#trip-speed');
  var calcTrip = $('#trip-calc');
  calcTrip.click(function() {
    if(parseInt(speed.val()) < 60) {
      var tripcost1 = parseInt(distance.val()) / parseInt(mpg.val()) * parseInt(cost.val());
      $('#trip-answer-alert').html("The trip cost is " + tripcost1);
    }
    else if(parseInt(speed.val()) > 60) {
      var tripcost2 = parseFloat(distance.val()) / (parseFloat(mpg.val()) - (parseFloat(speed.val()) - 60) * 2) * parseFloat(cost.val());//(parseInt(distance.val()) / (parseInt(mpg.val())-((parseInt(speed.val()) - 60)) * 2)) * parseInt(cost.val());
      $('#trip-answer-alert').html("The trip cost is " + tripcost2);
    }
  }
);}

tripcostCalc();

function bmiCalc() {
  var mass = $('#bmi-mass');
  var height = $('#bmi-height');
  var calcBMI = $('#bmi-calc');
  calcBMI.click(function() {
    var weight = parseFloat(mass.val());
    var heightsquared = parseFloat(height.val()) * parseFloat(height.val());
    var bmi = weight / heightsquared;
    $('#bmi-answer-alert').html("Your BMI is " + bmi);
  }
);}

bmiCalc();


});
