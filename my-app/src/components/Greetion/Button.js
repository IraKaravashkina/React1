let divs = document.querySelectorAll('.row div')
divs.addEventListener('click',full)
function full(){
    this.innerHTML= Math.random()
}
let elm = document.querySelector('.row div')
let x = parseInt(Math.random()*256)
let y = parseInt(Math.random()*256)
let z = parseInt(Math.random()*256)
let color = `rgb(${x},${y},${z})`
elm.style.color = color
