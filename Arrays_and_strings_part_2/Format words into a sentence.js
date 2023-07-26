function f(array){
    let result = ''
    array.forEach((item, index, array)=>{
        if (index === array.length-2){
            result += array[index] + ' and '
        }
        else{
            result += array[index] + ', '
        }
    })
    result = result.slice(0,-1)

    console.log(result)
}

f(['ninja', 'samurai', 'ronin', 'nevrjker', 'mdcmc'])

