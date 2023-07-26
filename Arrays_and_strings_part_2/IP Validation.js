function isCorrectIP(str){
    str = str.split('.')
    if (str.length !== 4){
        throw 'IP v4 состоит из четырёх символов'
    }
    let flag = false
    str.forEach((item,index,array)=>{
        if (array[index][0] === '0'){
            flag = true
        }
    })
    str = str.map((item)=>{
        return Number(item)
    })
    for ( let i = 0; i < str.length; i++){
        if (str[i] < 0 || str[i] > 255){
            flag = true
            throw 'IP v4 находится в диапазоне от 0 до 255'
        }
    }
    if (flag === false){
        return 'ok'
    }
    else {
        throw 'IP v4 не может начинатся с 0'
    }
}

console.log(isCorrectIP('1.2.3.5'))