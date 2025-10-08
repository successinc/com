// স্ক্রল অ্যানিমেশন
function checkScroll() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
            section.classList.add('visible');
        }
    });
}

// স্মুথ স্ক্রলিং
document.addEventListener('DOMContentLoaded', function() {
    // স্ক্রল ইভেন্ট
    window.addEventListener('scroll', checkScroll);
    checkScroll();
    
    // স্মুথ স্ক্রলিং
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// লোডিং এনিমেশন
window.addEventListener('load', function() {
    const loader = document.createElement('div');
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(45deg, #27ae60, #e74c3c);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.5s ease;
    `;
    loader.innerHTML = `
        <div style="text-align: center; color: white;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">✈️</div>
            <h2 style="font-family: Kalpurush;">Success Inc.</h2>
            <p>লোড হচ্ছে...</p>
        </div>
    `;
    
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(loader);
        }, 500);
    }, 2000);
});