const close_btn = document.getElementById('toggle')
const navbar = document.getElementById('navbar')



close_btn.addEventListener('click', () => {
    navbar.classList.toggle('show')
    close_btn.classList.toggle('active')
})







