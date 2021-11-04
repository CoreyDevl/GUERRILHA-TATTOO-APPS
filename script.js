document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
    getText()
    }
})

function getText(){
    let filterHand = document.getElementById('filterHand')
    let filterTrad = document.getElementById('filterTrad')
    let filterGoth = document.getElementById('filterGoth')
    let filterFree = document.getElementById('filterFree')
    let filterType = document.getElementById('filterType')
    let filterCustom = document.getElementById('filterCustom')
    let hand = document.getElementsByClassName('hand')
    let trad = document.getElementsByClassName('trad')
    let goth = document.getElementsByClassName('goth')
    let free = document.getElementsByClassName('free')
    let type = document.getElementsByClassName('type')
 console.log(filterHand)
    let inputValue = document.getElementById('send')
    let text = inputValue.value    
    let panel = document.querySelector('.panel')
    let boxes = document.getElementsByClassName("exemplos")
    

  
    for(let i = 0 ; i < boxes.length ; i++){
        boxes[i].innerHTML = '';
        boxes[i].innerHTML = `${text}`;
    
    }
    filterHand.checked == true ? console.log('checked') : console.log('nao pegou') 
}


function checkMark(){
    const checkers = document.querySelectorAll('input.check')
    
 }