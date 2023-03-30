//open new article
var myButton = document.getElementById("my-button");
var myArticle = document.getElementById("take-picture");
var login = document.getElementById("log");
const studentNumber = document.getElementById('studentNumber');
const studentPassword = document.getElementById('password');

myButton.addEventListener("click", function() {
if (studentNumber.value=="") {
    alert('Entre your student number');
    myArticle.style.display = "none";
    login.style.display = "block";
}else if(studentPassword.value==""){
    alert('Entre your student password');
    myArticle.style.display = "none";
    login.style.display = "block";
} else {
    myArticle.style.display = "block";
    login.style.display = "none";
}
});