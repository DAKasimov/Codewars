function showWin(multiArray, value){
    let count = 0
    for (let i = 0; i < multiArray.length; i++){
        let temp_str = multiArray[i][0].split('')
        temp_str = temp_str.map((item)=>{
            return item.charCodeAt(0)
        })
        console.log(temp_str)
        for (let j = 0; j < temp_str.length; j++){
            if (temp_str[j] === multiArray[i][1]){
                count++
                break
            }
        }
    }
    console.log(count)
    if (count >= value){
        return 'Ты победил'
    }
    else{
        return 'Ты проиграл'
    }

}

console.log(showWin([ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ],1))