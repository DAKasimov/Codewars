function func(str){
    str = str.split(' ')
    let res = []
    let temp = {}
    for (let i = 0; i < str.length; i++){
        if (str[i] in temp){
            temp[str[i]] += 1
        }
        else {
            temp[str[i]] = 1
        }
    }
    return Object.keys(temp).join(' ')
}

console.log(func('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))