function myFunction() {
    alert("You have successfully completed your registration, proceed to Login");
}


function validateForm() {  
    //collect form data in JavaScript variables  
    var pw1 = document.getElementById("pass").value;  
    var pw2 = document.getElementById("cpass").value;    
    
    
    if(pw1 != pw2) {  
      document.getElementById("message2").innerHTML = "**Passwords are not same";  
      return false;  
    } else {  
      alert ("You have successfully completed your registration, proceed to Login");    
    }  
 }  