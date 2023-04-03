const getElement = (id) => document.querySelector(`#${id}`)

const btnConvert = getElement('btnConvert')
const btnReset = getElement('btnReset')
const btnCopy = getElement('btnCopy')
const replaceSpaces = getElement('replaceSpaces')
const replaceLineBreak = getElement('replaceLineBreak')
const htmlInput = getElement('htmlInput')
const output = getElement('output')


function convert() {
    let inputCode = htmlInput.value
    
    inputCode = inputCode.replaceAll('<', '&lt;')
    inputCode = inputCode.replaceAll('>', '&gt;')
    
    if(replaceSpaces.checked){
        inputCode = inputCode.replaceAll(' ', '&nbsp')
    }
    if(replaceLineBreak.checked){  
        inputCode = inputCode.replaceAll(/(?:\r\n|\r|\n)/g, '<br>')
    }
    
    output.value = inputCode
}

function copyCode(){
    navigator.clipboard.writeText(output.value);
}

function reset(){
    htmlInput.value = ''
    output.value = ''
}

// Events
btnConvert.addEventListener('click', convert)
btnCopy.addEventListener('click', copyCode)
btnReset.addEventListener('click', reset)
