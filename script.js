const storedUser = "admin";
const storedHash = "9b0eb22aef89516d6fb4b31ccf008a68abe0d10a3fc606316389613eccf96854";

async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}
function togglePassword() {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
async function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value;

    const inputHash = await sha256(pass);

    if (user === storedUser && inputHash === storedHash) {
        document.getElementById("result").innerText = "✅ Access Granted! Redirecting...";
        setTimeout(() => {
            window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1"; 
        }, 2000);
    } else {
        document.getElementById("result").innerText = "❌ Wrong Try Again!";
    }
}