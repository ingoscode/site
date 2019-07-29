window.onload = init;

function init() {
    let indicator = document.getElementById('example_0');
    indicator.onmousemove = push_news;

}

/*
if(document.documentElement.scrollHeight - window.pageYOffset < 500)


 */

function push_news(event) {

    if (document.documentElement.scrollHeight - window.pageYOffset < 2500) {


        let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
        let request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function () {
            let superHeroes = request.response;
            console.log(superHeroes);
            for (let k = 0; k < 3; k++) {

                let clonedNode = document.getElementById("example_1").cloneNode(true);

                clonedNode = document.getElementById("example_1").cloneNode(true);


                for (let i = 1; i <= 6; i++) {
                    let exam = 'example_' + i;
                    document.getElementById(exam).id = i;
                }
                document.getElementById("example_0").appendChild(clonedNode);

                document.getElementById("example_2").href = 'https://vk.com/feed';
                document.getElementById("example_3").src = 'https://static.probusiness.io/720x480c/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg';
                document.getElementById("example_4").href = 'https://vk.com/feed';
                document.getElementById("example_4").innerHTML = superHeroes['members'][k]['name'];
                document.getElementById("example_5").href = 'https://vk.com/feed';
                document.getElementById("example_5").innerHTML = superHeroes['formed'];
                document.getElementById("example_6").innerHTML = superHeroes['members'][k]['powers'];
                /*

                JSON
                let ex2_h;
                let ex3_s;
                let ex4_h;
                let ex4_i;
                let ex5_i;
                let ex5_h;
                let ex6_i;
                */


            }


        };

        setTimeout(function () {
        }, 1500);


    }
}