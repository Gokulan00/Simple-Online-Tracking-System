function userLogin(e){

e.preventDefault()

let email = document.getElementById("userEmail").value
let password = document.getElementById("userPassword").value

// 🔥 IMPORTANT: use gmail (same as database)
if(email == "gowtham@gmail.com" && password == "123"){

    // save email
    localStorage.setItem("userEmail", email)

    window.location = "userDashboard.html"
}
else{
    alert("Invalid user")
}

}