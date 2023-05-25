function Sheep(){
   for (let i = 0; i < arguments.length; i++){
       if (arguments[i] < 0){
           continue
       }
       else {
           process.stdout.write(`${arguments[i]} sheep...`)
       }
   }
}