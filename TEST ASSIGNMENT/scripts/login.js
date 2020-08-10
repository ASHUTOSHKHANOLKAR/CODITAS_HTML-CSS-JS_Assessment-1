//saving DOM reoresentation to variable
const submitVal = document.querySelector('#loginBtn')
const emailVal = document.querySelector('#email')
const passwordVal = document.querySelector('#password')

//Adding event listener to login button
//Validates email and password max length=8
//Storing data in localstorage by parsing JSON
//Handling error if anything goes wrong in login
submitVal.addEventListener('click', (e) => {
    if (emailValidate(emailVal.value) && passwordVal.value.length >= 8) {
        let email = emailVal.value
        let password = passwordVal.value
        let info = JSON.parse(localStorage.getItem(email))
        if (info["password"] === password) {
            generateData().then((data) => {
                localStorage.setItem("userNow", email)
                location.assign('customerList.html')
            }).catch((e) => {
                alert("Error....Try Again..!")
            })
        } 
        else {
            alert("Unauthorized Access..Try Again..!")
        }
    } 
    else {
        alert("Wrong credentials..Try Again..!")
    }
})


//Email validation function to match exact format of email
const emailValidate = function (data) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (data.match(mailformat)) {
        return true
    } 
    else {
        return false
    }
}

//This is for displaying email validation rules in DOM if anything goes wrong
emailVal.addEventListener('change', (e) => {
    if (!emailValidate(e.target.value) && e.target.value !== "") {
        document.querySelector('#message').textContent = "Invalid Email"
    } else {
        document.querySelector('#message').textContent = ""
    }
})

//This is for displaying password validation rules in DOM if anything goes wrong
passwordVal.addEventListener('change', (e) => {
    if (!(e.target.value.length >= 8) && e.target.value !== "") {
        document.querySelector('#message').textContent = "password must contain 8 or more characters."
    } else {
        document.querySelector('#message').textContent = ""
    }
})



//Fetching json data through given API and storing data in localstorage array
const generateData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/users', {})
    let userInfo = await response.json()
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
}