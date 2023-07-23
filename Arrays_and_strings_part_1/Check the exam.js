function checkExam(arr_solution, arr_check){
    try {
        let count = 0
        arr_solution.forEach((item)=>{
            if (typeof item !== 'string'){
                throw new Error('элементы должны быть строками')
            }
        })
        arr_check.forEach((item)=>{
            if (typeof item !== 'string'){
                throw new Error('элементы должны быть строками')
            }
        })
        for (let i = 0; i < arr_solution.length; i++){
            if (arr_solution[i] === arr_check[i]){
                count += 4
            }
            else if (arr_check[i] === ''){
                continue
            }
            else if (arr_solution[i] !== arr_check[i]){
                count -= 1
            }
        }
        if (count < 0){
            return 0
        }
        return count
    }
    catch (e){
        return e.message
    }
}

console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]))