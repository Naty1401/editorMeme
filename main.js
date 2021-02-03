const listaImagen = document.getElementById('lista-imagen');
const formTexto = document.getElementById('form-texto');
const listaTexto = document.getElementById('lista-texto');
const formImagen = document.getElementById('form-imagen');
const contenedorTexto = document.getElementById('contenedor-texto');
const claroOscuro = document.getElementById('claroOscuro')

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

const topText = document.getElementById('topText');
const topInput = document.getElementById('top-input');
const topCheck = document.getElementById('top-check');
const imgMeme = document.getElementById('imgMeme');
const bottonText = document.getElementById('bottonText');
const botImput = document.getElementById('bot-input')
const botCheck = document.getElementById('bot-check')

topInput.addEventListener('keyup', () => {
    topText.innerHTML = topInput.value;
})

topCheck.addEventListener('click', () => {
    topText.classList.toggle('oculto');
    (topCheck.checked) ? imgMeme.style.height = '60vh' : imgMeme.style.height = '50vh';
    
    /*if(topCheck.checked){
        topText.classList.add('oculto');
        imgMeme.style.height = '60vh';
    }
    else {
        topText.classList.remove('oculto');
        imgMeme.style.height = '50vh'
    }      */
    //(topCheck.checked) ? topText.classList.add('oculto') : topText.classList.remove('oculto')
})

botImput.addEventListener('keyup', ()=> {
    bottonText.innerHTML = botImput.value;
})

botCheck.addEventListener('click', () => {
    if(topCheck.checked && botCheck.checked){ //cuando estan los 2 checks seleccioandos 
        bottonText.classList.add('oculto');   //me mantiene el tamaño de imgMeme
        imgMeme.style.height = '70vh'
    }
    else if(botCheck.checked){
        bottonText.classList.add('oculto');
        imgMeme.style.height = '60vh'
    }
    else{
        bottonText.classList.remove('oculto');
        imgMeme.style.height = '50vh';  
  
    }
})

//topCheck.checked && botCheck.checked ? imgMeme.style.height = '70vh'
// {
//     topText.classList.add('oculto');
//     bottonText.classList.add('oculto');
//     imgMeme.style.height = '70vh'
// }


////////////////////////////////////////////////////FONT-FAMILY
const option = document.getElementById('option');

option.addEventListener('change', () => {
    topText.style.fontFamily = `${option.value}`;
    bottonText.style.fontFamily = `${option.value}`;
});

//////////////////////////////////////////////////////FONT-SIZE
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

////////////////////////////////////////////////////////ALIGN

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

//////////////////////////////////////////////////////////////COLORES

const color = document.getElementById('color');
const fondo = document.getElementById('fondo');
const hexColorTexto = document.getElementById('hex-color-texto');
const hexColorFondo = document.getElementById('hex-color-fondo');
const transparente = document.getElementById('transparente');

color.addEventListener('input', (e) => {
    const colorTexto = e.target.value;
    topText.style.color = colorTexto;
    bottonText.style.color = colorTexto;
    hexColorTexto.innerHTML = colorTexto.toUpperCase();
});

fondo.addEventListener('input', (e) => {
    const colorFondo = e.target.value;
    topText.style.backgroundColor = colorFondo;
    bottonText.style.backgroundColor = colorFondo;
    hexColorFondo.innerHTML = colorFondo.toUpperCase();
})

/*transparente.addEventListener('click', () => {
    if(transparente.checked){
        topText.classList.add('oculto');
        bottonText.classList.add('oculto');
        imgMeme.style.height = '70vh';
        
    }
    else {
        topText.classList.remove('oculto');
        bottonText.classList.remove('oculto');
        imgMeme.style.height = '50vh'
    }    

})*/

transparente.addEventListener('click', () => {
    if(transparente.checked){
        imgMeme.style.height = '70vh';
        imgMeme.style.position = 'absolute';
        imgMeme.style.zIndex = '1'
        bottonText.style.backgroundColor = 'transparent';
        bottonText.style.zIndex = '2'
        topText.style.backgroundColor = 'transparent';
        topText.style.zIndex = '2';
        topText.style.marginBottom = '50vh'
    }
    else {

    }
})

/////////////////////////////////////////////////////////Contornos

const contornoNinguno = document.getElementById('contornoNinguno');
const contornoClaro = document.getElementById('contornoClaro');
const contornoOscuro = document.getElementById('contornoOscuro');

contornoNinguno.addEventListener('click', (e) => {
    e.preventDefault();
    topText.classList.remove('stroke');
    bottonText.classList.remove('stroke');
    topText.style.textShadow = 'none'
})

contornoClaro.addEventListener('click', (e) => {
    e.preventDefault();
    topText.classList.remove('stroke');
    bottonText.classList.remove('stroke');
    topText.style.textShadow = '-1px -1px 1px #fff, 1px 1px 1px #fff, -1px 1px 1px #fff, 1px -1px 1px #fff';
    bottonText.style.textShadow = '-1px -1px 1px #fff, 1px 1px 1px #fff, -1px 1px 1px #fff, 1px -1px 1px #fff';
})

contornoOscuro.addEventListener('click', (e) => {
    e.preventDefault();
    topText.style.textShadow = 'none'
    bottonText.style.textShadow = 'none'
    topText.classList.add('stroke')
    bottonText.classList.add('stroke')
})


///////////////////////////////////////////////////////////////////espaciado

const espaciado = document.getElementById('espaciado');
const interlineado = document.getElementById('interlineado');

espaciado.addEventListener('change', (e) => {
    //console.log(e.target.value);
    const espaciadoIngresado = e.target.value;
    topText.style.letterSpacing = `${espaciadoIngresado}px`;
    bottonText.style.letterSpacing = `${espaciadoIngresado}px`;
})

interlineado.addEventListener('change', () => {
    topText.style.lineHeight = interlineado.value;
    bottonText.style.lineHeight = interlineado.value;
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
    imgMeme.style.backgroundSize = 'cover';
    imgMeme.style.backgroundRepeat = 'no-repeat';
    imgMeme.style.backgroundPosition = 'center';
    console.log(src);
    alegria.classList.add('oculto')
})

const fondoImgMeme = document.getElementById('fondo-imgMeme');
const efecto = document.getElementById('efecto');
const container = document.getElementById('container');

fondoImgMeme.addEventListener('input', (e) => {
    const colorDeFondo = e.target.value;
    imgMeme.style.backgroundColor = colorDeFondo;
})

efecto.addEventListener('change', () => {
    imgMeme.style.backgroundBlendMode = efecto.value;
})

//mixBlendMode = efecto.value


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

claroOscuro.addEventListener('click',() => {    
    //cambiarModo.innerHTML = 'Modo Claro'
    document.body.classList.toggle('dark');
    if(claroOscuro.checked){ 
    document.getElementsByClassName("container")[0].style.backgroundColor = '#192536';
    document.getElementById("header").style.backgroundColor = "#1C293F";
    document.getElementById("footer").style.backgroundColor = "#52517C";
    document.getElementById("aside").style.backgroundColor = "#232A35";
    document.getElementById('topText').style.backgroundColor = '#1D263F';
    document.getElementById('bottonText').style.backgroundColor = '#1D263F';
    document.getElementById('imgMeme').style.backgroundColor = '#000';
    }else{
        location.reload() //tengo que buscar otra solucion
    }
})




/*
const jonh = 'El mejor profe del mundo';
const teQuieroMucho = () => {
    console.log('Muchas Gracias')};
console.log(`Para ${jonh}: Vos me motivas 
            a dar lo mejor de mi`);
while(true) teQuieroMucho()          //Naty
*/
