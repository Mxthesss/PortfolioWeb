const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const iconBtn = themeToggleBtn.querySelector('i');

const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Světlý režim';
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Světlý režim';
    } else {
        localStorage.setItem('theme', 'light');
        themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Tmavý režim';
    }
});

const textKNapsani = "Ahoj, já jsem Mxthesss."; 
const textElement = document.getElementById('typing-text');
let indexPismene = 0;

function pisPismena() {
    if (indexPismene < textKNapsani.length) {
        textElement.innerHTML += textKNapsani.charAt(indexPismene);
        indexPismene++;
        setTimeout(pisPismena, 100); 
    }
}
pisPismena();

const odhalitElementy = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 
});

odhalitElementy.forEach(el => observer.observe(el));

const logoJmeno = document.getElementById('logo-jmeno');
const variantyJmena = ['Matěj Bednář', 'Mxthesss']; 
let aktualniIndex = 0;

setInterval(() => {
    logoJmeno.style.opacity = 0;
    
    setTimeout(() => {
        aktualniIndex = (aktualniIndex + 1) % variantyJmena.length;
        logoJmeno.textContent = variantyJmena[aktualniIndex];
        
        logoJmeno.style.opacity = 1;
    }, 400);

}, 4000); 

const btnNahoru = document.getElementById('btn-nahoru');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnNahoru.classList.add('zobrazit');
    } else {
        btnNahoru.classList.remove('zobrazit');
    }
});

btnNahoru.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let povodnititul = document.title;

window.addEventListener('blur', () => {
    document.title = 'Vrať se programovat! 💻';
});

window.addEventListener('focus', () => {
    document.title = povodnititul;
});