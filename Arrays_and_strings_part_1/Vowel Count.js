function getSymbols(str){
    str = str.split('')
    let count = 0
    str.forEach((item)=>{
        if ( item === 'e' || item === 'y' || item === 'u' || item === 'i' || item === 'o' || item === 'a'){
            count++
        }
    })
    return count
}



