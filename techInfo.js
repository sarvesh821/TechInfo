let userList = JSON.parse(localStorage.getItem('userList')) || [
    {
      username: "admin",
      password: "admin",
      firstName: "Admin",
      lastName: "User",
      dob: "1990-01-01",
      employeeId: "1001",
      email: "admin@example.com",
      phone: "1234567890",
      language: "English",
      profilePicture: "profile.jpg",
    },
    {
      username: "vineetks",
      password: "vineetks",
      firstName: "Vineet",
      lastName: "Kumar",
      dob: "1992-01-01",
      employeeId: "1002",
      email: "vineet@example.com",
      phone: "0987654321",
      language: "Hindi",
      profilePicture: "vineet.jpg",
    },
    {
      username: "john",
      password: "john123",
      firstName: "John",
      lastName: "Doe",
      dob: "1985-05-15",
      employeeId: "1003",
      email: "john@example.com",
      phone: "1112223334",
      language: "English",
      profilePicture: "john.jpg",
    },
    {
      username: "david123",
      password: "david123",
      firstName: "David",
      lastName: "Warner",
      dob: "1995-07-20",
      employeeId: "1004",
      email: "david@example.com",
      phone: "4445556667",
      language: "Hindi",
      profilePicture: "david.jpg",
    }
];

localStorage.setItem('userList', JSON.stringify(userList));

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.querySelector("input[name='username']").value;
    const password = document.querySelector("input[name='Password']").value;

    const userList = JSON.parse(localStorage.getItem('userList'));
    const user = userList.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "webpage.html";
    } else {
        let contentDiv = document.getElementById("error");
        contentDiv.innerText = "Invalid username or password.";
        if (contentDiv.innerHTML.trim() !== '') {
            contentDiv.style.display = 'block';
        }
    }
});




