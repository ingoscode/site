{
    upButton = document.querySelector('.up-button');
    shapka = document.querySelector('.shapka');
    console.log(upButton, 'its me');
    upButton.addEventListener('click', e => {
        console.log('event');
        shapka.scrollIntoView({block: "center", behavior: "smooth"});
    })
}		