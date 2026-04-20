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
    postList.innerHTML = ''; // Clear existing content

    //  Loop through the posts list
    posts.forEach(post => {
        // Create a li tag
        const li = document.createElement('li');
        
        // Create a new h1 tag (Instruction requirement!)
        const h1 = document.createElement('h1');
        h1.textContent = post.title;
        
        // Create a new p tag
        const p = document.createElement('p');
        p.textContent = post.body;
        
        // Append h1 and p to li
        li.appendChild(h1);
        li.appendChild(p);
        
        // Append li to the ul (id is post-list)
        postList.appendChild(li);
    });
}

// Call the main function to start the process
fetchPosts();