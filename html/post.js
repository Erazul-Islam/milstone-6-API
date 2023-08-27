function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayPost(data))
}


/*
1. get the container element where you want to add the new element
2. creat child element
3.set inner text or inner html
4.appendchild
*/





function displayPost(posts) {
    const container = document.getElementById('post-container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post')
        console.log(post)
        div.innerHTML = `
             <h5> user - ${post.userId} </h5>
             <h6> post - id : ${post.id} </h5>
             <p>Post Description : ${post.title}</p>
             
        `;
        container.appendChild(div)
    }
}

loadPost()