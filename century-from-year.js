const getCentury = (year) =>{
    let flag = false
    if (year % 10 !== 0){
        flag = true
    }
    else if (year % 100 !== 0){
        flag = true
    }
    let century = Math.floor(year / 100)
    if (flag === true){
        century += 1
    }
    return century
}


