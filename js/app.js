let btnConvert = document.getElementById('btnConvert')
let btnReset = document.getElementById('btnReset')
let btnCopy = document.getElementById('btnCopy')
let output = document.getElementById('output')
let replaceSpaces = document.getElementById('replaceSpaces')
let replaceLineBreak = document.getElementById('replaceLineBreak')

console.log(replaceSpaces.checked, replaceLineBreak.checked)

// Events
btnConvert.addEventListener("click", convert)
btnCopy.addEventListener("click", copyCode)
btnReset.addEventListener("click", reset)


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
