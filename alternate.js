displayText = document.getElementById('display')

function calculate(btnkey){

switch(displayText.innerText){
    case 'C':
          displayText.innerText=''
          break
        case '←':
            displayText.innerText=displayText.innerText.slice(0,-1)
            break
      case '=': 
      try{
          displayText.innerText=eval(displayText.innerText) 
      }
      catch{
          displayText.innerText='Error'
      }
      
      break
      default:
        displayText.innerText = displayText.innerText + btnkey
          break   
}
}

calculate()