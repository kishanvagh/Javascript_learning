const buttons=document.querySelectorAll('.divs')
const body=document.querySelector('body')
buttons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        console.log(e)
        console.log(e.target)
        console.log(e.target.id)  //color    
        console.log(e.target.className)  //divs     (e.target gives an gives an HTML element on that event is performed)
        body.style.backgroundColor=e.target.id
    })
})