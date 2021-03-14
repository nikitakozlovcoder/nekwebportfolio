function scrollTo(position, time) {
    let delta =  position - window.pageYOffset;
    let chank = delta / time * 10;
    function scroll() {
        if (delta>0) {
            if (window.pageYOffset >= position || window.pageYOffset + document.documentElement.clientHeight === document.body.scrollHeight ) {
                clearInterval(interval);
                return;
            }
        }
        else {
            if (window.pageYOffset <= position || window.pageYOffset === 0 ) {
                clearInterval(interval);
                return;
            }
        }
        window.scroll(0, window.pageYOffset+chank)
    }
    let interval = setInterval(scroll, 10)
}
document.querySelector('.top-ico').addEventListener('click', () => {
    scrollTo(0, 800);
});
document.querySelector('.features-link').addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo(document.querySelector('.features').offsetTop - 50 , 300);
});

document.querySelector('.why-link').addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo(document.querySelector('.about').offsetTop , 500);
});

document.querySelector('.btn-nav').addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo(document.querySelector('.contact').offsetTop-150 , 700);
});
document.querySelector('.btn-to-contact').addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo(document.querySelector('.contact').offsetTop-150 , 500);
});
document.querySelector('.btn-header-contact').addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo(document.querySelector('.contact').offsetTop-150 , 800);
});
document.querySelector('.btn-show-more').addEventListener('click', (e) => {
    e.preventDefault();
    scrollTo(document.documentElement.clientHeight - 70 , 500);
});