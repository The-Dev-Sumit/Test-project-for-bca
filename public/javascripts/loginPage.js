let icon = document.getElementById('eye');
let password = document.getElementById('password');


 let label = document.querySelectorAll('label').forEach(label => {
            label.innerHTML = label.innerText.split('').map((letters, i) =>
                `<span style = "transition-delay: ${i * 50}ms">${letters}</span>`).join('');
 })
        
icon.addEventListener("click", () => {
    if (password.type == "password") {
        password.type = "text";  
        icon.src = "/images/view.png";
    } else {
        password.type = "password";
        icon.src = "/images/hide.png";
    }
})

document.addEventListener('DOMContentLoaded', function() {
        var forms = document.getElementsByTagName('form');
        for (var i = 0; i < forms.length; i++) {
            forms[i].reset();
        }
    });