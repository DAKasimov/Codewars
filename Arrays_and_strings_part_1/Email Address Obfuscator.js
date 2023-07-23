function codeEmail(str){
    str = str.replace('@', ' [at] ')
    str = str.replace('.com', ' [dot] com')
    str = str.replace('.ru', ' [dot] ru')
    str = str.replace('.edu', ' [dot] edu')
    return str
}

console.log(codeEmail('jim.kuback@ennerman-hatano.com'))