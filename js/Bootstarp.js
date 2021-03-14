let typedBefore = false;
function detectmob() {
    if( navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ){
        return true;
    }
    else {
        return false;
    }
}
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
    }

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
        elements.forEach((el) => {
            if (getOffset(el) < window.pageYOffset + document.documentElement.clientHeight-50) {
                el.style.opacity = 1;
                if (el.classList.contains('anim_type')) {
                    type();
                }
                else {

                    el.classList.add('animated');
                    el.classList.add(el.dataset.anim);
                    el.style.animationDelay = el.dataset.del;
                }
            }
        });
    });

})();

(function () {
    let slider_inner = document.querySelector('.slider_inner');
    let slider_show = document.querySelector('.slider_show');
    let content = document.querySelectorAll('.slider_content');
    let counter = document.querySelector('.fade_num');
    let slider = document.querySelector('.steps_col-slider');
    let slideNum = 0;
    let isSetTimeout = false;
    function setWidth() {

        console.log(slider_show.offsetWidth);
        content.forEach((element) => {
            element.style.width = slider_show.offsetWidth + 'px';
        });
        slide(slideNum-1);
    }
    setWidth();
    window.addEventListener('resize', setWidth);

    function slide(i) {
        if (i+1 >= 3) {
            i = 0;
        }
        else {
            i++;
        }
        slideNum = i;
        counter.innerHTML = '0'+(i+1);
        slider_inner.style.transform = `translateX(-${slider_show.offsetWidth * i}px)`;
        repaintDot(i);
    }

    function repaintDot(dotIndex) {
        document.querySelectorAll('.slider-dot').forEach((element, i) => {
            element.classList.remove('slider-dot-active');
            if (dotIndex === i) element.classList.add('slider-dot-active');
        });
    }

    document.querySelectorAll('.slider-dot').forEach((element, i) => {

        element.onclick = () => {
            clearInterval(interval);
            repaintDot(i);
            slide(i-1);

        };
    });
    function intervalFunc() {
        slide(slideNum);
    }
    if (!detectmob()) {
        let interval = setInterval(intervalFunc, 3000);
        slider.onmouseover = function () {
            clearInterval(interval);
        };

        slider.onmouseleave = function () {
            if (isSetTimeout) return;
            isSetTimeout = true;
            setTimeout(() => {
                isSetTimeout = false;
                interval = setInterval(intervalFunc, 3000);
            }, 1000);
        }
    }
})();
function type() {
   if (typedBefore) return;
   typedBefore = true;
   let elem = document.querySelector('.anim_type');
   let input =  document.querySelector('.anim_type_input');
   elem.dataset.type.split('').forEach((letter, i) => {
       setTimeout(() => input.innerHTML += letter,150*i);
   });

}
(function () {
    //let xhr = new XMLHttpRequest();
    //xhr.open("POST", './mailer/mailer.php', true);
   // xhr.send();
    let name =document.querySelector('.input_name');
    let mail =document.querySelector('.input_mail');
    let tel =document.querySelector('.input_tel');
    let text =document.querySelector('.input_text');
    let form = document.querySelector('.contact_form');

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        let formData = new FormData();
        let xhr = new XMLHttpRequest();
        formData.append('name', name.value);
        formData.append('mail', mail.value);
        formData.append('tel', tel.value);
        formData.append('text', text.value);
        Array.prototype.forEach.call( e.target.elements, el => {
            console.log(el);
            el.value = '';
        });
        xhr.open("POST", './mailer/mailer.php', true);
        xhr.onreadystatechange = function() {
            if (this.readyState !== 4) return;

            console.log(this.responseText)
        };
        xhr.send(formData);
    });
})();
