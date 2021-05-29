document.querySelector('.menu-icon').addEventListener('click', function () {
    document.querySelector('nav').classList.toggle('show-menu');
})


document.querySelectorAll('.extend-paragraph').forEach(function (el) {

    const parent = el.closest('.project-info');
    const chevron = parent.querySelector('.fa-chevron-down');
    const text = parent.querySelector('.additional-text');

    el.addEventListener('click', function () {
        chevron.classList.toggle('rotate-icon');
        text.classList.toggle('show-additional-text');
    })
})
