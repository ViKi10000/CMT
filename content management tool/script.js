document.addEventListener('DOMContentLoaded',() => {
    const blogForm = document.getElementById('blogForm');
    const titleDisplay = document.getElementById('title-display');
    const contentDisplay = document.getElementById('content-display');
    const imageDisplay = document.getElementById('image-display');
    const vedioDisplay = document.getElementById('vedio-display');

    blogForm.addEventListener('submit'), (e => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const image = document.getElementById('image').files[0];
        const vedio = document.getElementById('vedio').files[0];

        titleDisplay.textContent = title;
        contentDisplay.textContent = content;
        imageDisplay.src = URL.createObjectURL(image);
        vedioDisplay.src = URL.createObjectURL(vedio);

        document.getElementById('submitted-content').style.display = 'block';
        blogForm.requestFullscreen();
    })
});