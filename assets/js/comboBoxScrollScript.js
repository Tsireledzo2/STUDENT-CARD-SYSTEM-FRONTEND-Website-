 //if res is selected show all cput residence
 const comboBox = document.getElementById('combo-box');
 const resList = document.getElementById('res-combo-box');
 const textField = document.getElementById('roomNumber');
 const btnAppSubmit = document.getElementById('application-submittion');
 const homeAddress = document.getElementById('hpAddress');
 const btnSubmitAddress = document.getElementById('application-submittion-Address');

 comboBox.addEventListener('change', function() {
   if (comboBox.value == 'optRes') {
     resList.style.display = 'block';
     homeAddress.style.display='none';
     resList.scrollIntoView({ behavior: 'smooth' });
   } else {
     resList.style.display = 'none';
     textField.style.display = 'none';
     homeAddress.style.display='block';
     btnAppSubmit.style.display='none';
     btnSubmitAddress.style.display = 'block';
     comboBox.scrollIntoView({ behavior: 'smooth' });
   }
 });

 //if a name of residence is selected then show room number options
 const resComboBox = document.getElementById('res-combo-box');
 

 resComboBox.addEventListener('change', function() {
   if (resComboBox.value !== '') {
     textField.style.display = 'block';
     btnAppSubmit.style.display = 'block';
     textField.scrollIntoView({ behavior: 'smooth' });
   } else {
     textField.style.display = 'none';
   }
 });

 //make submit buttons clear the thing
 var myArticle = document.getElementById("take-picture");
 var login = document.getElementById("log");
 const streetName = document.getElementById('addressStreetName');
 const city = document.getElementById('addressCity');
 const code = document.getElementById('addressCode');


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
     location.reload();
   }
});
btnSubmitAddress.addEventListener("click", function(){
    if(streetName.value ==""){
      alert('Entre the street name');
    }else if(city.value ==""){
        alert('Entre the city name');
    }else if(code.value ==""){
        alert('Entre the zip code');
    }else{
      alert('Application successfully submitted');
      textField.value ="";
      resList.value="";
      comboBox.value="";
      login.style.display='block';
      myArticle.style.display='none';
      location.reload();
    }
 });
