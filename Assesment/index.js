var event1 = document.getElementById('submit');
event1.addEventListener('click',calculator,false);
var netSalary;
var allowance;
var taxR1;
var taxR2;	
var basicRate;
var higherRate;
var	basicRateAmount;
var netSalary;
var allowanceClear;
var higherRateAmount;
var totleTaxAmount;	
	
//	This function is to be called to calulate the percentage of an amount.
	function RateCalc(amount,rate){
		return (amount*rate)/100;
	}

//this function will run if the button is pressed
	function calculator(){

		var input_salary = Number((document.getElementById('salary')).value);
		allowance = 11000;
//20% 		
		basicRate = 20;
		higherRate =40;
		basicRateAmount = 32000;
		allowanceClear = input_salary - allowance;


		if (input_salary<=allowance) {
			var str ="Your allowance is : £"+input_salary+".00,"+"<br/>"+"Tax: £0.00"+"<h1 style='color:green;background-color:black;color:white;'>"+"NET SALARY : £"+input_salary+".00"+"</h1>",
			    i = 0,
			    isTag,
			    text;

			(function type() {
			    text = str.slice(0, ++i);
			    if (text === str) return;

			    document.getElementById('display').innerHTML = text;

			    var char = text.slice(-1);
			    if( char === '<' ) isTag = true;
			    if( char === '>' ) isTag = false;

			    if (isTag) return type();
			    setTimeout(type, 20);
			}());

	}else if((input_salary>=allowance)&&(input_salary<=basicRateAmount)){
			netSalary =  input_salary-RateCalc(allowanceClear,basicRate);
			var str = 'Your gross salary is: £'+input_salary+".00,"+"<br/>"+"Your allowance is : £"+allowance+".00,"+"<br/>"+"Tax 20% : -£"+RateCalc(allowanceClear,basicRate)+".00,"+"<br/>"+"<h1 style='color:green;background-color:#32819C;color:white;'>"+"NET SALARY : £"+netSalary+".000"+"</h1>",
			    i = 0,
			    isTag,
			    text;

			(function type() {
			    text = str.slice(0, ++i);
			    if (text === str) return;

			    document.getElementById('display').innerHTML = text;

			    var char = text.slice(-1);
			    if( char === '<' ) isTag = true;
			    if( char === '>' ) isTag = false;

			    if (isTag) return type();
			    setTimeout(type, 20);
			}());
	}else{
			higherRateAmount = allowanceClear - basicRateAmount ;
			totleTaxAmount = RateCalc(basicRateAmount,basicRate) + RateCalc(higherRateAmount,higherRate);
				netSalary = input_salary - totleTaxAmount;
			var str = 'Your gross salary is: £'+input_salary+".00,"+"<br/>"+"Your allowance is : £"+allowance+".00,"+"<br/>"+"Tax 20% : -£"+RateCalc(allowanceClear,basicRate)+".00,"+"<br/>"+"Tax 40% : -£"+RateCalc(higherRateAmount,higherRate)+".00,"+"<br/>"+"<h1 style='color:green;background-color:#32819C;color:white;'>"+"NET SALARY : £"+netSalary+".000"+"</h1>",
			    i = 0,
			    isTag,
			    text;

			(function type() {
			    text = str.slice(0, ++i);
			    if (text === str) return;

			    document.getElementById('display').innerHTML = text;

			    var char = text.slice(-1);
			    if( char === '<' ) isTag = true;
			    if( char === '>' ) isTag = false;

			    if (isTag) return type();
			    setTimeout(type, 20);
			}());

	}

	
		
	}

$(window).ready(function(){

		
			


	});		