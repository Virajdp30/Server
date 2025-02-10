// Menu Toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
    let navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
    this.innerHTML = navLinks.classList.contains("show") ? "✖" : "☰";
});

// Inquiry Form
document.getElementById("inquiry-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    let statusMessage = document.getElementById("form-status");

    if (!name || !email || !phone || !message) {
        statusMessage.style.color = "red";
        statusMessage.innerText = "Please fill in all fields.";
        return;
    }

    statusMessage.style.color = "green";
    statusMessage.innerText = "Inquiry submitted successfully!";
    document.getElementById("inquiry-form").reset();
});