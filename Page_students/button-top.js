window.onload = function () {

    function add_mini_menu() {
        dialog.show()
    }

    function close_mini_menu() {
        dialog.close()
    }

    function dark_theme() {

        if (iterator % 2 == 0) {
            a = document.querySelector(".dark-theme");
            a.style.backgroundColor = "white";
            a.style.borderColor = "#0059b4";
            a.style.color = "#0059b4";
            TEXT = document.querySelectorAll(".dark-change-text");
            TEXT.forEach((id) => {
                id.style.color = "white"
            });
            BORD = document.querySelectorAll(".dark-change-border");
            BORD.forEach((id) => {
                id.style.borderColor = "white"
            });
            BODY = document.querySelector("body");
            BODY.style.backgroundColor = "#bbb";
            BACK = document.querySelectorAll(".dark-change-background-menu");
            BACK.forEach((id) => {
                id.style.background = "#bbb"
            })

        } else {
            a = document.querySelector(".dark-theme");
            a.style.backgroundColor = "gray";
            a.style.borderColor = "black";
            a.style.color = "black";
            TEXT = document.querySelectorAll(".dark-change-text");
            TEXT.forEach((id) => {
                id.style.color = "#0059b4"
            });
            BORD = document.querySelectorAll(".dark-change-border");
            BORD.forEach((id) => {
                id.style.borderColor = "#0059b4"
            });
            BODY.style.backgroundColor = "white";
            BACK = document.querySelectorAll(".dark-change-background-menu");
            BACK.forEach((id) => {
                id.style.background = "white"
            })

        }
        iterator += 1
    }

    let dialog = document.querySelector('dialog');
    let iterator = 0;
    document.querySelector('.menu-btn').addEventListener("mousemove", add_mini_menu);
    document.querySelector('#close').addEventListener("click", close_mini_menu, false);
    document.querySelector('.checkbox').addEventListener("click", dark_theme)


};

