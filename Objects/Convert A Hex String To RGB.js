function hexToRGB(hex){
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    console.log(result)
    return result ? {
        r: parseInt(result[1],16),
        g: parseInt(result[2],16),
        b: parseInt(result[3], 16)
    } : null
}

console.log(hexToRGB('#0033ff'))

