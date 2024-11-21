        
var nameInp = document.getElementById("name");
var emailInp = document.getElementById("email");
var passwordInp = document.getElementById("password");
var gender = document.getElementsByName("gender");
var errName = document.getElementsByClassName('error');

function submitForm(e){
    e.preventDefault();
    
    if(nameInp.value.length <3){
        errName[0].style.display= 'block';
        errName[0].innerHTML="Enter Correct Name" 
    }
    if(nameInp.value.length <1){
        errName[0].style.display= 'block';
        errName[0].innerHTML="Name is required";
    }
    if(passwordInp.value.length <1){
        errName[2].style.display= 'block';
        errName[2].innerHTML="Password is required" 
    }
    if(passwordInp.value.length <9){
        errName[2].style.display= 'block';
        errName[2].innerHTML="Password Is Weak"
       
    }
    if(emailInp.value.length <1){
        errName[1].style.display= 'block';
        errName[1].innerHTML="Email is required" 

    }
     
    if(emailInp.value.indexof('@')){
        errName[1].style.display= 'block';
        errName[1].innerHTML="Email is invalid " 
    }

   
    if(!gender.checked){
        errName[3].style.display= 'block';
        errName[3].innerHTML="Gender is required" 
    }
   

}