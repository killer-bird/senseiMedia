export const burger = () => {
    const burgerBtn = document.querySelector('.burger__icon')
    const menu = document.querySelector('.burger__body')
    burgerBtn.addEventListener('pointerdown', ()=> {
        burgerBtn.classList.toggle("burger__icon_active")
        menu.classList.toggle("burger__body_active")
        document.body.classList.toggle('_lock')
    })
}