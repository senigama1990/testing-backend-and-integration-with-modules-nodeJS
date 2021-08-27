; (async ()=> {
    let response = await fetch('http://localhost:4500/users')
    let users = await response.json()

    users.map((user) => {
        let li = document.createElement('li')
        li.textContent = user.username
        list.append(li)
    })
})()