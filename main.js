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
        
        fetch(link).then(function(response){
            if(response.ok){
                link.getAttribute('all-nav')
                    .then(resp => resp.text())
                    .then(html => container.innerHTML = html)
                scripts()  
            }else{
                console.log('Sucesso na conexão')
            }
        })
            

    }
});


const scripts = function(){
    let img = document.querySelectorAll('.clients img').forEach(function(img){
        img.onclick = function(){
            img.classList.toggle('noPreview')
            let txtP = document.querySelectorAll('.clients .p-tx').forEach(function(txtP){
                txtP.classList.toggle('previewText')
            })    
        }  
    })
}

let myImage = document.querySelector('.img-bx img');

fetch('MoveLike oficial.jpg').then(function(response){
    if(response.ok){
        response.blob().then(function(myBlob){
            let objectURL = URL.createObjectURL(myBlob)
            myImage.src = objectURL
        })
    }else{
        console.log('Network response was not ok')
    }
}).catch(function(error){
    console.log('There has been a problem with your fetch operation: ' + error.message)
})