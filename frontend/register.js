const API_BASE_URL = "https://localhost:7132";

document
  .getElementById("registerForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        message.textContent = data.message || "Register successful";
        setTimeout(() => {
          window.location.href = "login.html";
        }, 1000);
      } else {
        message.textContent = data.message || "Register failed";
      }
    } catch (error) {
      console.error(error);
      message.textContent = "Server error";
    }
  });
