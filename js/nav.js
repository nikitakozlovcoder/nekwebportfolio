(function () {
    let expanded = false;

    let toggle = document.querySelector('.toggle-menu');
    let menu = document.querySelector('.links');
    let height = document.querySelector('.links_wrap').offsetHeight;
    toggle.addEventListener('click', function () {
        if (expanded) {
            menu.style.height = 0;
            expanded = false;
            toggle.classList.remove('cross');
            return;
        }
        toggle.classList.add('cross');
        menu.style.height = height+'px';
        expanded = true;
    })

})();