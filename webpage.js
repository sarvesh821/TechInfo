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
    console.log(email);
    document.getElementById("userName").innerHTML = name;
    document.getElementById("I-email").innerText = new_email;
    document.getElementById("I-phone").innerText = new_phone;
    document.getElementById("I-profile").src = URL.createObjectURL(profile);
    document.getElementById("I-lang").innerHTML = language;

    const FL_name = name.split(" ");
    const editUser = {
      username: currentUser.email,
      password: currentUser.password,
      firstName: FL_name[0],
      lastName: FL_name[1],
      dob: currentUser.dob,
      phone: new_phone,
      email: new_email,
      profilePicture: currentUser.profilePicture,
    };

    const modalElement = document.getElementById("editModal");
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
  });
