document.getElementById('vip-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('vip-password').value.trim().toLowerCase();
    if (input === "brother eye") {
        window.location.href = "vip-movies.html";
    } else {
        document.getElementById('vip-error').style.display = "block";
    }
});