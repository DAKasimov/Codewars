function mergedObjects(array){
    let res = {}
    for (let i = 0; i < array.length; i++){
        for (let x in array[i]){
            res[x] = array[i][x]
        }
    }
    console.log(res)
}

mergedObjects([{1:'1',2:'2',3:'3'}, {3:'4',5:'6',6:'7',7:'8'}, {5:'9',8:'9',6:'12',23:'35'}])