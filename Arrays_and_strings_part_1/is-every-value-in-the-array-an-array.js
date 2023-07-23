function checkArray(multiValue){
    let flag = false
    multiValue.forEach((item)=>{
        if (!Array.isArray(item)){
            flag = true
        }
    })
    if (flag === true){
        return false
    }
    else {
        return true
    }
}

console.log(checkArray([{1:1},{2:2}]))

