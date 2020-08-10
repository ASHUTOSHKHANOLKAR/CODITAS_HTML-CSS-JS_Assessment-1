//saving DOM reoresentation to variable
//Variable to store accessed JSON data
const nameVal = document.querySelector('#name')
const emailVal = document.querySelector('#email')
const phoneVal = document.querySelector('#phone')
const websiteVal = document.querySelector('#website')
const addressVal = document.querySelector('#address')
const companyVal = document.querySelector('#company')
const selectedUser = localStorage.getItem('userNum')
const userInfo = JSON.parse(localStorage.getItem('userInfo'))



//Function which renders DOM and store the individual data entity from localstorage in elements
load_DOM = () => {
    let userNow = userInfo[selectedUser]
    nameVal.textContent = userNow["name"]
    emailVal.textContent = userNow["email"]
    phoneVal.textContent = userNow["phone"]
    websiteVal.textContent = userNow["website"]
    addressVal.textContent = userNow["address"]["city"]
    companyVal.textContent = userNow["company"]["name"]
}


//Deleting the selected user from list by splicing the array and updating localstorage
document.querySelector('#delete').addEventListener('click', (e) => {
    if (confirm(`${userInfo[selectedUser]["name"]} will be deleted from list. Click to proceed..!`)) {
        userInfo.splice(selectedUser, 1)
        localStorage.setItem("userInfo", JSON.stringify(userInfo))
        location.assign('customerList.html')
    }
})


//saving DOM reoresentation to variable
const name = document.querySelector('#Name')
const email = document.querySelector('#Email')
const phone = document.querySelector('#Mobile')
const website = document.querySelector('#web')
const address = document.querySelector('#City')
const company = document.querySelector('#company-name')

//Storing and assigning new edited values from modal form
document.querySelector('#submit-modal').addEventListener('click', (e) => {
    if (name.value !== "") {
        userInfo[selectedUser]["name"] = name.value
    }
    if (email.value !== "") {
        userInfo[selectedUser]["email"] = email.value
    }
    if (phone.value !== "") {
        userInfo[selectedUser]["phone"] = phone.value
    }
    if (website.value !== "") {
        userInfo[selectedUser]["website"] = website.value
    }
    if (address.value !== "") {
        userInfo[selectedUser]["address"]["city"] = address.value
    }
    if (company.value !== "") {
        userInfo[selectedUser]["company"]["name"] = company.value
    }

    load_DOM()
    localStorage.setItem("userInfo", JSON.stringify(userInfo))
    $('#myModal').modal('hide');
})

//Fetching existing user card data and displaying on modal form fields
document.querySelector('#edit').addEventListener('click', (e) => {
    name.value = userInfo[selectedUser]["name"];
    email.value = userInfo[selectedUser]["email"];
    phone.value = userInfo[selectedUser]["phone"];
    website.value = userInfo[selectedUser]["website"];
    address.value = userInfo[selectedUser]["address"]["city"];
    company.value = userInfo[selectedUser]["company"]["name"];
})


//Redirecting pages after clicking button

document.querySelector('#logout').addEventListener('click', (e) => {
    localStorage.removeItem("userNow")
    location.assign('login.html')
})


//redirecting to login page if localstorage is undefined
window.onload = () => {
    if (localStorage.getItem("userNow") == undefined) {
        location.assign('login.html')
    } else {
        load_DOM()
    }
}