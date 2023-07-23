function magicIndex(arr){
    arr.sort((a,b)=>a-b)
    let res = arr.filter((item,index)=>{
        return item === index
    })
    console.log(...res)
}

magicIndex([-20,-10,2,10,20])