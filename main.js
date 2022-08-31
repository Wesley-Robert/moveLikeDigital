// Menu hamburguer
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

// Chamadas
document.querySelectorAll('[wm-nav]').forEach(link => {
    link.onclick = function(e){
        e.preventDefault()

        const main = document.querySelector('main')
        
        fetch(link.getAttribute('wm-nav'))
            .then(resp => resp.text())
            .then(html => main.innerHTML = html)
    }
})

document.querySelectorAll('[all-nav]').forEach(link => {
    link.onclick = function(e){
        e.preventDefault()

        const container = document.querySelector('body')
        
        fetch(link.getAttribute('all-nav'))
            .then(resp => resp.text())
            .then(html => container.innerHTML = html)
    }
});


const scripts = function(){
    document.querySelectorAll('.clients img').forEach(function(img){
        img.onclick = function(){
            img.style.display = 'none';
        }
    })
    document.querySelectorAll('.clients .p-tx').forEach(function(txtP){
        txtP.onclick = function(){
            txtP.style.display = 'flex' //Tem que adicionar a tag aqui não esquece.
        }
    })
}