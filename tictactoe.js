$(document).ready(function(){
  var winArr = [ //array of all the winning combinations
 ["#0-0", "#1-0", "#2-0"], // top row
 ["#0-1", "#1-1", "#2-1"], // middle row
 ["#0-2", "#1-2", "#2-2"], // bottom row
 ["#0-0", "#0-1", "#0-2"], // left column
 ["#1-0", "#1-1", "#1-2"], // middle column
 ["#2-0", "#2-1", "#2-2"], // right column
 ["#0-0", "#1-1", "#2-2"], // back slash
 ["#0-2", "#1-1", "#2-0"] // forward slash
]
function elementContains(id, mark) {
  return $(id).text() === mark
}
 
// to be run after each turn. checks whether a given mark ('X'/'O') populates all three spots in any given win combination
function playerWon(mark) {
  for (var idx = 0; idx < winArr.length; idx++) { // for every win combination
    var winCombo = winArr[idx]
    var won = winCombo.every(id => elementContains(id, mark)) // check if elementContains returns true for every id
    if (won) return true
  }
  return false // if we got here, it means no winning combination was found and we can safely return false
}
  $(".cell").on("click", markCell) ;
  
  
  let MARK = "X" //the first value of MARK
  let COUNTER = 0
  
  function markCell(){
   if (this.innerText === ""){
   this.innerText = MARK
   COUNTER = COUNTER + 1
   if(playerWon(MARK)){
     console.log(MARK + " WON THE GAME!")
   } else if (COUNTER ===9){
     console.log("tie game!")
   }
  
    if (MARK=="X"){
      MARK="O"
      
    }
    else {
      MARK = "X"
    }
    
    
  }
  }
  
function resetGame(){
  COUNTER=0
  MARK = "X"
  $(".cell")
}
})


