window.onload = () => {
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
    document.querySelector('.checkbox').addEventListener("click", dark_theme);


    let aa = document.querySelector("#canvas");
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    let NUM = 50;
    let MIN = 200;
    /*ctx.lineTo(100,75);
    ctx.lineTo(100,25);

    for (let i = 0; i < 1000; i++)
    {
        ctx.lineTo(i, 500 + 300*Math.sin(i*2e-2))
    }
    ctx.stroke	();
    */
    ctx.arc(1, 1, 1, 0, 2 * Math.PI, true);
    ctx.fill();

    let circPosX = [];
    let circPosY = [];
    let circRad = [];
    let radMov = [];
    let rotAngle = [];
    let sign = [];
    ctx.fillStyle = "rgba(0,80,182,1)";
    for (let i = 0; i < NUM + 1; i++) {
        ctx.beginPath();
        circPosX.push(parseInt(10 + 1990 * Math.random()));

        circPosY.push(parseInt(10 + 1990 * Math.random()));

        circRad.push(parseInt(8 + 4 * Math.random()));
        radMov.push(parseInt(100 + 900 * Math.random()));

        if (Math.random() >= 0.5)
            sign[i] = 1;
        else
            sign[i] = -1;
        rotAngle[i] = 0;
        ctx.arc(circPosX[i], circPosY[i], circRad[i], 0, 2 * Math.PI, true);
        ctx.fill();

    }


    function drawLine(x1, y1, x2, y2, context, MIN, r, g, b) {

        let dist = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        let rel = dist / MIN;
        let color = "rgba(" + r + "," + g + "," + b + "," + (1 - rel) + ")";

        if (MIN > dist) {

            context.beginPath();
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.lineWidth = 5;
            context.strokeStyle = color;
            context.stroke()

        }
    }

    function drawLineMouse(x1, y1, x2, y2, context, MIN, r, g, b) {

        let dist = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
        let rel = dist / MIN;
        let color = "rgba(" + r + "," + g + "," + b + "," + (1 - rel) + ")";

        if (2 * MIN > dist) {

            context.beginPath();
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.lineWidth = 2;
            context.strokeStyle = color;
            context.stroke()

        }
    }

    function draw() {
        ctx.clearRect(0, 0, 1920, 1080);

        for (let i = 0; i < NUM; i++) {

            ctx.beginPath();


            ctx.arc(circPosX[i] + radMov[i] * Math.cos(sign[i] * rotAngle[i]), circPosY[i] + radMov[i] * Math.sin(sign[i] * rotAngle[i]), circRad[i], 0, 2 * Math.PI, true);
            ctx.fill();
            rotAngle[i] += 5. / radMov[i];
            if (rotAngle[i] >= 2 * Math.PI) {
                rotAngle[i] = 0
            }

        }


        for (let i = 0; i < NUM; i++) {

            drawLineMouse(circPosX[i] + radMov[i] * Math.cos(sign[i] * rotAngle[i]), circPosY[i] + radMov[i] * Math.sin(sign[i] * rotAngle[i]),
                circPosX[NUM], circPosY[NUM], ctx, MIN,
                0, 80, 182);

            for (let j = i + 1; j < NUM; j++) {

                drawLine(circPosX[i] + radMov[i] * Math.cos(sign[i] * rotAngle[i]), circPosY[i] + radMov[i] * Math.sin(sign[i] * rotAngle[i]),
                    circPosX[j] + radMov[j] * Math.cos(sign[j] * rotAngle[j]), circPosY[j] + radMov[j] * Math.sin(sign[j] * rotAngle[j]), ctx, MIN,
                    0, 80, 182)
            }
        }


        window.requestAnimationFrame(draw);
    }

    document.addEventListener("mousemove", function (evt) {

        var rect = canvas.getBoundingClientRect();
        let x = 0;
        let y = 0;
        x = (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
            y = (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height;


        circPosX[NUM] = x;
        circPosY[NUM] = y
    });
    window.requestAnimationFrame(draw);


    function getPosition(e) {
        var posx = 0;
        var posy = 0;

        if (!e) var e = window.event;

        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        } else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft
                + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop
                + document.documentElement.scrollTop;
        }

        return {
            x: posx,
            y: posy
        }
    }


};