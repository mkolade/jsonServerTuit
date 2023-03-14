const id = new URLSearchParams(window.location.search).get('id');
const url = ' http://localhost:3000/posts/' + id;
const container = document.querySelector('.details')
const deleteBtn = document.querySelector('.button')

const renderPosts = async () =>{
    const res = await fetch(url);
    const post = await res.json();
    /* console.log(post); */

    const template = `
        <div class="post">
            <h1>${post.title}</h1>
            <p><small>${post.likes} likes</small></p>
            <p>${post.body}</p>
        </div>
    `
    container.innerHTML= template;
}

deleteBtn.addEventListener('click', async (e) =>{
    const res = await fetch(url,{
        method: 'DELETE'
    });

    window.location.replace('/index.html')
})

window.addEventListener('DOMContentLoaded',() => renderPosts())