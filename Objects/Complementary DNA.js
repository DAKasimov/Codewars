function func(str){
    const obj = {
        'A' : 'T',
        'T' : 'A',
        'C' : 'G',
        'G' : 'C'
    }
    let res = []
    str = str.split('')
    for (let x of str){
        if (x in obj){
            res.push(obj[x])
        }
    }
    return res.join('')
}

