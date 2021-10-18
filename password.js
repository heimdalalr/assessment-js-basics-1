// Welcome User to Password Validator
//Prompt user for Password to Validate
//Check if password is at least 10 characters
//if user's password meets the constraints show success message
//if user's password fails the constraints show failure message

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Welcome to password validator. Please insert password to validate", function(answer) {
    password = answer.split(' ');

	
	if (password.length >=10){
		console.log(`validation success for password ${answer}`);
	}	else {
		console.log(`validation failure for password ${answer}`);	
	}
})

