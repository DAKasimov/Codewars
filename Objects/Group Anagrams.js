function groupAnagrams(array){
    const obj = {}
    let res = []
    let result = []
    let count = 0
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < array[i].length; j++){
            count += array[i][j].charCodeAt(0)
        }
        obj[array[i]] = count
        count = 0
    }
    console.log(obj)
    for (let x in obj){
        for (let y in obj){
            if (obj[x] === obj[y]){
                res.push(y)
            }
        }
        result.push(res)
        res = []
    }
    result = Array.from(new Set(result))
    console.log(result)

}
groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]);