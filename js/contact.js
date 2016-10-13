document.getElementById("confirmButton").onclick = function(){
  if(!validateEmail(document.getElementById("email").value)){
    alert("Please enter a valid email!");
  }
  else if (document.getElementById("email").value != document.getElementById("email2").value) {
    alert("Email addresses do not match!");
  }
  else if (!document.getElementById("firstName").value){
    alert("Please enter a first name!");
  }
  else if (!document.getElementById("lastName").value){
    alert("Please enter a last name!");
  }
  else if (document.getElementById("firstName").value == "Donald" && document.getElementById("lastName").value == "Trump"){
    alert("You and your ENTIRE campaign team each receive a free case of Kool-Aid! Drink up!");
  }
  else{
    alert("Your order has been placed!");
  }
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
