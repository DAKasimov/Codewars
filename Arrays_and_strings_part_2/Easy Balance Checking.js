function balance(str){
    str = str.split(' ')
    let res = str.filter((item, index)=>{
        return index % 3 === 0
    })
    let temp = str.filter((item, index, array)=>{
        return index % 3 !== 0
    })

    let temp1 = temp.filter((item,index,array)=>{
        return index % 2 !== 0
    })
    let temp2 = temp.filter((item,index,array)=>{
        return index % 2 === 0
    })

    res = res.map((item)=>{
        return Number(item)
    })

    let s = res.reduce((acc,item)=>{
       return acc + item
    },0)

    console.log(s)

    console.log(temp2)
    console.log(temp1)

    let result = ''
    let k = res[0]
    res.shift()
    console.log(res)
    result += `Original_Balance: ${k}`
    for (let i = 0; i < temp1.length; i++){
        result += temp2[i] + ' ' + temp1[i] + ' ' + res[i] + ` Balance ${k - res[i]} `
        k -= res[i]
    }
    result += `Total expense ${s}`

    console.log(result)


}

balance("1000.00 125 Market 125.45 126 Hardware 34.95 127 Video 7.45 128 Book 14.32 129 Gasoline 16.10")