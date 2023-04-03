const btnConvert = document.getElementById('btnConvert')
const btnReset = document.getElementById('btnReset')
const btnCopy = document.getElementById('btnCopy')
const output = document.getElementById('output')
const replaceSpaces = document.getElementById('replaceSpaces')
const replaceLineBreak = document.getElementById('replaceLineBreak')

function convert() {
    let input = document.getElementById('htmlInput').value
    
    input = input.replaceAll("<", "&lt;")
    input = input.replaceAll(">","&gt;")
    
    if(replaceSpaces.checked === true){
        input = input.replaceAll(" ", "&nbsp")
    }
    if(replaceLineBreak.checked === true){  
        input = input.replaceAll(/(?:\r\n|\r|\n)/g,"<br>")
    }
    
    output.value = input
}

function copyCode(){
    navigator.clipboard.writeText(document.getElementById('output').value);
}

function reset(){
    document.getElementById('htmlInput').value = ""
    document.getElementById('output').value = ""
}

// Events
btnConvert.addEventListener("click", convert)
btnCopy.addEventListener("click", copyCode)
btnReset.addEventListener("click", reset)