const userName = document.getElementById('user');
const title = document.getElementById('title');
const content = document.getElementById('content');
const form = document.querySelector('.whole-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
    
        if (!userName.value || !title.value || !content.value) {
            alert('Complete form to ');
            return;  
        }
    
        const newBlog = {
            userName: userName.value,
            title: title.value,
            content: content.value,
        };
    
        let existingData = JSON.parse(localStorage.getItem('formData')) || [];
        existingData.push(newBlog);
    
        localStorage.setItem('formData', JSON.stringify(existingData));
    
        window.location.href = '/blog.html';

});