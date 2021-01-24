const close_btn = document.getElementById('toggle')
const navbar = document.getElementById('navbar')
const logo = document.getElementById('logo')


close_btn.addEventListener('click', () => {
    navbar.classList.toggle('show')
    position()


})


toggle.addEventListener('click', () => {
    close_btn.classList.toggle('active')
})

close_btn.addEventListener('click', () => {
    logo.style.position = 'fixed'
})


close_btn.addEventListener('click', () => {
    close_btn.style.position = 'fixed'
    close_btn.style.zIndex = '1'
})