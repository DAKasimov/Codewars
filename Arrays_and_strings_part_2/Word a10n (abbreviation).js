function abbreviate(str){
    str = str.replace('-',' ')
    str = str.split(' ')
    let count = 0
    let res = ''
    let firstSymbol
    let lastSymbol
    for (let i = 0; i < str.length; i++){
        firstSymbol = str[i][0]
        lastSymbol = str[i][str[i].length-1]
        for (let j = 1; j < str[i].length-1;j++){
            count++
        }
        if (count >= 3){
            res += firstSymbol + count + lastSymbol + ' '
        }
        else {
            res += str[i] + ' '
        }
        count = 0
    }
    console.log(res)
}

abbreviate('elephant-rides are really fun!')