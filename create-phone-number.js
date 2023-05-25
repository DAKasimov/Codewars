function createPhoneNumber(list){
    try{
        if (list.length !== 10){
            throw new Error('Количество цифр должно быть 10')
        }
        for (let i = 0; i < list.length; i++){
            if (list[i] > 9){
                throw new Error('Цифра не может быть двузначной')
            }
        }
        return `(${list[0]}${list[1]}${list[2]}) ${list[3]}${list[4]}${list[5]}-${list[6]}${list[7]}${list[8]}${list[9]}`
    }catch (e){
        console.error(e)
    }
}

