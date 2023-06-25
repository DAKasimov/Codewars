let str = 'your string'
str = str.split(' ')
let temp = str.map((item, index, array)=>{
    return item.length
})
res = Math.max(...temp)
console.log(res)