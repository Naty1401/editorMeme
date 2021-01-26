const listaImagen = document.getElementById('lista-imagen');
const formTexto = document.getElementById('form-texto');
const listaTexto = document.getElementById('lista-texto');
const formImagen = document.getElementById('form-imagen');
const contenedorTexto = document.getElementById('contenedor-texto');

listaTexto.addEventListener('click',()=> {
    formImagen.style.display = 'none'
    contenedorTexto.style.display = 'flex'
})

listaImagen.addEventListener('click', () =>{
    contenedorTexto.style.display = 'none';
    formImagen.style.display = 'flex';
})
/*listaImagen.addEventListener('click',() =>{
    formTexto.classList.add('oculto');
    //formTexto.style.display = 'none';
    //formImagen.classList.add('visible');
})

listaTexto.addEventListener('click',()=>{
    //formImagen.style.display = 'none';
    //formTexto.style.display = '';
    formImagen.classList.add('oculto');
    formTexto.classList.add('visible');
    
})*/

/*const mostrar = ()=> {
    formTexto= document.getElementById('listaTexto');
    formTexto.style.display = '';
}

function cerrar() {
    div = document.getElementById('flotante');
    div.style.display = 'none';
}*/

const topText = document.getElementById('topText');
const topInput = document.getElementById('top-input');

topInput.addEventListener('keyup', () => {
    topText.innerHTML = topInput.value;
})


const topCheck = document.getElementById('top-check');
const imgMeme = document.getElementById('imgMeme');

topCheck.addEventListener('click', () => {
    if(topCheck.checked){
        topText.classList.add('oculto');
        imgMeme.style.height = '60vh';
    }
    else {
        topText.classList.remove('oculto');
        imgMeme.style.height = '50vh'
    }    
    //(topCheck.checked) ? topText.classList.add('oculto') : topText.classList.remove('oculto')
})


const bottonText = document.getElementById('bottonText');
const botImput = document.getElementById('bot-input')

botImput.addEventListener('keyup', ()=> {
    bottonText.innerHTML = botImput.value;
})

const botCheck = document.getElementById('bot-check')

botCheck.addEventListener('click', () => {
    if(botCheck.checked){
        bottonText.classList.add('oculto');
        imgMeme.style.height = '60vh'
    }
    else{
        bottonText.classList.remove('oculto');
        imgMeme.style.height = '50vh';    
    }
})



const option = document.getElementById('option');

option.addEventListener('change', () => {
    topText.style.fontFamily = `${option.value}`;
    bottonText.style.fontFamily = `${option.value}`;
});


const urlImg = document.getElementById('url');
//const imgMeme = document.getElementById('imgMeme');
const alegria = document.getElementById('alegria')

urlImg.addEventListener('keyup', () => {
    const src = urlImg.value;
    // console.log(e.target.value);
    imgMeme.style.backgroundImage = `url('${src}')`;
    imgMeme.style.backgroundSize = 'contain';
    imgMeme.style.backgroundRepeat = 'no-repeat';
    imgMeme.style.backgroundPosition = 'center';
    console.log(src);
    alegria.classList.add('oculto')
})