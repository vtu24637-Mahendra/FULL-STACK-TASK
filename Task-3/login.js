document.getElementById("loginForm")
    .addEventListener("submit", loginUser);

function loginUser(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (!username || !password) {
        message.style.color = "red";
        message.textContent = "All fields are required";
        return;
    }

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            message.style.color = "green";
            message.textContent = "Login Successful";

            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 1000);
        } else {
            message.style.color = "red";
            message.textContent = data.message;
        }
    })
    .catch(err => {
        message.style.color = "red";
        message.textContent = "Server Error";
        console.error(err);
    });
}