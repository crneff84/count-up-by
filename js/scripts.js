var totalArray = [];
var countLoop = function(multiple, endNumber) {
  for (var total = 0; total <= endNumber; total += multiple) {
    totalArray.push(total);
  };
  return totalArray;
};

$(function(){
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    var firstInput = parseInt($("input#first-input").val());
    var secondInput = parseInt($("input#second-input").val());
    countLoop(firstInput, secondInput);
    console.log(totalArray);
    console.log(firstInput);
    console.log(secondInput);
    totalArray.forEach(function(result){
    $("#results").append("<li>" + result + "</li>")
    });
    $("#results").show();
  });
});
