function insert_dash(num){
    try {
        if (num < 0){
            throw new Error()
        }
        let res = ''
        let temp = 2
        num = String(num)
        num = num.split('')
        for (let i = 0; i < num.length; i++) {
            if (Number(num[i]) % 2 !== 0) {
                if (temp !== 0) {
                    res += num[i]
                    temp--
                } else {
                    res += '-' + num[i] + '-'
                    temp += 1
                }
            } else {
                res += num[i]
            }
        }
        return res
    }
    catch (e){
        console.log('Значение должно быть больше 0')
    }

}