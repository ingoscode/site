var btnText1 = document.querySelectorAll(".myBtn");
		for (i=0; i<btnText1.length; i++){
		btnText1[i].addEventListener('click', function(e){ myFunction(e) }, false);
    }
	
	function myFunction(e) {
		
		var target = e.target;
		var novast = target.parentNode;
		
		var moreText = novast.querySelector(".more");
		var dots = novast.querySelector(".dots");
		var btnText = novast.querySelector(".myBtn");

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
	
