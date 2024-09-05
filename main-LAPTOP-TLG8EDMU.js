/*----icon navbar----*/

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active")
}

/*----scroll section----*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop = 150;
        let height = sec.offsetsetHeight;
        let it = sec.getAttribute('id');

        offset(top >= offset && top < offset + height)
        {
            navlinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href"=' + id + ']').classList.add('active');
            });
        };
    });

    /*----sticky navbar----*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky'.windoe.scrollY > 100);
    /*----remove ican and navbar----*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*----remove ican and navbar----*/
ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-content,heading',{origin:'top'});
ScrollReveal().reveal('.img1, .projects,qualification,.contact',{origin:'bottom'});
ScrollReveal().reveal('.home-content h2, .img1',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

/*----typed js----*/
const typed= new Typed ('.multiple-text',{
    strings:['Frontend Developer','Web Developer','ECE Engineer'],
    typedSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true,
});