
function whatsapp() {
    window.open('https://wa.me/7067374279');
}

function sendMsg() {
    let name = document.getElementById('name').value;
    let msg = document.getElementById('msg').value;
    let res = document.getElementById('response');

    if (name === '' || msg === '') {
        res.innerText = 'Please fill all fields';
        res.style.color = 'red';
    } else {
        res.innerText = 'Message Sent Successfully!';
        res.style.color = 'green';
    }
}

const sections = document.querySelectorAll("section");

function showSections() {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;

        if (top < trigger) {
            sec.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showSections);
window.addEventListener("load", showSections);

// click pe animation reset
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        sections.forEach(sec => sec.classList.remove("show"));

        setTimeout(() => {
            showSections();
        }, 300);
    });
});


//  call and email
function makeCall() {
    let confirmCall = confirm("Are you sure you want to call +91 7067374279?");
    if (confirmCall) {
        window.location.href = "tel:+917067374279";
    }
}








