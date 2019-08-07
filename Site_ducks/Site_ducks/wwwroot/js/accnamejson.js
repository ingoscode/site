function accnamejsonFunc(){
    setTimeout(() => loadnames());
    const loadnames = () =>
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => showUsers1(users));


    const showUsers1 = users => {
        let user_list_container = document.querySelectorAll('.table_name_date');
        let user_template = document.querySelectorAll('.name_date');
        for (let i = 0; i < user_list_container.length; i++) {
            let node = user_template[i];
            node.querySelector('.name-link').innerText = users[i].name
        }
    };
}