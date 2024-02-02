document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("login-mail").value;
    var password = document.getElementById("login-password").value;

    if (!validateEmail(username)) {
        alert("Email tidak valid. Harap masukkan alamat email yang benar.");
        return;
    }

    if (password === "") {
        alert("Password harus diisi.");
        return;
    }

    var logindata = {"Email": username, "Password": password}

    $.ajax({
        url: 'https://localhost:7285/api/Users/login',
        type: 'POST',
        data: JSON.stringify(logindata),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function (data) {
            console.log(data);
            alert('Success');
            localStorage.setItem("isLoggedIn",true);
            localStorage.setItem("username",data.name);
            window.location.href = "dashboard.html";
        },
        error: function (data) {
            console.log(data);
            alert('Error');
        }
    });
});

function validateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}


