function func(array){
    let res = {'online' : [], 'offline' : [], 'away' : []}
    array.forEach((item)=>{
        if (item.lastActivity <= 10){
            res.online.push(item.username)
        }
        else if (item.lastActivity <= 25){
            res.offline.push(item.username)
        }
        else if (item.lastActivity > 25){
            res.away.push(item.username)
        }
    })
    console.log(res)
}

func([{
    username: 'David',
    status: 'online',
    lastActivity: 10
}, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
}])