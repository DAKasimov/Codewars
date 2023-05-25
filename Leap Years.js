const isLeapYear = (year) =>{
    if (year % 4 === 0 && year % 100 !== 0 && year){
        return 'Leap Year'
    }
    return 'Not leap year'
}

