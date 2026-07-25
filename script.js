/*=========================================
        MOBILE MENU TOGGLE
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }

});


/*=========================================
        CLOSE MENU AFTER CLICK
=========================================*/

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");
        menuBtn.innerHTML = "☰";

    });

});


/*=========================================
        STICKY HEADER
=========================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});


/*=========================================
        SMOOTH ACTIVE MENU
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/*=========================================
        SCROLL REVEAL ANIMATION
=========================================*/

const reveals = document.querySelectorAll(
".service-card, .profile-wrapper, .client-card, .testimonial, .contact-wrapper, #tradeprofitfund, #tpf"
);

function revealAnimation() {

    let windowHeight = window.innerHeight;

    reveals.forEach(item => {

        let revealTop = item.getBoundingClientRect().top;
        let revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealAnimation);
window.addEventListener("load", revealAnimation);


/*=========================================
        HERO TEXT ANIMATION
=========================================*/

window.addEventListener("load", () => {

    const hero = document.querySelector(".hero-content");

    hero.style.opacity = "0";
    hero.style.transform = "translateY(40px)";

    setTimeout(() => {

        hero.style.transition = "all 1s ease";
        hero.style.opacity = "1";
        hero.style.transform = "translateY(0px)";

    }, 300);

});


/*=========================================
        BACK TO TOP BUTTON
=========================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
right:25px;
bottom:25px;
width:55px;
height:55px;
border:none;
border-radius:50%;
background:#f3cf55;
color:#111;
font-size:24px;
cursor:pointer;
display:none;
box-shadow:0 10px 25px rgba(0,0,0,.2);
transition:.3s;
z-index:999;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


/*=========================================
        BUTTON HOVER
=========================================*/

topBtn.addEventListener("mouseenter", () => {

    topBtn.style.transform = "translateY(-5px)";

});

topBtn.addEventListener("mouseleave", () => {

    topBtn.style.transform = "translateY(0px)";

});


/*=========================================
        PARALLAX HERO
=========================================*/

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    hero.style.backgroundPositionY = window.pageYOffset * 0.5 + "px";

});


/*=========================================
        PRELOADER
=========================================*/

const loader = document.createElement("div");

loader.id = "loader";

loader.innerHTML = "<div class='loader-circle'></div>";

document.body.appendChild(loader);

loader.style.cssText = `
position:fixed;
left:0;
top:0;
width:100%;
height:100%;
background:#ffffff;
display:flex;
justify-content:center;
align-items:center;
z-index:99999;
transition:.6s;
`;

const style = document.createElement("style");

style.innerHTML = `
.loader-circle{
width:70px;
height:70px;
border:6px solid #ddd;
border-top:6px solid #f3cf55;
border-radius:50%;
animation:spin 1s linear infinite;
}

@keyframes spin{
100%{
transform:rotate(360deg);
}
}

nav ul li a.active{
color:#000;
font-weight:700;
}

nav ul li a.active::after{
width:100%;
}

.show{
opacity:1 !important;
transform:translateY(0px)!important;
transition:all .8s ease;
}

.service-card,
.client-card,
.profile-wrapper,
.testimonial,
.contact-wrapper,
#tradeprofitfund,
#tpf{

opacity:0;
transform:translateY(50px);

}
`;

document.head.appendChild(style);

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    },700);

});


/*=========================================
        CONSOLE MESSAGE
=========================================*/

console.log("%cTrade Profit Fund Website","font-size:24px;color:#f3cf55;font-weight:bold;");
console.log("%cDeveloped with HTML • CSS • JavaScript","font-size:14px;color:#555;");