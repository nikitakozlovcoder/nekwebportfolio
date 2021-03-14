
(function () {
    function getOffset(elem)
    {
        let offset = 0;
        do {
            if ( !isNaN( elem.offsetTop) )
            {
                offset += elem.offsetTop;
            }
        } while( elem = elem.offsetParent );
        return offset;
    }
    let elements = document.querySelectorAll('.anim');
    elements.forEach(el => el.style.opacity = 0);
    console.log(document.documentElement.clientHeight +" window height");
    window.addEventListener('scroll', () => {
        console.log(window.pageYOffset);
        console.log('!!!!!!!!!!!!!!!!');
       console.log(window.pageYOffset + document.documentElement.clientHeight-50 ) ;
        elements.forEach((el) => {
            console.log('ELEMENT');
            console.log(el);
            console.log(getOffset(el));
            console.log('--------------');
            if (getOffset(el) < window.pageYOffset + document.documentElement.clientHeight-50) {
                el.style.opacity = 1;
                el.classList.add('animated');
                el.classList.add(el.dataset.anim);
                el.style.animationDelay = el.dataset.del;
            }
        });
    });

})();
