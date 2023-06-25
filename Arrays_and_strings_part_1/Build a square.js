function getPlus(count){
    for (let i = 0; i < count; i++){
        for (let j = 0; j < count; j++){
            process.stdout.write('+')
        }
        console.log()
    }
}
