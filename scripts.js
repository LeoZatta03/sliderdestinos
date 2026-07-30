let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

btnNext.onclick = () => moveItemsOnClick('next')
btnBack.onclick = () => moveItemsOnClick('back')

function moveItemsOnClick(type){
  let listItems = document.querySelectorAll('.list .list-item')
  let thumbItems = document.querySelectorAll('.thumb .thumb-item')

  // Remove animações anteriores caso o usuário clique muito rápido
  container.classList.remove('next', 'back')

  if(type === 'next'){
    list.appendChild(listItems[0])
    thumb.appendChild(thumbItems[0])
    container.classList.add('next')
  } else {
    // CORRIGIDO: listItems no plural
    list.prepend(listItems[listItems.length - 1])
    thumb.prepend(thumbItems[thumbItems.length - 1])
    container.classList.add('back')
  }

  setTimeout(() => {
    container.classList.remove('next')
    container.classList.remove('back')
  }, 1000) // Reduzido para 1s para bater com o tempo das animações CSS
}