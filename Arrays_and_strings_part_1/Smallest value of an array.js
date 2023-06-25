function min(arr, value_index){
    let res = Math.min(...arr)
    if (value_index === 'index') {
        let res_index
        arr.forEach((item, index)=>{
            if (item === res){
                res_index = index
            }
        })
        return res_index
    }
    else {
        return res
    }
}




