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

        scripts()
    }
     
})

document.querySelectorAll('[all-nav]').forEach(link => {
    link.onclick = function(e){
        e.preventDefault()

        const container = document.querySelector('body')
        
        fetch(link).then(function(response){
            if(response.ok){
                link.getAttribute('all-nav')
                    .then(resp => resp.text())
                    .then(html => container.innerHTML = html) 
            }else{
                console.log('Sucesso na conexão')
            }
        })
            

    }
});

const scripts = function(){
    document.querySelectorAll('.clients').forEach(function(client){
        client.onclick = function(){
            let img = client.querySelector('img')
            img.classList.toggle('noPreview')
            let txtP = client.querySelector('div')
                txtP.classList.toggle('previewText')
        }  
    })
}
