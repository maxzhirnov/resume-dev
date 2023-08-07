window.onload = function() {
    const button = document.getElementById('toggleStyle');

    button.addEventListener('click', function() {
        const body = document.body;

        if (body.classList.contains('dev')) {
            body.classList.remove('dev');
            body.classList.add('normal');
            button.textContent = "Dark theme"
        } else {
            body.classList.remove('normal');
            body.classList.add('dev');
            button.textContent = "Bright theme"
        }
    });
}
