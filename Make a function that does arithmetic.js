function func(value1, value2, operand){
    const operands = {
        'add' : function (value1, value2){return value1 + value2},
        'subtract' : function (value1, value2){return value1 - value2},
        'multiply' : function (value1, value2){return value1 * value2},
        'divide' : function (value1, value2){return value1 / value2},
    }
    let res
    for (let op in operands){
        if (op === operand){
            res = operands[op](value1, value2)
        }
    }
    console.log(res)
}

func(1,2,'divide')