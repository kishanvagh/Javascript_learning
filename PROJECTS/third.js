 const clock=document.querySelector('.clock')
 console.log(clock)
setInterval(function(){
   const time=new Date()
   clock.innerHTML=time.toLocaleTimeString();
},1000)    // every 1 sec function will execute