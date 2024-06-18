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
        function getBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
                reader.readAsDataURL(file);
            });
        }
        getBase64(profilePicture).then(base64String => {
            const newUser = {
                username: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                dob: dob,
                phone: phone,
                email: email,
                profilePicture: base64String, 
                language: "English",
            };
            
            let userList = JSON.parse(localStorage.getItem('userList')) || [];
            userList.push(newUser);
            localStorage.setItem('userList', JSON.stringify(userList));
            localStorage.setItem("currentUser", JSON.stringify(newUser));
            window.location.href = "webpage.html";
        }).catch(error => {
            console.error('Error converting profile picture to base64:', error);
        });
    });
});