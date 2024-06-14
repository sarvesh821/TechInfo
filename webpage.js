window.onload = function() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
    if (!currentUser) {
      window.location.href = "Login.html";
    } else {
      document.getElementById("userName").innerText = currentUser.firstName + " " + currentUser.lastName;
      document.getElementById("I-email").innerText = currentUser.email; 
      document.getElementById("I-phone").innerText = currentUser.phone; 
      document.getElementById('I-link').innerHTML=`http://home.iitk.ac.in/~${currentUser.firstName}`
      document.getElementById('I-lang').innerHTML=currentUser.language
      document.getElementById('I-profile').src=currentUser.profilePicture

     
      
    }
  };

  document.getElementById("logout").addEventListener("click", function() {
    localStorage.removeItem("currentUser");
    window.location.href = "Login.html";
  });

    document.getElementById('editForm').addEventListener('submit', function(event) {
      event.preventDefault();
     

     
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const language = document.getElementById('language').value;
      const address = document.getElementById('address').value;
       console.log(email)

      document.getElementById("I-email").innerText = email; 
      document.getElementById("I-phone").innerText = phone; 
     
      document.getElementById('I-lang').innerHTML=language;
      document.getElementById('I-lang').innerHTML=address;
      
      
      
      const modalElement = document.getElementById('editModal');
      const modal = bootstrap.Modal.getInstance(modalElement);
      modal.hide();


    });
    