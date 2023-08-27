// function loadData3() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => displayUser2(data))
// }
// function displayUser2(data){
//     for(const user of data){
//         console.log(user.username)
//     }
// }




function loadData3() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser2(data))
}
function displayUser2(data){
    const ul = document.getElementById('user-list');
    for(const user of data){
        const li = document.createElement('li')
        li.innerText = user.name;
        ul.appendChild(li);
    }
}