function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "DCCU5067") {
        document.getElementById("content").style.display = "block";
        document.getElementById("passwordForm").style.display = "none";
    } else {
        alert("Incorrect password. Please try again.");
    }
}
