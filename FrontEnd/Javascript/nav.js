let isLoggedIn = localStorage.getItem("isLoggedIn");

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const navbar = document.querySelector(".navbar");
    const userName = document.querySelector("#userName");
    
    menuButton.addEventListener("click", function () {
        navbar.classList.toggle("show-nav");
    });
    
    userName.addEventListener("click", function () {
        navbar.classList.toggle("show-but");
    });
    
    logoutBtn.addEventListener("click", function () {
        localStorage.setItem("isLoggedIn",null);
        window.location.href = "login.html";
    });
    
    function updateUI() {
        const loginBtn = document.getElementById("loginBtn");
        const registerBtn = document.getElementById("registerBtn");
        const dropdown = document.getElementById("dropdown");
        const userName = document.getElementById("userName");
        const logoutBtn = document.getElementById("logoutBtn");
        
        if (isLoggedIn) {
            loginBtn.style.display = "none";
            registerBtn.style.display = "none";
            dropdown.style.display = "inline-block";
            userName.textContent = "User Name";
            userName.innerHTML=localStorage.getItem("username");
        }
        if (isLoggedIn == "null") {
            loginBtn.style.display = "inline-block";
            registerBtn.style.display = "inline-block";
            dropdown.style.display = "none";
        }
    }
    updateUI();
    
});
