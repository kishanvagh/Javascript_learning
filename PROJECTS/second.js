const weightField=document.getElementById('weight')
const heightField=document.getElementById('height')
const resultField=document.querySelector('#result')
const btnField=document.querySelector('button')
console.log(resultField)
btnField.addEventListener('click',(e)=>{
    const weightInt=Number(weightField.value) //kg 
    const heightInt=Number(heightField.value  )/100  //m
    const temp=(weightInt/(heightInt ** 2))
    const BMI=temp.toFixed(2)
    if (!weight || !height) {
        resultField.innerHTML = `<h1>Please enter valid weight and height</h1>`;
        return;
    }
    else if(BMI <= 18.5){
        resultField.innerHTML=`<h1>Your BMI is ${BMI} and you are UnderWeight</h1>`
    }
    else if(BMI >18.5 && BMI < 24.9){
        resultField.innerHTML=`<h1>Your BMI is ${BMI} and you have Normal weight</h1>`
    }
    else if(BMI >25 && BMI < 29.9){
         resultField.innerHTML=`<h1>Your BMI is ${BMI} and you have  Overweight</h1>`
    }
    else{
        resultField.innerHTML=`<h1>Your BMI is ${BMI} and you have abnormal weight</h1>`
    }
    console.log(`weight is ${weightInt} and height is ${heightInt}`)
})