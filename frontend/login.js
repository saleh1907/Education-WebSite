const API_BASE_URL = "https://localhost:7132";

document
  .getElementById("loginForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", data.userName);
        localStorage.setItem("email", data.email);

        message.textContent = "Login successful";

        setTimeout(() => {
          window.location.href = "index.html";
        }, 1000);
      } else {
        message.textContent = data.message || "Login failed";
      }
    } catch (error) {
      console.error(error);
      message.textContent = "Server error";
    }
  });
