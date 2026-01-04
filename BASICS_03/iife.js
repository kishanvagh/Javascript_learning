// Immediately Invoked Function Expressions (IIFE)

// IIFE is used to execute code immediately while keeping variables private and avoiding global scope pollution.

(
    function chai(){
        console.log(`DB CONNECTED`)
    }
)();

(
   (name)=>{
        console.log(`DB IS CONNECTED BY ${name}`)
   }
)("kishan")