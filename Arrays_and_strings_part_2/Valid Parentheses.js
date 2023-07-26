function isCorrect(str){
    let flag = false
    if (str[0] === ')'){
        return 'ne ok'
    }
    else{
        let otkr = 0
        let zakr = 0
        for (let i = 0; i < str.length; i++){
            if (str[i] === '('){
                otkr++
            }
            else {
                zakr++
            }
        }
        if (otkr !== zakr){
            return 'ne ok'
        }
        for (let i = 0; i < Math.floor(str.length/2); i++){
            if (str[i] === str[str.length-1-i]){
                flag = true
            }
            else{
                flag = false
                break
            }
        }
        if (flag === true){
            return 'ok'
        }
        else {
            return 'ne ok'
        }
    }
}

console.log(isCorrect('()'))