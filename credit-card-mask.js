const mask = (data) =>{
    let res_data = ''
    if (data.length <= 4){
        return data
    }
    else{
        for (let i = 0; i < data.length - 4; i++){
            res_data += '#'
        }
        for (let i = data.length-4; i < data.length; i++){
            res_data += data[i]
        }
    }
    return res_data
}

