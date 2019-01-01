var firstName = prompt("What is your First Name?")
var lastName = prompt("What is your Last Name?")
var age = prompt("What is your Age?")
alert("Hello " + firstName + " " + lastName + ", you are " + age + " years old.")

//WHILE loops
											
var num = -10; 
while(num < 20) {
	console.log(num);
	num++;
}

var nums = 10; 
while(nums<40) {
	if (nums % 2 === 0) {
		console.log(nums);
	}
	nums++;
}
var numss = 300; 
while(numss<333) {
	if (nums % 2 === 1) {
		console.log(nums);
	}
	nums++;
}

var numsss = 5; 
while(numsss<50) {
	if (numsss % 5 === 0 && numsss % 3 === 0) {
		console.log(nums);
	}
	nums++;
}