const listaImagen = document.getElementById('lista-imagen'); //Encabezado imagen
const formTexto = document.getElementById('form-texto'); //forulario texto
const listaTexto = document.getElementById('lista-texto'); //Encabezado texto
const formImagen = document.getElementById('form-imagen'); //formulario imagen
const contenedorTexto = document.getElementById('contenedor-texto'); //borrar
const claroOscuro = document.getElementById('claroOscuro') //Encabezado modo oscuro
const aside = document.getElementById('aside')

const responsive = () => {
    (window.screen.width <= 700) ? aside.classList.toggle('responsive') : aside.classList.remove('responsive');
}

listaTexto.addEventListener('click',()=> {
    formImagen.style.display = 'none'
    formTexto.style.display = 'block'
    responsive();
})

listaImagen.addEventListener('click', () =>{
    formImagen.style.display = 'flex';
    formTexto.style.display = 'none'
    responsive();
})

//////////////////////////  ^^^^^^^^^^^^^^^^  \\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////<<<<<<<<<<   FORMULARIO TEXTO  >>>>>>>>>>\\\\\\\\\\\\\\\\\
//////////////////////////  ****************  \\\\\\\\\\\\\\\\\\\\\\\\\\\

const topText = document.getElementById('topText'); //p dentro del article superior
const topInput = document.getElementById('top-input'); //textarea superior
const topCheck = document.getElementById('top-check'); //sin texto superior
const imgMeme = document.getElementById('imgMeme');
const bottonText = document.getElementById('bottonText'); //p dentro del article inferior
const botImput = document.getElementById('bot-input') //textarea inferior
const botCheck = document.getElementById('bot-check') //sin texto inferior

topInput.addEventListener('keyup', () => {
    topText.innerHTML = topInput.value;
})

botImput.addEventListener('keyup', ()=> {
    bottonText.innerHTML = botImput.value;
})

const verificarCheck = () => {
    if(topCheck.checked && botCheck.checked){
        imgMeme.style.height = '70vh'
    }
    else if(topCheck.checked || botCheck.checked){
        imgMeme.style.height = '60vh'
    }    
    else if(!topCheck.checked && !botCheck.checked){
        imgMeme.style.height = '50vh'        
    }
    
}

topCheck.addEventListener('click', () => {
    topText.classList.toggle('oculto');
    verificarCheck()
})

botCheck.addEventListener('click', () => {
    bottonText.classList.toggle('oculto');
    verificarCheck();
})

////////////////////////////////////////////////////////////////////////////////////////Font-Family

const option = document.getElementById('option');

option.addEventListener('change', () => {
    topText.style.fontFamily = `${option.value}`;
    bottonText.style.fontFamily = `${option.value}`;
});

//////////////////////////////////////////////////////////////////////////////////////////Font-Size

const size = document.getElementById('size');

size.addEventListener('keyup', () =>{
    topText.style.fontSize = `${size.value}px`;
    bottonText.style.fontSize = `${size.value}px`;
})
size.addEventListener('click', () =>{
    topText.style.fontSize = `${size.value}px`;
    bottonText.style.fontSize = `${size.value}px`;
})

/////////////////////////////////////////////////////////////////////////////////////////////Align

const buttonLeft = document.getElementById('buttonLeft');
const buttonCenter = document.getElementById('buttonCenter');
const buttonRight = document.getElementById('buttonRight');

const alinearTexto = (sentido) => {    
    bottonText.style.textAlign = sentido
    topText.style.textAlign = sentido
}

buttonLeft.addEventListener('click', (e) =>{
    e.preventDefault();
    alinearTexto('left');
})

buttonCenter.addEventListener('click', (e) => {
    e.preventDefault();
    alinearTexto('center');
})

buttonRight.addEventListener('click', (e) => {
    e.preventDefault();
    alinearTexto('right')
})

////////////////////////////////////////////////////////////////////////////////////////////Colores

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
/////////////////////////////////////////////////////////////////////////////////Fondo transparente

transparente.addEventListener('click', () => {
    imgMeme.classList.toggle('imgMemeTransparente')
    if(transparente.checked){
        bottonText.style.backgroundColor = 'transparent';
        bottonText.style.zIndex = '2'
        topText.style.backgroundColor = 'transparent';
        topText.style.zIndex = '2';
        topText.style.marginBottom = '50vh'
    }
    else {
        bottonText.style.backgroundColor = fondo.value;
        topText.style.backgroundColor = fondo.value;
        topText.style.marginBottom = '0'
    }

})

/////////////////////////////////////////////////////////////////////////////////////////Contornos

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


//////////////////////////////////////////////////////////////////////////espaciado e interlineado

const espaciado = document.getElementById('espaciado');
const interlineado = document.getElementById('interlineado');

espaciado.addEventListener('change', (e) => {
    const espaciadoIngresado = e.target.value;
    topText.style.letterSpacing = `${espaciadoIngresado}px`;
    bottonText.style.letterSpacing = `${espaciadoIngresado}px`;
})

interlineado.addEventListener('change', () => {
    topText.style.lineHeight = interlineado.value;
    bottonText.style.lineHeight = interlineado.value;
})

//////////////////////////  ^^^^^^^^^^^^^^^^^  \\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////<<<<<<<<<<   FORMULARIO IMAGEN  >>>>>>>>>>\\\\\\\\\\\\\\\\\
//////////////////////////  *****************  \\\\\\\\\\\\\\\\\\\\\\\\\\\


const urlImg = document.getElementById('url');
const texto = document.getElementById('alegria');

urlImg.addEventListener('keyup', () => {
    const src = urlImg.value;  
    imgMeme.style.backgroundImage = `url('${src}')`;
    imgMeme.classList.add('imgMemeForm');
})

const fondoImgMeme = document.getElementById('fondo-imgMeme');
const efecto = document.getElementById('efecto');
const container = document.getElementById('container'); //seccion que contiene a los articles

fondoImgMeme.addEventListener('input', (e) => {
    const colorDeFondo = e.target.value;
    imgMeme.style.backgroundColor = colorDeFondo;
})

efecto.addEventListener('change', () => {
    imgMeme.style.backgroundBlendMode = efecto.value;
})

///////////////////////////////////////////////////////////////////////////////////////////Filtros

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

brillo.addEventListener('change', filtro);
opacidad.addEventListener('change', filtro);
contraste.addEventListener('change', filtro);
desenfoque.addEventListener('change', filtro);
escala.addEventListener('change', filtro);
sepia.addEventListener('change', filtro);
hue.addEventListener('change', filtro);
saturado.addEventListener('change', filtro);
negativo.addEventListener('change', filtro);

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


/////////////////////////////////////////////////////////////////////////////////Modo claro/oscuro

function modoOscuro(){
    document.documentElement.style.setProperty('--amarillo', '#1D263F');
    document.documentElement.style.setProperty('--anaranjado', '#30343F');
    document.documentElement.style.setProperty('--vino', '#1C293F');
    document.documentElement.style.setProperty('--rosado', '#232A35');
}

function restablecerModo(){
    document.documentElement.style.setProperty('--amarillo', '#FCF3B5');
    document.documentElement.style.setProperty('--anaranjado', '#FBD7B7');
    document.documentElement.style.setProperty('--vino', '#C6ACC7');
    document.documentElement.style.setProperty('--rosado', '#ECB4BF');
}

claroOscuro.addEventListener('click',() => {    
        document.querySelector('#Label1').innerText = 'Modo Claro';
        document.body.classList.toggle('dark');
        if(claroOscuro.checked){
            modoOscuro();
        } 
        else{
            document.querySelector('#Label1').innerText = 'Modo Oscuro';
            restablecerModo();
        } 
    })

    /////////////////////////////////////////////////////////////////////////////botón de descarga
    const download = document.getElementById('download');
    const memeCompleto = document.getElementById('meme-completo');

    download.addEventListener('click', () => {
        descargarImagen();
    })

    const descargarImagen = () => {
        domtoimage.toBlob(memeCompleto)
        .then(function (blob) {
            saveAs(blob, 'meme.png');
        });
    }


// Cruz del aside en resposivo
/*    
const btnMenu = document.getElementById('btn-menu');
btnMenu.addEventListener('click', ()=>{
    // (btnMenu.checked) ? aside.style.display = ('none') : aside.style.display = ('block');
    //aside.style.display = ('none')
    //aside.classList.add('aside')
})*/

