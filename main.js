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


//FONT-FAMILY
const option = document.getElementById('option');

option.addEventListener('change', () => {
    topText.style.fontFamily = `${option.value}`;
    bottonText.style.fontFamily = `${option.value}`;
});

//FONT-SIZE
const size = document.getElementById('size');

size.addEventListener('keyup', () =>{
    topText.style.fontSize = `${size.value}px`;
})
size.addEventListener('click', () =>{
    topText.style.fontSize = `${size.value}px`;
})
size.addEventListener('keyup', () =>{
    bottonText.style.fontSize = `${size.value}px`;
})
size.addEventListener('click', () =>{
    bottonText.style.fontSize = `${size.value}px`;
})

//ALIGN

const buttonLeft = document.getElementById('buttonLeft');
const buttonCenter = document.getElementById('buttonCenter');
const buttonRight = document.getElementById('buttonRight');

buttonLeft.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target)
    
    topText.style.textAlign = 'left'
    bottonText.style.textAlign = 'left'
})

buttonCenter.addEventListener('click', (e) => {
    e.preventDefault();
    bottonText.style.textAlign = 'center'
    topText.style.textAlign = 'center'
})

buttonRight.addEventListener('click', (e) => {
    console.log(e.target)
    e.preventDefault();
    bottonText.style.textAlign = 'right'
    topText.style.textAlign = 'right'
})


/*/////////////////////////////////////////////////////
FORMULARIO DE IMAGEN
////////////////////////////////////////////////////*/



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

const brillo = document.getElementById('brillo');
const opacidad = document.getElementById('opacidad');
const contraste = document.getElementById('contraste'); 
const desenfoque = document.getElementById('desenfoque');
const escala = document.getElementById('escala');
const sepia = document.getElementById('sepia');
const hue = document.getElementById('hue');
const saturado = document.getElementById('saturado');
const negativo = document.getElementById('negativo');
const botonReset = document.getElementById('boton-reset');

const filtro = () => {
    imgMeme.style.filter = `brightness(${brillo.value}) opacity(${opacidad.value}) contrast(${contraste.value}%) blur(${desenfoque.value}px) grayscale(${escala.value}%) sepia(${sepia.value}%) hue-rotate(${hue.value}deg) saturate(${saturado.value}%) invert(${negativo.value})` 
};

botonReset.addEventListener('click', (e) => {
    e.preventDefault()
    brillo.value = 1;
    opacidad.value = 1;
    contraste.value = 100;
    desenfoque.value = 0;
    escala.value = 0;
    sepia.value = 0;
    hue.value = 0;
    saturado.value = 100;
    negativo.value = 0;
    filtro();
})

brillo.addEventListener('change', filtro);

opacidad.addEventListener('change', filtro);

contraste.addEventListener('change', filtro);

desenfoque.addEventListener('change', filtro);

escala.addEventListener('change', filtro);

sepia.addEventListener('change', filtro);

hue.addEventListener('change', filtro);

saturado.addEventListener('change', filtro);

negativo.addEventListener('change', filtro);





/*
const jonh = 'El mejor profe del mundo';
const teQuieroMucho = () => {
    console.log('Muchas Gracias')};
console.log(`Para ${jonh}: Vos me motivas 
            a dar lo mejor de mi`);
while(true) teQuieroMucho()          //Naty
*/
