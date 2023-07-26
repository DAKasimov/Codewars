function func(array){
    array.sort((a,b)=>a-b)
    let flag = false
    let temp
    array.forEach((item,index,array)=>{
        if (item === index){
            flag = true
            temp = item
        }
    })
    if (flag === true){
        return temp
    }
    else {
        return -1
    }
}

console.log(func([-1,0,3,6]))