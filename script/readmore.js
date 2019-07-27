
let btnText1 = document.querySelectorAll(".myBtn");
for (i = 0; i < btnText1.length; i++) {
		btnText1[i].addEventListener('click', function(e){ myFunction(e) }, false);
    }
	
	function myFunction(e) {

        let target = e.target;
		let novast = target.parentNode;

        let moreText = novast.querySelector(".more");
		let dots = novast.querySelector(".dots");
		let btnText = novast.querySelector(".myBtn");

		if (dots.style.display === "none") {
		dots.style.display = "inline";
		btnText.innerHTML = "Read more"; 
		moreText.style.display = "none";
		} else {
		dots.style.display = "none";
		btnText.innerHTML = "Read less"; 
		moreText.style.display = "inline";
		}
	}
