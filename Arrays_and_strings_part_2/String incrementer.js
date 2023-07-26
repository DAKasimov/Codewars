function stringIncrementer(str){
    let temp = '0123456789'
    let d
    let t = ''
    let flag = false
    for (let i = 0; i < str.length; i++){
        if (temp.includes(str[i])){
            d = parsing(str)
            flag = true
            break
        }
    }
    for (let i = 0; i < str.length; i++){
        if (temp.includes(str[i]) === false){
            t += str[i]
        }
    }
    if (flag === true) {
        d = Number(d)
        d++
        t += d
    }
    else {
        t += 1
    }
    console.log(t)
}

stringIncrementer('vmdsjm')

function parsing(str){
    let digits = '0123456789'
    let res = ''
    for (let i = 0; i < str.length; i++){
        if (digits.includes(str[i])){
            res += str[i]
        }
    }
    return res
}

