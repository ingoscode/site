setTimeout(() => loadposts());
const loadposts = () =>
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(tittle => posttxt(tittle));


const posttxt = tittle => {
    let user_list_container = document.querySelectorAll('.otstup');
    let user_template = document.querySelectorAll('.Novast');

    for (let i = 0; i < user_list_container.length; i++) {
        let node = user_template[i];
        if (node.querySelector('.dark-change-text').hasChildNodes()) console.log('hey'); else
            node.querySelector('.dark-change-text').innerText = tittle[i].body;
    }
};
