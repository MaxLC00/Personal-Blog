const userName = document.getElementById('user');
const title = document.getElementById('title');
const content = document.getElementById('content');
const form = document.querySelector('.whole-form');
//create constants that target the form sections in index.html
    form.addEventListener('submit', function(event) { //starts function on submit button click
        event.preventDefault();
    
        if (!userName.value || !title.value || !content.value) {
            alert('Complete form to submit a new post.');
            return;  //if any fields are null, returns to page and gives an alert that form was not fully complete
        }
    
        const newBlog = { //creates new array out of the values entered on form
            userName: userName.value,
            title: title.value,
            content: content.value,
        };
    
        let existingData = JSON.parse(localStorage.getItem('formData')) || []; //grabs existing local storage from browser
        existingData.push(newBlog); // pushes new array onto the end of local storage of browser
    
        localStorage.setItem('formData', JSON.stringify(existingData)); // converts array of storage into string
    
        window.location.href = '/blog.html'; //redirects to blog.html page

});

document.getElementById('back-button').addEventListener('click', function() { //adds click event to back button
    window.location.href = '/blog.html'; //redirects to blog
});