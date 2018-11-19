var num1 = "";
var operator = "";
var inverse = false;
var output = document.getElementById('output');

var clearButton = document.getElementById('ac');
clearButton.addEventListener('click', function(e) {
	clearOpacity();
	num1 = "";
	operator = "";
	output.innerHTML = "0";
});

var inverseButton = document.getElementById('inverse');
inverseButton.addEventListener('click', function(e) {
	handleBtnStyle(e.target.id);
	handleInverseButton();
});


var numButtons = document.querySelectorAll('.button.gray');
for (var i = 0; i < numButtons.length; i++) {
	numButtons[i].addEventListener('click', function(e){
		handleBtnStyle(e.target.id);
		handleNumberInput(e.target.id);
	});
};

var signButton = document.getElementById('+/-');
signButton.addEventListener('click', function(e){
	if (num1) {
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

function clearOpacity() {
	var allElements = document.querySelectorAll('*');
	for (var k = 0; k < allElements.length; k++) {
		allElements[k].style.opacity = '1';
	}
}

function handleBtnStyle(input) {
	clearOpacity();
	document.getElementById(input).style.opacity = '0.6';
}

function handleInverseButton(input) {
	for (var k = 0; k < opButtons.length; k++) {
		if (opButtons[k].classList.contains('trig')) {
			opButtons[k].classList.remove('trig');
			opButtons[k].classList.add('hidden');
		}
		else if (opButtons[k].classList.contains('hidden')) {
			opButtons[k].classList.remove('hidden');
			opButtons[k].classList.add('trig');
		}
		else {
			console.log('This is not a trig button.');
		}
	}
}

function handleNumberInput(input) {
	num1 = num1 + input;
	output.innerHTML = num1;
};

function handleOperator(operator) {
	if (num1 === "") {
		output.innerHTML = 'error';
	}

	else {

		var total = calculate(num1, operator).toString();

		if (Number(total) > -0.0000000001 && Number(total) < 0.00000000001) {
			total = 0;
		}

		if (Number(total) > 0.9999 && Number(total) < 1.0001) {
			total = 1;
		}

		if (total.length >= 10) {
			total = Number(total).toExponential(3);
		}

		output.innerHTML = total;

		num1 = total;
	}
};