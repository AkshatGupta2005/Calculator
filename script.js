//creating global variables to store values
var number1;
var operator;
var x;
$(".operator").click(function () {
  number1 = parseFloat($("#inputNumber").val());
  clearText();
  if (isNaN(number1)) {
    parseFloat($("#inputNumber").val("Syntex Error"));
  }
  operator = $(this).attr("id");
  return operator, number1;
});
$("#equalTo").click(function () {
  var number2 = parseFloat($("#inputNumber").val());
  clearText();
  if (isNaN(number2)) {
    parseFloat($("#inputNumber").val("Syntex Error"));
  }
  if (!isNaN(number1)) {
    switch (operator) {
      case "plus":
        parseFloat($("#inputNumber").val(number1 + number2));
        break;
      case "minus":
        parseFloat($("#inputNumber").val(number1 - number2));
        break;
      case "multiply":
        parseFloat($("#inputNumber").val(number1 * number2));
        break;
      case "devide":
        parseFloat($("#inputNumber").val(number1 / number2));
        break;
      default:
        break;
    }
  }
});

$(".number").click(function () {
  var clickedNumber = $(this).html();
  $("#inputNumber").val(function (index, val) {
    return val + String(clickedNumber);
  });
});

$("#allClear").click(() => {
  clearText();
});

clearText = () => {
  parseFloat($("#inputNumber").val(""));
};
$("#delete").click(() => {
  var value = document.getElementById("inputNumber").value;
  document.getElementById("inputNumber").value = value.substr(
    0,
    value.length - 1
  );
});

$(document).keypress(function (event) {
  if (!isNaN(event.key)) {
    $("#inputNumber").val(function (index, val) {
      return val + String(event.key);
    });
  }
});
