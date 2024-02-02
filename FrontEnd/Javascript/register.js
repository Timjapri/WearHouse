document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Mengambil nilai dari input
    var name = document.getElementById("register-name").value;;
    var email = document.getElementById("register-mail").value;
    var password = document.getElementById("register-password").value;
    var confirmPassword = document.getElementById("register-confirmpassword").value;
    var tosCheckbox = document.getElementById("checkbox");

    // Validasi nama (tidak boleh kosong)
    if (name.trim() === "") {
        alert("Nama harus diisi.");
        return;
    }

    // Validasi email
    if (!validateEmail(email)) {
        alert("Email tidak valid. Harap masukkan alamat email yang benar.");
        return;
    }

    // Validasi password
    if (!validatePassword(password)) {
        return;
    }

    // Validasi konfirmasi password
    if (password !== confirmPassword) {
        alert("Password dan konfirmasi password harus sama.");
        return;
    }

    // Validasi checkbox TOS
    if (!tosCheckbox.checked) {
        alert("Anda harus menyetujui syarat dan ketentuan.");
        return;
    }

    var registerdata = {"Name": name, "Email": email, "Password": password}

    $.ajax({
        url: 'https://localhost:7285/api/Users/register',
        type: 'POST',
        data: JSON.stringify(registerdata),
        contentType: 'application/json; charset=utf-8',
        success: function () {
            alert('success');
            window.location.href = "login.html";
        },
        error: function () {
            alert('error');
        }
    });
});

function validateEmail(email) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    if (password.length < 8) {
        alert("Password harus memiliki minimal 8 karakter.");
        return false;
    }
    
    if (!/[A-Z]/.test(password)) {
        alert("Password harus mengandung setidaknya satu huruf kapital.");
        return false;
    }
    
    if (!/[0-9]/.test(password)) {
        alert("Password harus mengandung setidaknya satu angka.");
        return false;
    }
    
    if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
        alert("Password harus mengandung setidaknya satu simbol.");
        return false;
    }
    
    return true;
}
