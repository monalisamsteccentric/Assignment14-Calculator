const buttonKeys=Array.from(document.querySelectorAll('.btn'))
let displayText=document.getElementById('display')

function calculate(buttonkey){
    console.log('this is buttonkey' + buttonkey)
buttonkey.addEventListener('click',function(btn){
    console.log(btn.target.innerText)
    switch(btn.target.innerText){
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
            displayText.innerText= displayText.innerText + btn.target.innerText
            break
    }

})
}



const buttonEevnt = buttonKeys.map(item=>calculate(item))
console.log(buttonEevnt)