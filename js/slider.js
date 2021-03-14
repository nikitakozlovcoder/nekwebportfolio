(function () {
    let slider_inner = document.querySelector('.slider_inner');
    let slider_show = document.querySelector('.slider_show');
    let content = document.querySelectorAll('.slider_content');
    let slideNum = 0;
    function setWidth() {

        console.log(slider_show.offsetWidth);
        console.log(content);
        content.forEach((element) => {
            element.style.width = slider_show.offsetWidth + 'px';
        });
        slide(slideNum);
    }
    setWidth();
    window.addEventListener('resize', setWidth);

    function slide(i) {

        console.log('Click!');
        slider_inner.style.transform = `translateX(-${slider_show.offsetWidth * i}px)`;
    }

    function repaintDot(dotIndex) {
        document.querySelectorAll('.slider-dot').forEach((element, i) => {
            element.classList.remove('slider-dot-active');
            if (dotIndex === i) element.classList.add('slider-dot-active');
        });
    }

    document.querySelectorAll('.slider-dot').forEach((element, i) => {

        element.onclick = () => {
            slideNum = i;
            repaintDot(i);
            slide(i)
        };
    });
})();