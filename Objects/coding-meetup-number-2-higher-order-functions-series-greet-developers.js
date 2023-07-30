function func(array){
    let res = []
    let temp = []
    for (let i = 0; i < array.length; i++){
        temp.push(array[i]['firstName'])
        temp.push(array[i]['language'])
        let t = {greeting: `Hi ${temp[0]}, what do you like the most about ${temp[1]}`}
        let newObj = Object.assign(array[i], t)
        res.push(newObj)
        temp = []
    }
    console.log(res)
}
func([
    { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
])