document.getElementById("btn").addEventListener("click", function(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var ok=0;

  if(/^\s+|\s+$/.test(email) || email ==""){
    document.getElementById("emailValidate").innerHTML ="Ingresar email";
  }
  else if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+(\w{2,4})+$/.test(email))) {
    document.getElementById("emailValidate").innerHTML  = "Formato de correo no válido. Debe ser similar name@dominio.com";
  }
  else{
    document.getElementById("emailValidate").innerHTML  = "";
    ok++;
  }

  if(password=="" || /^\s+|\s+$/.test(password)){
    document.getElementById("passwordValidate").innerHTML = "Ingresar password";
  }
  else{
    document.getElementById("passwordValidate").innerHTML ="";
    ok++;
  }

  if(ok==2){
    alert("Ha ingresado correctamente sus datos");
  }
})
