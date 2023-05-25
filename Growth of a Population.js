const nb_year = (p0, aug, n, p) =>{
    let years = 0
    let temp = 0
    while (temp <= p){
        temp = p0 + p0 * aug + n
        p0 = temp
        years += 1
    }

    return years
}

