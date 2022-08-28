let menu = document.querySelector('nav ul');
let menuBar = document.querySelector('nav .menu-icon');
let iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click', function(){
    if(iconMenu.getAttribute("src") == 'img/menu.png'){
        iconMenu.setAttribute("src", "img/close.png");
    }else{
        iconMenu.setAttribute("src", "img/menu.png");
    }

    menu.classList.toggle('active');
});