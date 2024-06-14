document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("signUpForm").addEventListener("submit", function(event) {
        event.preventDefault();
    
        const firstName = document.querySelector("input[name='firstName']").value;
        const lastName = document.querySelector("input[name='lastName']").value;
        const dob = document.querySelector("input[name='dob']").value;
        const phone = document.querySelector("input[name='phone']").value;
        const email = document.querySelector("input[name='email']").value;
        const password = document.querySelector("input[name='password']").value;
        const profilePicture = document.querySelector("input[name='profilePicture']").files[0];
        
        const newUser = {
            username: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            dob: dob,
            phone:phone,
            email: email,
            profilePicture: URL.createObjectURL(profilePicture)
        };
    
        let userList = JSON.parse(localStorage.getItem('userList'));
        userList.push(newUser);
        localStorage.setItem('userList', JSON.stringify(userList));
        localStorage.setItem("currentUser", JSON.stringify(newUser));
        window.location.href = "webpage.html";
    });
});