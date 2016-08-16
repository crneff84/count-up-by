var array = [];
var totalArray = [];
var countLoop = function(multiple, endNumber) {
  for (var total = 0; total <= endNumber; total += multiple) {
    array = totalArray.push(total);
  };
};

$(function(){
  $("#blanks form").submit(function(event) {
    event.preventDefault();

  });



});
