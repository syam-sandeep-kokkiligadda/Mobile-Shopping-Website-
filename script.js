document.addEventListener('DOMContentLoaded', function () {
    const registerButton = document.getElementById('register');

    registerButton.addEventListener('click', function () {
        const name = document.getElementById('name').value.trim();
        const surname = document.getElementById('surname').value.trim();
        const address = document.getElementById('address').value.trim();
        const city = document.getElementById('city').value.trim();
        const mobile = document.getElementById('num').value.trim(); 
        const email = document.getElementById('email').value.trim(); 
        const password = document.getElementById('psw').value.trim(); 
        const confirmPassword = document.getElementById('cnfpsw').value.trim(); 
        if (!name) {
            alert('Please fill  your name.');
            return;
        }
        if (!surname) {
            alert('Please fill your surname.');
            return;
        }
        if (!address) {
            alert('Please fill your address.');
            return;
        }
        if (!city) {
            alert('Please fill  your city.');
            return;
        }
        if (!mobile) {
            alert('Please fill your mobile number.');
            return;
        }
        if (!email) {
            alert('Please fill your email.');
            return;
        }
        if (!password) {
            alert('Please fill  your password.');
            return;
        }
        if (!confirmPassword) {
            alert('Please confirm your password.');
            return;
        }
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
        alert('Registered successfully!');
        window.location.href = 'http://127.0.0.1:5500/Login.html';
    });
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

