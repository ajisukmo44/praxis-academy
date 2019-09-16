 function fun(argument) {
     try {
         if (argument == undefined) {
             throw new Error("Invalid Value");
         }

     } catch (exp) {
         console.log("Error:", exp.messange)

     } finally {
         console.log("Finally executed.");
     }

 }