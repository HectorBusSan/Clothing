const showMenu = (toggleId,navId)=>{
    const toggle =document.getElementById(toggleId),
        nav= document.getElementById(navId);
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show');
        })
    }
}
showMenu('nav-toggle','nav-menu');

const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // remove menu mobil
    const navMenu= document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click',linkAction));

// scroll active
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(curret =>{
        const sectionHeight = curret.offsetHeight,
                sectionTop = curret.offsetTop - 58,
                sectionId = curret.getAttribute('id');

    if(scrollY>sectionTop && scrollY<=sectionTop + sectionHeight){
        document.querySelector('.nav__menu a[href*='+sectionId+']').classList.add('active');
    }else{
        document.querySelector('.nav__menu a[href*='+sectionId+']').classList.remove('active');
    }
    })
}
window.addEventListener('scroll',scrollActive)