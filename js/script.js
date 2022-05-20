const btn = document.querySelector('button');
const email = document.getElementById('email');
const form = document.querySelector('form'); 
const errorMsg = document.getElementById('error-msg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  checkEmail(); 
});

// function to check if email input is empty. 
const isRequired = function(value) {
  if (value == '') {
    value = false;
  } else {
    value = true;
  }  
  return value;  
}; 

// function to check if email has a valid input. i.e. xyz@domain.net. 
const isEmailValid = (x) => {
  const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailFormat.test(x);
};

// return true if email is provided and it's valid. + show error msg if it returns false. 
const checkEmail = () => {
  let valid = false;
  const x = email.value.trim();
  if (!isRequired(x) || !isEmailValid(x)) {
    errorMsg.textContent = 'Please provide a valid email address'; 
  } else {
    errorMsg.textContent = ''; 
    valid = true;
  }
  return valid;
}



/* 

Learning Notes: 

The event listener is broken up into 3 seperate functions. It's not required but it's better practice for bigger projects. 

const isRequired function: 
  the shorthand es6 version of the above code is this: 
  const isRequired = value => value === '' ? false : true;
  i've broken it down to original js code for learning purposes
*/

