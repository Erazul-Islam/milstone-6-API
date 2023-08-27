function loadData4(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => displayUser3(data))
}

function displayUser3 (data){
    const ul = document.getElementById('user-list2')
    for(const user of data){
        const li = document.createElement('li');
        li.innerText = user.id;
        ul.appendChild(li)
    }
}