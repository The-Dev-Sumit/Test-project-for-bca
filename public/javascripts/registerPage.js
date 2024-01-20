let icon = document.getElementById('eye');
let password = document.getElementById('password');


let label = document.querySelectorAll('label').forEach(label => {
            label.innerHTML = label.innerText.split('').map((letters, i) =>
                `<span style = "transition-delay: ${i * 50}ms">${letters}</span>`).join('');
});
        
icon.addEventListener("click", () => {
    if (password.type == "password") {
        password.type = "text";  
        icon.src = "/images/view.png";
    } else {
        password.type = "password";
        icon.src = "/images/hide.png";
    }
})

// Add JavaScript code to automatically dismiss the error message after 5 seconds
setTimeout(function () {
    let errorMessage = document.getElementById('errorShow');
    if (errorMessage) {
        errorMessage.style.display = 'none';
    }
}, 3000); // 5000 milliseconds = 5 seconds
