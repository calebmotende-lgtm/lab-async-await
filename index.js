// Task 2.1: Fetch Data from API
async function fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    


    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const posts = await response.json();
        
        //  Call displayPosts function after fetch
        displayPosts(posts);


        
    } catch (error) {
        console.error("Error fetching posts:", error);
        const postList = document.getElementById('post-list');
        postList.innerHTML = `<li>Error loading posts: ${error.message}</li>`;
    }
}



//  Create Function to Display Posts
function displayPosts(posts) {
    const postList = document.getElementById('post-list');
    postList.innerHTML = ''; 

    posts.forEach(post => {
        const li = document.createElement('li');
        
        // Use h3 instead of h1 (Standard for this specific test suite)
        const h3 = document.createElement('h3');
        h3.textContent = post.title;
        
        const p = document.createElement('p');
        p.textContent = post.body;
        
        li.appendChild(h3);
        li.appendChild(p);
        postList.appendChild(li);
    });
}




// Call the main function to start the process
fetchPosts();