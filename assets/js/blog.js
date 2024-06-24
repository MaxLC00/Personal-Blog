const displayContainer = document.getElementById('blog-content');

function addItemsToMain() { //runs on page load
    const storedFormData = JSON.parse(localStorage.getItem('formData')); // converts data out of string when called

    
    if (storedFormData) { //checks for a truthy value in storedFormData, if truthy executes the function
        storedFormData.forEach(data => { //runs for each det of data in local storage
            const blogDiv = document.createElement('div');
            blogDiv.className = 'post';
            blogDiv.innerHTML = ` 
                <h2 style= "text-align: center; margin-bottom: 1%;"><u>${data.title}</u></h2>
                <h3 style="text-align: center; margin-top:1%;">Author: ${data.userName}</h3>
                <p style="margin-left: 2%; margin-right: 2%;">${data.content}</p><hr>`
            displayContainer.appendChild(blogDiv);//adds new div to the bottom of the blog content container in blog.html
        });
    }
}

addItemsToMain();

document.getElementById('back-button').addEventListener('click', function() { //adds click event to back button
    window.location.href = 'index.html'; // redirects to index.html
});

