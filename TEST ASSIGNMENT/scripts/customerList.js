//Accessing fetched data from API which is stored in localstorage 
//Displaying all users from JSON file in list form
window.onload = () => {
    //checking for localstorage data is present
    if (localStorage.getItem("userNow") == undefined) {
        location.assign('login.html')
    } else {
        let userInfo = JSON.parse(localStorage.getItem('userInfo'))
        //looping on array having data from localstorage
        userInfo.forEach((item, index) => {
        //crating and rendering DOM elements
            //crating div for each user having id and class
            let user = document.createElement('div')
            user.setAttribute("id", `c${index + 1}`)
            user.setAttribute("class", "list-item")

            //crating icon for each user
            let icon = document.createElement('i')
            icon.classList.add("fas")
            icon.classList.add("fa-user-circle")
            icon.classList.add("fa-2x")
            user.appendChild(icon)

            //Displaying name
            let namePlace = document.createElement('span')
            namePlace.setAttribute("id", "client-name")
            namePlace.textContent = item["name"]
            user.appendChild(namePlace)


            //After clicking on list element it redirects to admin edit delete and individual user card page 
            user.addEventListener('click', (e) => {
                localStorage.setItem("userNum", index)
                location.assign('viewUser.html')
            })

            document.querySelector('#list').appendChild(user)
        })
    }

    
}