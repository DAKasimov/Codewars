const getFirstSymbols = (value) =>{
    value = value.split(' ')
    let firstName = value[0][0].toUpperCase()
    let secondName = value[1][0].toUpperCase()
    return `${firstName}.${secondName}`
}





