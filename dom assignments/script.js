const btn = document.getElementById("toggleButton");

function updateButtonText() {
    if (document.body.classList.contains("dark")) {
        btn.textContent = "Switch to Light Mode";
    } else {
        btn.textContent = "Switch to Dark Mode";
    }
}

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    updateButtonText();
});

updateButtonText();