function expandedForm(value){
    let str_value = String(value)
    str_value = str_value.split('')
    str_value.reverse()
    let temp = 1
    for (let i = 0; i < str_value.length; i++){
        str_value[i] *= temp
        temp *= 10
    }
    str_value = str_value.filter((item)=>item !== 0)

    str_value.reverse()
    let res_str = ''
    for (let x of str_value){
        res_str += x + '+'
    }
    
    console.log(res_str)
}

expandedForm(11111)