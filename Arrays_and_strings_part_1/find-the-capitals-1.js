let s = 'juYjtO'
s = s.split('')
s.filter((item, index)=>{
    if (item === item.toUpperCase()){
        console.log(index)
    }
})