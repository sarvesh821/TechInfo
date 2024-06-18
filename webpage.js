window.onload = function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  if (!currentUser) {
    window.location.href = "Login.html";
  } else {
    document.getElementById("userName").innerText =
      currentUser.firstName + " " + currentUser.lastName;
    document.getElementById("I-email").innerText = currentUser.email;
    document.getElementById("I-phone").innerText = currentUser.phone;
    document.getElementById(
      "I-link"
    ).innerHTML = `http://home.iitk.ac.in/~${currentUser.firstName}`;
    document.getElementById("I-lang").innerHTML = currentUser.language;
    document.getElementById("I-profile").src = currentUser.profilePicture;
  }
};

document.getElementById("logout").addEventListener("click", function () {
  localStorage.removeItem("currentUser");
  window.location.href = "Login.html";
});

document
  .getElementById("edit-button")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const storedProfile = JSON.parse(localStorage.getItem("currentUser"));
    if (storedProfile) {
      document.getElementById(
        "name"
      ).value = `${storedProfile.firstName} ${storedProfile.lastName}`;
      document.getElementById("email").value = storedProfile.email;
      document.getElementById("phone").value = storedProfile.phone;
      document.getElementById("language").value = storedProfile.language;
      document.getElementById("address").value=document.getElementById('I-address').textContent
    }
  });
document
  .getElementById("editForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const name = document.getElementById("name").value;
    const new_email = document.getElementById("email").value;
    const new_phone = document.getElementById("phone").value;
    const language = document.getElementById("language").value;
    const address = document.getElementById("address").value;
    const profile = document.querySelector("input[name='profile']").files[0];
    console.log(profile);
    document.getElementById("userName").innerHTML = name;
    document.getElementById("I-email").innerText = new_email;
    document.getElementById("I-phone").innerText = new_phone;
    
    document.getElementById("I-lang").innerHTML = language;
    document.getElementById('I-address').innerHTML=address
    document.getElementById("I-profile").src=URL.createObjectURL(profile)

    const FL_name = name.split(" ");
    const editUser = {
      username: currentUser.username,
      password: currentUser.password,
      firstName: FL_name[0],
      lastName: FL_name[1],
      dob: currentUser.dob,
      phone: new_phone,
      email: new_email,
      profilePicture: currentUser.profilePicture,
    };
    console.log(editUser);
    const userList = JSON.parse(localStorage.getItem('userList'));
    const userIndex = userList.findIndex(user => user.username === editUser.username && user.password === editUser.password);
    const user = userList.find(user => user.username === editUser.username && user.password === editUser.password);
    if (user){
     localStorage.setItem('currentUser',JSON.stringify(editUser))
    }
    if (userIndex!=-1){
        userList[userIndex] = editUser;
        localStorage.setItem('userList', JSON.stringify(userList));
    }
    const modalElement = document.getElementById("editModal");
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  });
