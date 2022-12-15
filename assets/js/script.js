const controles = document.querySelector('#controles'),
    cssText = document.querySelector('#css'),
    botao = document.querySelector('#btn');

controles.addEventListener('change', handleChange);

const handleStyle = {
    elemento: botao,

    texto(value){
        this.elemento.innerText = value
    },

    color(value){
        this.elemento.style.color = value;
    },

    backgroundColor(value){
        this.elemento.style.backgroundColor = value;
    },

    height(value){
        this.elemento.style.height = value + 'px';
    },

    width(value){
        this.elemento.style.width = value + 'px';
    },

    border(value){
        this.elemento.style.border = value;
    },

    borderRadius(value){
        this.elemento.style.borderRadius = value + 'px';
    },

    fontFamily(value){
        this.elemento.style.fontFamily = value;
    },

    fontSize(value){
        this.elemento.style.fontSize = value + 'px';
    }
}

function handleChange(event){
    const name = event.target.name;
    const value = event.target.value;

    handleStyle[name](value);
    saveValues(name, value);
    showCss();
}

function saveValues(name, value){
    localStorage[name] = value;
}

function setValues(){
    const properties = Object.keys(localStorage);
    properties.forEach(propertie => {
        handleStyle[propertie](localStorage[propertie]);
        controles.elements[propertie].value = localStorage[propertie];
    })
    showCss();
}

setValues();

function showCss(){
    cssText.innerHTML = '<p>' + botao.style.cssText.split('; ').join('; </p><p>');
}