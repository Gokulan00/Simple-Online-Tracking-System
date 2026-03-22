function login(e){

e.preventDefault()

let email=document.getElementById("email").value
let password=document.getElementById("password").value

if(email=="gowtham@email.com" && password=="123"){
alert("Login success")
window.location="dashboard.html"
}
else{
alert("pass incorrect")
}

}
