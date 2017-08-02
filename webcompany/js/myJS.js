(function(){
	var slideIndex=0;
	showSlide(slideIndex);
	document.getElementById("prev").addEventListener("click", function(){
		showSlide(slideIndex-=1);
	});
	document.getElementById("next").addEventListener("click", function(){
		showSlide(slideIndex+=1);
	});

	function showSlide(n){
		var i;
		var j;
		var slides=document.getElementsByClassName("slideshow__img");
		if(n>slides.length-1){
			slideIndex=0;
		}
		if(n<0){
			slideIndex=slides.length-1;
		}
		console.log(slideIndex);
		for(i=0;i<slides.length;i++){
			slides[i].style.display="none";
		}
		slides[slideIndex].style.display="block";
		/*for(j=0;j<slides.length;j++){
			if(j===slideIndex){
				slides[j].style.display="block";
			}
		}	*/
	}

})();