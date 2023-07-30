function func(str) {
    const obj = {}
    str = str.toLowerCase()
    let res = ''
    str = str.split('')
    for (let i = 0; i < str.length; i++){
        if (str[i] in obj){
            obj[str[i]] += 1
        }
        else {
            obj[str[i]] = 1
        }
    }
    for (let i = 0; i < str.length; i++){
        if (str[i] in obj){
            if (obj[str[i]] === 1){
                res += '('
            }
            else {
                res += ')'
            }
        }
    }
    console.log(res)
}
func('Success')