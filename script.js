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
    let main = document.querySelector('main')
    let inputValue = document.getElementById('send')
    let text = inputValue.value    
    let panel = document.querySelector('.panel')
    let boxes = document.getElementsByClassName("exemplos")
    

  
    for(let i = 0 ; i < boxes.length ; i++){
        boxes[i].innerHTML = '';
        boxes[i].innerHTML = `${text}`;
     }

    if(filterHand.checked == true) {
        for (let a = 0 ; a < trad.length ; a++){
           trad[a].style.display ="none"}
        for (let b = 0 ; b < goth.length ; b++){
           goth[b].style.display ="none"}
        for (let c = 0 ; c < free.length ; c++){
           free[c].style.display ="none"}
        for (let d = 0 ; d < type.length ; d++){
           type[d].style.display ="none"}
    }
    if(filterTrad.checked == true) {
        for (let a = 0 ; a < hand.length ; a++){
           hand[a].style.display ="none"}
        for (let b = 0 ; b < goth.length ; b++){
           goth[b].style.display ="none"}
        for (let c = 0 ; c < free.length ; c++){
           free[c].style.display ="none"}
        for (let d = 0 ; d < type.length ; d++){
           type[d].style.display ="none"}
    }
    if(filterGoth.checked == true) {
        for (let a = 0 ; a < hand.length ; a++){
           hand[a].style.display ="none"}
        for (let b = 0 ; b < trad.length ; b++){
           trad[b].style.display ="none"}
        for (let c = 0 ; c < free.length ; c++){
           free[c].style.display ="none"}
        for (let d = 0 ; d < type.length ; d++){
           type[d].style.display ="none"}
    }
    if(filterFree.checked == true) {
        for (let a = 0 ; a < hand.length ; a++){
           hand[a].style.display ="none"}
        for (let b = 0 ; b < trad.length ; b++){
           trad[b].style.display ="none"}
        for (let c = 0 ; c < goth.length ; c++){
           goth[c].style.display ="none"}
        for (let d = 0 ; d < type.length ; d++){
           type[d].style.display ="none"}
    }
    if(filterType.checked == true) {
        for (let a = 0 ; a < hand.length ; a++){
           hand[a].style.display ="none"}
        for (let b = 0 ; b < trad.length ; b++){
           trad[b].style.display ="none"}
        for (let c = 0 ; c < goth.length ; c++){
           goth[c].style.display ="none"}
        for (let d = 0 ; d < free.length ; d++){
           free[d].style.display ="none"}
    }

    if(filterCustom.checked == true){
console.log(panel)
    }
}


    /*
    if(filterGoth.checked == true) {
        for (let b = 0 ; b < goth.length ; b++){
            goth[b].style.display ="none"
        }}
    if(filterTrad.checked == true) {
        for (let c = 0 ; c < trad.length ; c++){
            trad[c].style.display ="none"
        }}
    if(filterFree.checked == true) {
        for (let d = 0 ; d < trad.length ; d++){
            trad[c].style.display ="none"
        }}
        
        */