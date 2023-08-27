// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

// .json is not similar but close to json .

// const url = 'https://jsonplaceholder.typicode.com/';
// fetch(url)
//     .then(response => response.json())
//     .then(json => console.log(json))

function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/';
    fetch(url)
        .then(response => response.json())
        .then(json => console.log(json))
}