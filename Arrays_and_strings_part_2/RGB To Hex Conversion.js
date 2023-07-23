function rgb(...args){
    let res = ''
    args.forEach((item)=>{
        res += item.toString(16).toUpperCase()
    })
    return res
}

console.log(rgb(148,0,211))