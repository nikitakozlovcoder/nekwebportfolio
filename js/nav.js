(function () {
    let expanded = false;
    let toggle = document.querySelector('.toggle-menu');
    let menu = document.querySelector('.links');
    let links = document.querySelectorAll('.link');
    let nav = document.querySelector('.nav');
    let wrap = document.querySelector('.links_wrap');
    function toggleMenu(){
        if (expanded) {
            menu.style.height = 0;
            expanded = false;
            console.log(nav);
            nav.classList.remove('black');
            toggle.classList.remove('cross');
            return;
        }
        let height = wrap.offsetHeight;
        nav.classList.add('black');
        toggle.classList.add('cross');
        menu.style.height = height+'px';
        expanded = true;
    };

    toggle.addEventListener('click', toggleMenu);

    links.forEach((link) =>{
        link.addEventListener('click', toggleMenu)
    });
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
            nav.classList.add('scrolled');
        }
        else {
            nav.classList.remove('scrolled');
        }
    });
})();