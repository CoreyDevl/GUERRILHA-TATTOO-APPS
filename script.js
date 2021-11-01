document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
    getText()
    }
})

fetch("fontesGuerrilha.json")
.then(res => res.json())
.then(res => {
   
})  
function getText(){
 
    let inputValue = document.getElementById('send')
    let text = inputValue.value    
    let panel = document.querySelector('.panel')
    let boxes = document.getElementsByClassName("exemplos")
    
  
    for(let i = 0 ; i < boxes.length ; i++){
        boxes[i].innerHTML = '';
        boxes[i].innerHTML = `${text}`;

    } 
}