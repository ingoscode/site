<!-- ИМЯ ФAМИЛИЯ МЕНЯЮТСЯ В СТУДЕНТ ЛИСТ-->
setTimeout(() => loadUsers());
const loadUsers = () =>
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => showUsers1(users));


const showUsers1 = users => {
    let user_list_container = document.querySelectorAll('.string');
    let user_template = document.querySelectorAll('.text-near-face');
    for (let i = 0; i < user_list_container.length; i++) {
        let node = user_template[i];
        node.querySelector('.namest').innerText = users[i].name
    }
};
