const btn = document.querySelector('button');


/*
btn.addEventListener('submit', function(input) {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  console.log(input);*//*
  if (input.value.match(emailFormat)) {
    return true;
  } else {
    errorMsg.textContent = "Please provide a valid email address";
    return false;
  }*//*
})*/
/* need click event for the submit button. to run this validate email function. */ 

/*
email.addEventListener('input', function(e) {
  console.log(e.target.value);
  console.log(e.target)
  console.log(e);
  const input = e.target.value;
  e.preventDefault();
})*/

const emailEl = document.getElementById('email');
const form = document.querySelector('form'); 

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isEmailValid = checkEmail(); 
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
/* 
the shorthand es6 version of the above code is this: 
  const isRequired = value => value === '' ? false : true;
i've broken it down to original js code for learning purposes
*/ 


// function to check if email has a valid input. i.e. xyz@domain.net. 
const isEmailValid = (x) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(x);
};

const errorMsg = document.getElementById('error-msg');

// return true if email is provided and it's valid. + show error msg if it returns false. 
const checkEmail = () => {
  let valid = false;
  const x = emailEl.value.trim();
  if (!isRequired(x) || !isEmailValid(x)) {
    errorMsg.textContent = 'Please provide a valid email address'; 
  } else {
    errorMsg.textContent = ''; 
    alert('valid email');
    valid = true;
  }
  return valid;
}



/* example of valid email: java@gmail.com */

/* Notes: 

not sure why you can use both const isEmailValid and let isEmailValid since they are the same???? are they??? 


*/