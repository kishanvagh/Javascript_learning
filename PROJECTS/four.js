const numberField=document.getElementById('numberField')
const btnField=document.getElementById('btnField')
const resultField=document.getElementById('result')
const prevGuess=document.getElementById('prevGuess')
const remGuess=document.getElementById('remGuess')
const randomNumber=Math.floor(Math.random() * (100) + 1)
let prevGuessArr=[]
console.log(resultField)
console.log(randomNumber)
let remCnt=10;
btnField.addEventListener('click',(e)=>{
    const guessedNumber=parseInt(numberField.value)
    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
        resultField.innerHTML = "Please enter a valid number (1–100)";
        numberField.value=''
        return;
    }
    //loss the game
    if(remCnt===1){
       resultField.innerHTML=`you loss the game`
       btnField.disabled = true;
       numberField.value=''
       return ;
    }
    //gaussed correct
    if(guessedNumber === randomNumber){
        resultField.innerHTML=`you guassed correct number`
        btnField.disabled = true;
        numberField.value=''
        return;
    }
    //guessed wrong
    prevGuessArr.push(guessedNumber)    
    remCnt--;
    remGuess.innerText=remCnt
    prevGuess.innerText=prevGuessArr
    resultField.innerHTML=`you guassed wrong  number!! please try again`
    numberField.value=''
    
})

