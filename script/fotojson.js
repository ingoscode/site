<!--Аватарка меняется  -->
setTimeout(() => ava());
const ava = () =>
    fetch('http://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(u => avamake(u));


const avamake = u => {
    let user_list_container = document.querySelectorAll('.Novast');
    let user_template = document.querySelectorAll('.hat');

    for (let i = 0; i < user_list_container.length; i++) {
        let node = user_template[i];
        node.querySelector('.dark-change-border').src = u[i].url;
    }
};
