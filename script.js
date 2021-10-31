document.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
    getText()
    }
})

function getText(){
let inputValue = document.getElementById('send')
let text = inputValue.value    
let panel = document.querySelector('.panel')
let boxes = document.getElementsByClassName("exemplos")
console.log(boxes.length)
for(let i = 0 ; i < boxes.length ; i++){
    boxes[i].innerHTML = '';
    boxes[i].innerHTML = `${text}`;
}

}