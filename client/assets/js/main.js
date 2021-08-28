async function getUsers () {
    let response = await fetch('http://localhost:4500/users')
    let users = await response.json()
    list.innerHTML = null
    users.map((user) => {
        let li = document.createElement('li')
        li.textContent = user.username
        list.append(li)
    })
}
getUsers()

form.onsubmit = async function (e) {
    e.preventDefault()
    let response = await fetch('http://localhost:4500/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value,
            age: age.value
        })
    })
    console.log(await response.json());
    getUsers()
}