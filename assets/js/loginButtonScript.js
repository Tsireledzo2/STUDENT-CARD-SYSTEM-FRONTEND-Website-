var myArticle = document.getElementById("take-picture");
var login = document.getElementById("log");
const comboBox = document.getElementById('combo-box');
const resList = document.getElementById('res-combo-box');
const textField = document.getElementById('roomNumber');
const btnAppSubmit = document.getElementById('application-submittion');
const homeAddress = document.getElementById('hpAddress');
const btnSubmitAddress = document.getElementById('application-submittion-Address');

btnAppSubmit.addEventListener("click", function(){
  if(textField.value ==""){
    alert('Entre the room number');
  }else{
    alert('Application successfully submitted');
    textField.value ="";
    resList.value="";
    comboBox.value="";
    login.style.display='block';
    myArticle.style.display='none';
  }
  
});