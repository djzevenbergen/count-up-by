var checkIfValid = function(numberToCheck, numberToCheckBy) {

  if(numberToCheck === "" || numberToCheckBy === "") {
    return false;
  }
  else if (numberToCheck < 0 || numberToCheckBy < 0) {
    return false;
  }
  else if (numberToCheckBy > numberToCheck) {
    return false;
  }
  else if (isNaN(numberToCheck) || isNaN(numberToCheckBy)) {
    return false;
  }
  else {
    return true;
  }
}



var countUp = function(countTo, countBy) {
var outPuts = [];
var countByVar = countBy;
var count = 0;
var countToVar = countTo;

  if (checkIfValid(countTo, countBy) === true) {
    while (count <= (countToVar - countByVar)) {
      count += countByVar;
      outPuts.push(count);
    }
  
  } else {
    alert("please enter valid numbers");
    window.location.reload();
  } 
  
  return outPuts;
}
    



$(document).ready(function() {
  $("#numForm").submit(function(event) {

    var numCountTo = parseInt($("#numOne").val());
    var numCountBy = parseInt($("#numTwo").val());

    alert(countUp(numCountTo, numCountBy));

    event.preventDefault();
  });



});