function getRectangle(n){
    try {
        if (n <= 2 || n >= 30){
            throw new Error('Значение n должно быть в дипазоне от 2 до 30')
        }
        else{
            let res = []
            let str_res = ''
            let n1 = n
            while (n1){
                str_res += '-'
                n1--
            }
            let temp = ''
            let temp_len = str_res.length
            while (temp_len){
                temp += ' '
                temp_len--
            }
            temp = temp.replace(temp[0],'-')
            temp = temp.split('')
            temp[temp.length-1] = '-'
            temp = temp.join('')
            res.push(str_res)
            while (n !==2){
                res.push(temp)
                n--
            }
            res.push(str_res)
            return res
        }
    }
    catch(e){
        return e.message
    }
}

console.log(getRectangle(2))