function filter_list(list){
    let res = list.filter((item)=> typeof item === 'number')
    return res
}

