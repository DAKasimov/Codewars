function pluck(array, value){
    let res = []
   for (let i = 0; i < array.length; i++){
       for (let x in array[i]){
           if (x === value){
               res.push(array[i][x])
           }
       }
   }
    console.log(res)
}

pluck([{a:1, b:3}, {a:2}], 'b')