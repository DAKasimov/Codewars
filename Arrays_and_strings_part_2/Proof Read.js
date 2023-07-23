function normString(str){
    str = str.toLowerCase()
    str = str.replace('ie', 'ei')
    str = capitalize(str)
    return str
}

function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

console.log(normString('He haD iEght ShOTs of CAffIEne'))

