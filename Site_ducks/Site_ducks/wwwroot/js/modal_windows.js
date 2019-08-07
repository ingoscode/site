
function modalWindowsFunc(){
    let modal = document.querySelector('.modal');
    let img = document.querySelectorAll('.open-modal');
    let modalImg = document.getElementById('modal-image');
    let close = document.querySelector('.close-button');


    for (let i = 0; i < img.length; i++) {
        img[i].addEventListener('click', e => {
            console.log('fire click');
            modal.style.display = 'block';
            modalImg.src = e.target.src;
        })
    }

    modal.addEventListener('click', e => {
            let element = e.target.className;
            if (element == 'modal')
                modal.style.display = 'none';
        }
    );
    close.addEventListener('click', e => {
            modal.style.display = 'none';
        }
    );
}