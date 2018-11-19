function calculate(num1, operator, num2) {
	var a = Number(num1);
	var b = Number(num2);
	
	switch (operator) {
		case '+':
			return (a + b);
				
		case '-':
			return (a - b);
			
		case 'x':
			return (a * b);
			
		case '/':
			if (b === 0) {
				return ('undefined');
			}
			else {
				return (a / b);
			}
			
		case '^':
			return (Math.pow(a, b));
		
		case 'sin':
			return(Math.sin(a * Math.PI / 180));
		
		case 'cos':
			return(Math.cos(a * Math.PI / 180));
	
		case 'tan':
			if (a % 90 === 0) {
				return('undefined');
			}
			else {
				return(Math.tan(a * Math.PI / 180));
			}
	
		default:
			return('Please check your entries and try again.');
	}
}