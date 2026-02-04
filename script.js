document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans.forEach(s => {s.style.transform = 'none'; s.style.opacity = '1';});
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#2563eb;color:white;border:none;width:50px;height:50px;border-radius:50%;font-size:1.5rem;cursor:pointer;display:none;z-index:1000;box-shadow:0 4px 6px rgba(0,0,0,0.1);transition:all 0.3s';
    backToTop.onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});
    document.body.appendChild(backToTop);
    window.addEventListener('scroll', function() {
        backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
});
