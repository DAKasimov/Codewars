function func(obj){
    let res = []
    for (let x in obj){
        if (obj[x] >= 60){
            res.push(x)
        }
    }
    console.log(res)
}
func({'Java' : 10, 'Ruby' : 80, 'Python' : 65})