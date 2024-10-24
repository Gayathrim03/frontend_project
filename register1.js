var nameError=document.getElementById("name-error");
var emailError=document.getElementById("email-error");
var passwordError=document.getElementById("password-error");
var mobileError=document.getElementById("mobile-error");
var submitError=document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0)
    {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]\s{1}[A-Za-z]$/)){
        nameError.innerHTML = 'Enter the correct username';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
 
 function validateEmail(){
    var email = document.getElementById('contact-email').value;
    if(email.length == 0)
    {  
        emailError.innerHTML = 'Email is required';
        return false; 
    }
    if(!email.match(/^[A-Za-z\._\-[0-9][@][A-Za-z][\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
 }

  function validatePassword(){
    var password = document.getElementById('contact-password').value;
    if(password.length == 0)
    {
        passwordError.innerHTML = 'Password is Mandatory';
        return false; 
    }
    if(!password.match(/^[A-Za-z\._\-[0-9][@][A-Za-z][\.][a-z]{2,4}$/)){
        passwordError.innerHTML = 'Password Invalid';
        return false;
    }
    passwordError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
  }
   
   function validateForm(){
    if(!validateName() || !validateEmail() || !validatePassword ||!validatePhone()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
    }
   }