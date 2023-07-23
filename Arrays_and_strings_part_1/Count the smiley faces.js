function countSmileys(arr){
    let count = 0
    if (arr.length === 0){
        return 0
    }
    arr.forEach((item)=>{
        if (item === ':)' || item === ':~)' || item === ':D' || item === ';-D' || item === ':-D'){
            count++
        }
    })
    return count
}

console.log(countSmileys([':)', ';(', ';}', ':-D']))