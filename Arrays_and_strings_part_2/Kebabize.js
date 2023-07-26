function getDownSymbols(str){
    let res = []
    let temp = ''
   for (let i = 0; i < str.length; i++){
       if (str[i] !== str[i].toUpperCase()){
           temp += str[i]
       }
       else {
           res.push(temp)
           temp = ''
           temp += str[i]
       }
   }
    res.push(temp)
    res = res.map((item)=>{
        return item.toLowerCase()
    })
    return res.join('-')
}

console.log(getDownSymbols("camelsHaveThreeHumps"))

