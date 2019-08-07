
window.addEventListener('DOMContentLoaded', function () {
    let nodes = document.querySelectorAll('.commentarium > button.button_comment');
    [].forEach.call(nodes, function (el) {
        el.addEventListener('click', function (event) {
            event.preventDefault();
            el.closest(".commentarium").classList.toggle("open")
        });
    });
});