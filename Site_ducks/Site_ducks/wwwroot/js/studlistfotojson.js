function StudListFotoJsonFunc() {
    setTimeout(() => ava());
    const ava = () =>
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then(u => avamake(u));


    const avamake = u => {
        let user_list_container = document.querySelectorAll('.string');
        let user_template = document.querySelectorAll('.fotoclass');

        for (let i = 0; i < user_list_container.length; i++) {
            let node = user_template[i];
            node.querySelector('.pic_with_text_near').src = u[i].url;
        }
    };
}