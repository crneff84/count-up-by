var totalArray = [];
var countLoop = function(multiple, endNumber) {
  for (var total = multiple; total <= endNumber; total += multiple) {
    totalArray.push(total);
  };
  return totalArray;
};

$(function(){
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var firstInput = parseInt($("input#first-input").val());
    var secondInput = parseInt($("input#second-input").val());

    if (firstInput && secondInput) {
      if (firstInput > 0 || secondInput > 0) {
        countLoop(firstInput, secondInput);
        totalArray.forEach(function(result){
        $("#results").append("<li>" + result + "</li>")
        });
        $("#results").show();
      } else {
          alert("Please enter a number greater than 0!");
      }
    } else {
      alert("Make sure you entered numbers into both input fields. Don't be stupid!");
    }

  });
});
