console.log("Unity Engineer Portfolio Loaded");

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(section => {
    observer.observe(section);
});

// Typing effect for hero text
const text = "ゲーム開発者 | Unity エンジニア | C# プログラマー";
const typingElement = document.querySelector('.typing-effect');
let i = 0;

function typeWriter() {
    if (!typingElement) return; // Guard clause for pages without typing effect

    if (i < text.length) {
        typingElement.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
        i++;
        setTimeout(typeWriter, 50);
    } else {
        typingElement.innerHTML = text; // Remove cursor at end
    }
}

// Start typing effect after a slight delay
setTimeout(typeWriter, 1000);
