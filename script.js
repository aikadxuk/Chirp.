const hamburguer = document.querySelector('.hamburguer')

hamburguer.addEventListener('click', ()=>{
    const navegacao = document.querySelector('.cabecalho-nav')

    if(hamburguer.classList.contains('activeMenu')){
        hamburguer.classList.remove('activeMenu')
        navegacao.style.left = '-100%'
    }else{
        hamburguer.classList.add('activeMenu')
        navegacao.style.left = '0'
    }
})