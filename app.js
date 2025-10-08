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

// ভিডিও ব্যাকগ্রাউন্ড ফ্যালব্যাক
function setupVideoFallback() {
    const video = document.getElementById('hero-video');
    const hero = document.querySelector('.hero');
    
    video.addEventListener('error', function() {
        // ভিডিও লোড না হলে ব্যাকগ্রাউন্ড ইমেজ সেট করুন
        hero.style.background = 'linear-gradient(45deg, #27ae60, #e74c3c)';
    });
}

// কাউন্টার অ্যানিমেশন
function startCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => startCounters(), 1);
        } else {
            counter.innerText = target;
        }
    });
}

// গ্যালারি লাইটবক্স
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            // এখানে লাইটবক্স ইমপ্লিমেন্ট করতে পারেন
            console.log('Opening image:', imgSrc);
        });
    });
}

// ফর্ম ভ্যালিডেশন
function initFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '#27ae60';
                }
            });
            
            if (isValid) {
                // ফর্ম সাবমিশন লজিক
                alert('ধন্যবাদ! আপনার মেসেজটি পাঠানো হয়েছে।');
                this.reset();
            }
        });
    });
}

// থিম টগলার (ডার্ক/লাইট মোড)
function initThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.innerHTML = '🌙';
    themeToggle.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    
    document.body.appendChild(themeToggle);
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        this.innerHTML = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });
}

// পেজ লোড হলে সব ফাংশন ইনিশিয়ালাইজ করুন
document.addEventListener('DOMContentLoaded', function() {
    // স্ক্রল ইভেন্ট
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // প্রথম লোডে চেক করুন
    
    // ভিডিও সেটআপ
    setupVideoFallback();
    
    // গ্যালারি ইনিশিয়ালাইজ
    initGallery();
    
    // ফর্ম ভ্যালিডেশন
    initFormValidation();
    
    // থিম টগলার
    initThemeToggle();
    
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