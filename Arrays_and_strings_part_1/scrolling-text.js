function scrollingText(str){
    let len_str = str.length
    let res = []
    for (let i = 0; i < str.length; i++){
        let tempSymbol = str[0]
        str = str.replace(str[0],'')
        str += tempSymbol
        len_str--
        res.push(str)
    }
    return res
}

console.log(scrollingText('codewars'))

