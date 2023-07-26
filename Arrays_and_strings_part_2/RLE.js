function func(str){
    str = str.split('')
    let res = []
    let result = []
    let count = 0
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < str.length; j++){
            if (str[i] === str[j]){
                count++
            }
        }
        res.push(str[i])
        res.push(count)
        result.push(res)
        res = []
        count = 0
    }
    console.log(result)
}

func('фффффффффффффффффффвоо')




