function func(str){
    let temp = parse(str)
    let result = []
    const obj = {
        'nil': 0,
        'one'  : 1,
        'two' : 2,
        'three' : 3,
        'four' : 4,
        'five' : 5,
        'six' : 6,
        'seven' : 7,
        'eight' : 8,
        'nine' : 9,
    }
    for (let x of temp){
        if (x in obj){
            result.push(obj[x])
        }
    }
    return result
}

function parse(str){
    let res = []
    let digits = ['nil','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    str = str.split(' ')
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < digits.length; j++){
            if (str[i] === digits[j]){
                res.push(str[i])
            }
        }
    }
    return res
}

console.log(func('Arsenal just conceded another goal, two nil'))