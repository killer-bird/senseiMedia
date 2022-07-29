export function isWebp(callback) {
    const webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    isWebp(function (support) {
    
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

export function roll() {
    const links = document.querySelectorAll('a[data-goto]')
    const burgerIcon = document.querySelector('.burger__icon')
    const burgerBody = document.querySelector('.burger__body')
    console.log(links);
    if(links.length) {
        links.forEach(link => {
            link.addEventListener('pointerdown', onMenulink)
        })
    }

    function  onMenulink(e) {
        e.preventDefault()
        console.log(e);
        const menuLink = e.target
        if(burgerIcon.classList.contains("burger__icon_active")){
            document.body.classList.toggle('_lock')
            burgerBody.classList.toggle('burger__body_active')
            burgerIcon.classList.toggle('burger__icon_active')
        }
        if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const goToBlock = document.querySelector(menuLink.dataset.goto)
            const goToValue = goToBlock.getBoundingClientRect().top + pageYOffset 
        
            window.scrollTo({
                top: goToValue,
                behavior: "smooth"
            })
        
        }
    }
}