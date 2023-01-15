const initApp = () => {
    const menu = document.getElementById('menu')
    const menuOpen = document.getElementById('menu-open')

    const toggleMenu = () => {
    menuOpen.classList.toggle('hidden')
    menuOpen.classList.toggle('block')
}

menu.addEventListener('click', toggleMenu)
menuOpen.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)
