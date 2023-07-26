function deleteDigit(n){
    n = String(n)
    n = n.split('')
    n = n.map((item)=>{
        return Number(item)
    })
    let m = n[0]
    let temp = ''
    for (let i = 0; i < n.length; i++){
        for (let j = 0; j < n.length; j++){
            if (i === j){
                continue
            }
            else{
                temp += n[j]
            }
        }
        temp = Number(temp)
        if (temp > m){
            m = temp
        }
        temp = ''
    }
    console.log(m)
}

deleteDigit(1001)