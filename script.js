
const xclass ='x'
const circleclass ='circle'
const wincond =[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
const board = document.querySelector('.board')
const message = document.querySelector('[data-winning')
const messageElement = document.querySelector('.winning')
const button = document.querySelector('button')
const cellElements = document.querySelectorAll('[data-cell')
let circleTurn 




start()

button.addEventListener('click', start)

function start (){
  circleTurn = false
  cellElements.forEach((cell)=>{
   cell.addEventListener('click',handleClick,{once:true})
   cell.classList.remove(xclass)
   cell.classList.remove(circleclass)
  //  cell.removeEventListener('click', handleClick )
  })
  setHover()
  messageElement.classList.remove('show')
}

function handleClick(e){
  const cell = e.target 
  const currrent = circleTurn ? circleclass : xclass
  placemark(cell,currrent)
if(checkwin(currrent)){
 endgame(false)
} else if(isdraw()){
  endgame(true)
}else {
  swapTurns()
  setHover()
}
  //check for win
  //check for draw
  
}

function endgame (draw){
  if(draw){
    message.innerText = 'draw';
  }
  else{
    message.innerText=`${circleTurn ? "O's": "X's" } Wins!`
  }
  messageElement.classList.add('show')
}


function isdraw(){
  return [...cellElements].every(cell=>{
    return cell.classList.contains(xclass) || cell.classList.contains(circleclass)
  })
}



placemark=(cell,currrent)=>{
  cell.classList.add(currrent)
}
swapTurns=()=>{
  circleTurn = !circleTurn
}
function setHover (){
board.classList.remove(xclass)
board.classList.remove(circleclass)

if(circleTurn){
  board.classList.add(circleclass)
}else{
  board.classList.add(xclass)
}

}

function checkwin(currrent){
  return wincond.some(combination =>{
    return combination.every(index=>{
      return cellElements[index].classList.contains(currrent)
    })
  })
}



