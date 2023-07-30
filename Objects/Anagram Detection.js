function isAnagram(str1, str2){
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()

    str1 = str1.split('')
    str2 = str2.split('')

    str1 = str1.map((item)=>{
        return item.charCodeAt(0)
    })
    str2 = str2.map((item)=>{
        return item.charCodeAt(0)
    })

    let count1 = 0
    let count2 = 0

    str1.forEach((item)=>{
        count1 += item
    })
    str2.forEach((item)=>{
        count2 += item
    })

    if (count1 === count2){
        return true
    }
    else return false
}

console.log(isAnagram('Buckethead','DeathCubeK'))