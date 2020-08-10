//saving DOM reoresentation to variable
const emailVal = document.querySelector('#email')
const passwordVal = document.querySelector('#password')
const dobVal = document.querySelector('#dob')
const roleVal = document.querySelector('#role')
const submitVal = document.querySelector('#signupBtn')

//Adding event listener to create account button
//Validates email and password max length=8 and all other fields whether they are null or not
//Storing data in localstorage by parsing JSON
//Handling error if anything goes wrong in signup
submitVal.addEventListener('click', (e) => {
    if (emailValidate(emailVal.value) && passwordVal.value.length >= 8 && roleVal.value !== "" && dobVal.value !== "") {
        let email = emailVal.value
        console.log(email)
        console.log(localStorage.getItem(email))
        if (localStorage.getItem(email) == null) {
            let data = JSON.stringify({ "password": passwordVal.value, "dob": dobVal.value, "role": roleVal.value })
            localStorage.setItem(email, data)
            location.assign('login.html')
        } 
        else {
            alert("Use is already exist..Go for login..!")
        }
    } 
    else {
        alert("Error..Try again later..!")
    }
})


//Email validation function to match exact format of email
const emailValidate = function (data) {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(data)
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




//Validation for the DOB that checks the user cannot be less than 15 years old
window.onload = () => {
    let now = new Date()
    let yyyy = now.getFullYear() - 15
    let mm = now.getMonth() + 1
    let dd = now.getDate()
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    let today = `${yyyy}-${mm}-${dd}`
    document.querySelector('#dob').setAttribute("max", today)
    document.querySelector('#dob').setAttribute("value", today)
}