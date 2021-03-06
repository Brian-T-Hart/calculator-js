var num1 = "";
var operator = "";
var num2 = "";
var output = document.getElementById('output');

var clearButton = document.getElementById('ac');
clearButton.addEventListener('click', function(e) {
  clearOpacity();
  num1 = "";
  num2 = "";
  operator = "";
  output.innerHTML = "0";
});

function clearOpacity() {
  var allElements = document.querySelectorAll('*');
  for (var k = 0; k < allElements.length; k++) {
    allElements[k].style.opacity = '1';
  }
}

var numButtons = document.querySelectorAll('.button.gray');
for (var i = 0; i < numButtons.length; i++) {
  numButtons[i].addEventListener('click', function(e){
    handleBtnStyle(e.target.id);
    handleNumberInput(e.target.id);
  });
};

var signButton = document.getElementById('+/-');
signButton.addEventListener('click', function(e){
  if (num1 && num2) {
    num2 = num2 * -1;
    output.innerHTML = num2;
  }
  else if (num1) {
    num1 = num1 * -1;
    output.innerHTML = num1;
  }
  else {
    num1 = "-"
  }
});
  
var opButtons = document.querySelectorAll('.button.operator');
  for (var j = 0; j < opButtons.length; j++) {
    opButtons[j].addEventListener('click', function(e){
      handleBtnStyle(e.target.id);
      handleOperator(e.target.id);
    });
  };

function handleBtnStyle(input) {
  clearOpacity();
  document.getElementById(input).style.opacity = '0.6';
}

function handleNumberInput(input) {
  if (num1 && operator) {
    num2 = num2 + input;
    output.innerHTML = num2;
  }
  else {
    num1 = num1 + input;
    output.innerHTML = num1;
  }
};

function handleOperator(input) {
  if (num1 && operator && num2) {

    var total = calculate(num1, operator, num2).toString();

    if (total.length >= 10) {
      total = Number(total).toExponential(2);
    }

    output.innerHTML = total;

    if (input == "=") {
      num1 = total;
      num2 = "";
      operator = "";
    }
    
    else {
      num1 = total;
      num2 = "";
      operator = input;
    }
  }

  else if (num1) {
    if (input !== '=') {
      operator = input;
    }
  }

  else {
    clearButton();
  }
};