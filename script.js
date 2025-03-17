// Animation au scroll améliorée
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aos-animate');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// Barre de progression du scroll
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.prepend(scrollProgress);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Effet parallaxe léger
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelector('.name').style.transform = 
        `translateY(${scrolled * 0.2}px)`;
});

// Animation au hover des icônes sociales
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'translateY(-5px)';
    });
    
    link.addEventListener('mouseout', () => {
        link.style.transform = 'translateY(0)';
    });
});
// Génération des particules
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 30;
    
    for(let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Position aléatoire
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Taille aléatoire
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Animation
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 5 + 5) + 's';
        
        container.appendChild(particle);
    }
}

// Génération des étoiles
function createStars() {
    const container = document.getElementById('stars');
    const starCount = 50;
    
    for(let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(star);
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    createStars();
    
    // Effet parallaxe léger
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        document.querySelector('.grid-lines').style.transform = 
            `translate(${x * -20}px, ${y * -20}px)`;
    });
});
function createFloatingShapes() {
    const container = document.getElementById('shapes');
    const shapes = ['triangle', 'circle'];
    
    for(let i = 0; i < 8; i++) {
        const shape = document.createElement('div');
        shape.className = `shape ${shapes[Math.floor(Math.random() * shapes.length)]}`;
        
        shape.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
            animation-duration: ${Math.random() * 5 + 8}s;
            opacity: ${Math.random() * 0.1 + 0.05};
        `;
        
        container.appendChild(shape);
    }
}

function createConnectingLines() {
    const container = document.getElementById('lines');
    
    for(let i = 0; i < 12; i++) {
        const line = document.createElement('div');
        line.className = 'line';
        
        line.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            transform: rotate(${Math.random() * 360}deg);
            animation-delay: ${Math.random() * 4}s;
        `;
        
        container.appendChild(line);
    }
}

// Ajouter à l'initialisation
document.addEventListener('DOMContentLoaded', function() {
    createFloatingShapes();
    createConnectingLines();
});
function createBinaryCode() {
    const container = document.querySelector('.binary-animation');
    const characters = '01';
    
    for(let i = 0; i < 200; i++) {
        const span = document.createElement('span');
        span.textContent = characters[Math.floor(Math.random() * characters.length)];
        span.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            color: rgba(0,255,136,0.05);
            animation: binary-float ${Math.random() * 10 + 5}s infinite;
        `;
        container.appendChild(span);
    }
}

// Ajouter à l'initialisation
document.addEventListener('DOMContentLoaded', function() {
    createBinaryCode();
});
// Cursor magique
document.addEventListener('mousemove', (e) => {
    const cursor = document.getElementById('cursor');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    // Interaction avec les éléments cliquables
    if(e.target.closest('a, button')) {
        cursor.style.transform = 'scale(2)';
        cursor.style.background = 'rgba(0,255,136,0.3)';
    } else {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = 'transparent';
    }
});

// Effet de vague liquide
function createLiquidEffect() {
    const wave = document.querySelector('.liquid-wave');
    let hue = 0;
    
    setInterval(() => {
        hue = (hue + 0.5) % 360;
        wave.style.setProperty('--primary-color', `hsl(${hue}, 100%, 50%)`);
    }, 50);
}

// Effet de hover dynamique
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const effect = document.querySelector('.project-hover-effect');
        effect.style.left = e.clientX + 'px';
        effect.style.top = e.clientY + 'px';
    });
});

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    createLiquidEffect();
    document.body.classList.add('loaded');
});
