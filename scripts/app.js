function doHeaderShadow() {
    const header = document.querySelector('#header');
    const windowPositionTop = 0;
    let windowScrollPosition = window.scrollY;

    window.addEventListener('scroll', function() {
        windowScrollPosition = window.scrollY;

        if (windowScrollPosition > windowPositionTop) {
            header.classList.add('shadow');
        } else {
            header.classList.remove('shadow');
        }
    });
}

doHeaderShadow();
