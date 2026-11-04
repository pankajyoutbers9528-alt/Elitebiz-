document.addEventListener('DOMContentLoaded', () => {
    
    // 1. मोबाइल रिस्पॉन्सिव मेनू टॉगल
    const mobileMenu = document.getElementById('mobileMenu');
    const navMenu = document.getElementById('navMenu');

    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        // बटन आइकॉन बदलना (Bars से Cross)
        const icon = mobileMenu.querySelector('i');
        if(navMenu.classList.contains('open')) {
            icon.classList.replace('fa-bars', 'fa-xmark');
        } else {
            icon.classList.replace('fa-xmark', 'fa-bars');
        }
    });

    // मेनू लिंक पर क्लिक करते ही मोबाइल मेनू अपने आप बंद होना
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            mobileMenu.querySelector('i').classList.replace('fa-xmark', 'fa-bars');
        });
    });

    // 2. टॉप स्क्रॉल प्रोग्रेस बार
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('scrollBar').style.width = scrolled + '%';
    });

    // 3. अचीवमेंट्स नंबर काउंटिंग एनीमेशन (Live Stats Counter)
    const counters = document.querySelectorAll('.counter');
    const speed = 50;

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target + "+";
                }
            };
            updateCount();
        });
    };

    // जब यूजर स्क्रॉल करके स्टेट्स वाले हिस्से तक पहुंचेगा तभी काउंटिंग शुरू होगी
    const statsSection = document.getElementById('stats');
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) {
            startCounters();
            observer.disconnect(); // सिर्फ एक बार एनिमेट करने के लिए
        }
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);

    // 4. सिक्योर फॉर्म सबमिशन हैंडलर
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('inputName').value;
        const email = document.getElementById('inputEmail').value;

        // रियल वर्ल्ड प्रोजेक्ट्स में यहाँ API इंटीग्रेट होती है, फिलहाल यह सक्सेस मैसेज दिखाएगा
        alert(`आदरणीय ${name}, आपका अनुरोध सफलतापूर्वक प्राप्त कर लिया गया है। हमारे बिजनेस कंसल्टेंट जल्द ही आपसे ${email} पर संपर्क करेंगे। धन्यवाद!`);
        
        contactForm.reset();
    });
});
                      
