const addBtn = document.querySelector('#add')
const body = document.querySelector('body')
const section = document.querySelector('#container')
const p = document.querySelector('p')


// function addElement () {
//     var newDiv = document.createElement("p");
//     // et lui donne un peu de contenu
//     var newContent = document.createTextNode('Savais tu que tu pouvais écrire et sauvegarder ton contenu dans le navigateur');
//     // ajoute le nœud texte au nouveau div créé
//     newDiv.appendChild(newContent);
//     newDiv.contenteditable = 'true'
  
//     // ajoute le nouvel élément créé et son contenu dans le DOM
//     p.insertAdjacentElement('beforebegin', newDiv)
//   }
addBtn.addEventListener('click', () => {
    // p.insertAdjacentElement('beforebegin', p.cloneNode(true))
    section.append(p.cloneNode(true))
    saveContent('contenu', section.innerHTML)
})    

body.addEventListener('keyup', ()=> {
    saveContent('contenu', section.innerHTML)
})

function saveContent(key, contenu) {
    localStorage.setItem(key, contenu)
}
function loadContent (key){

    return localStorage.getItem(key)
 
}

const styleBtn = document.querySelector('header button')

styleBtn.addEventListener('click', () => {
    document.querySelector('header div').classList.toggle('show')
})

function cssinerRender(cssinerUsed){
    let cssiner = document.createElement('style');
    cssiner.type = 'text/css';
    cssiner.textContent = cssinerUsed 
    cssiner.id = 'style'
  
     document
     .getElementsByTagName("head")[0]
     .appendChild(cssiner);
}

const html = document.querySelector('#html')
const css = document.querySelector('#css')
const styleBalise = document.getElementsByTagName('style')

html.addEventListener('keyup', () => {
    console.log('html',html.value);
    section.innerHTML = html.value
})
css.addEventListener('keyup', () => {
    console.log('css',css.value);
    console.log('style',styleBalise);
    // if(styleBalise) {
    //     styleBalise.textContent = css.value
    //     return
    // } 
    saveContent('style', css.value)
    cssinerRender(css.value)
    
})

window.onload = () => {
    if(!localStorage.getItem('contenu')) {return}
    section.innerHTML = loadContent('contenu')
    html.innerHTML = section.innerHTML;
    // css.innerHTML = styleBalise.innerHTML;
    css.innerHTML = loadContent('style')
    cssinerRender(loadContent('style'))
}