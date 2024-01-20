const openMenu = document.querySelector('#menuBar');
const closeMenu = document.querySelector('#cut');
const activeNavBar = document.querySelectorAll('.nav_bar');
const cursor = document.querySelector('.cursor');
const handCursor = document.querySelector('.handCursor');
const content = document.querySelectorAll('.content');
const html = document.querySelector('html');
const allSkeleton = document.querySelectorAll(".skeleton");


openMenu.addEventListener('click', () => {
    activeNavBar.forEach((element) => {
        element.classList.add('active')
    })
});

closeMenu.addEventListener('click', () => {
    activeNavBar.forEach((element) => {
        element.classList.remove('active')
    })
});

html.addEventListener('mouseenter', () => {
    cursor.style.display = 'block'
});

html.addEventListener('mouseleave', () => {
    cursor.style.display = 'none'
});

html.addEventListener('mousemove', (move) => {
    var x = move.clientX;
    var y = move.clientY;

    var xOffset = 2;  // Example: Change this value
    var yOffset = 2;  // Example: Change this value

    // Adjust position based on scroll
    cursor.style.top = (y + window.scrollY - yOffset) + 'px';
    cursor.style.left = (x + window.scrollX - xOffset) + 'px';
});

function search() {
    let filter = document.querySelector(".sBar").value.toUpperCase();

    let tests = document.querySelectorAll(".tests");

    let h3Element = document.getElementsByTagName("h3");

    for (var i = 0; i<h3Element.length; i++){
        let a = tests[i].getElementsByTagName("h3")[0];

        let value = a.innerHTML || a.innerText || a.textContent;

        if (value.toUpperCase().indexOf(filter) > -1) {
            tests[i].style.display = ""; 
        }
        else {
            tests[i].style.display = "none"; 
         }
    }
}

document.getElementById("math").addEventListener("click", () => {
    window.location.href = "/overview/mathematics";
});
document.getElementById("pc").addEventListener("click", () => {
    window.location.href = "/overview/pc-troubleshooting";
});
document.getElementById("c").addEventListener("click",() => {
    window.location.href = "/overview/c";
});
document.getElementById("funda").addEventListener("click",() => {
    window.location.href = "/overview/computer-fundamental";
});
document.querySelectorAll("#a").forEach(element => {
    element.addEventListener("click", () => {
        window.location.href = "/overview/no-content";
    });
});
document.getElementById("muj").addEventListener("click",() => {
    window.location.href = "https://learning.onlinemanipal.com/d2l/home";
});

window.addEventListener('load', () => {
    allSkeleton.forEach(item => {
        item.classList.remove("skeleton")
    })        
})