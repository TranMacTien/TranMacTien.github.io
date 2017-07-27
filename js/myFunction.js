/* sidenav animation */
(function(){
	function openNav() {
	    document.getElementById("side-nav").style.width = "260px";
	    document.getElementById("wrapper").style.marginLeft = "260px";
	    document.getElementById("nav").style.left = "260px";
	}
	document.getElementById("open-button").addEventListener("click", function(e){
		e.preventDefault();
		openNav()
	});
})();

(function(){
	function closeNav() {
	    document.getElementById("side-nav").style.width = "0";
	    document.getElementById("wrapper").style.marginLeft = "0";
	    document.getElementById("nav").style.left = "0";
	   /* document.getElementById("menu-toggle").checked=false;*/
	}
	document.getElementById("close-button").addEventListener("click", function(e){
		e.preventDefault();
		closeNav()
	});
})();

/* slideshow animation */
(function(){	
	var slideIndex=1;
	showSlides(slideIndex);
	function showSlides(n){
		var i, j;
		var slides=document.getElementsByClassName("showcase-item");
		var dots=document.getElementsByClassName("dot");
		for(i=0; i<dots.length; i++){
			slides[i].style.display="none";
		}
		for(j=0; j<dots.length; j++){
			if(j+1 === n){
				slides[j].style.display="block";
				dots[j].className+=" active";
			}
			else{
				dots[j].className = "dot";
			}
		}
	}

	var classDot=document.getElementsByClassName("dot");
	for(var i=0; i<classDot.length; i++){
		(function(){
			var n = i+1;
			classDot[i].addEventListener("click", function(e){ 
				e.preventDefault();
				showSlides(n)
			});
		})();
	}
})();

/* carousel procedure */
(function(){	
	var procedureIndex=1;
	showCarousel(procedureIndex);

	function showCarousel(n){
		var i;
		var carousels=document.getElementsByClassName("procedure-inner");
		var bullets=document.getElementsByClassName("bullet");
		var liProcedure=document.getElementsByClassName("li-procedure");
		if(n>carousels.length){
			procedureIndex=1;
		}
		if(n<1){
			procedureIndex=carousels.length;
		}
		for(i=0; i<bullets.length; i++){
			carousels[i].style.display="none";
			liProcedure[i].style.display="none";
		}
		for(i=0; i<bullets.length; i++){
			if(i+1 === n){
				carousels[i].style.display="block";
				bullets[i].className+=" active";
				liProcedure[i].style.display="block";
			}
			else{
				bullets[i].className = "bullet";
			}
		}
	}

	var classBullet=document.getElementsByClassName("bullet");
	for(var i=0; i<classBullet.length; i++){
		(function(){
			var n = i+1;
			classBullet[i].addEventListener("click", function(e){
				e.preventDefault();
				showCarousel(n)
			});
		})();
	}
})();

/* toggle menu */
(function(){
	var toggleList=document.getElementsByClassName("toggle-link");
	for(var i=0;i<toggleList.length;i++){
		(function(){
			var index=i;
			toggleList[index].addEventListener("click", function(e){
				e.preventDefault();
				toggleClass(this, "active")
			});
		})();
	}
})();

function toggleClass(element, classname){
	var arr=document.getElementsByClassName("toggle-link");
	if(element.classList){
		element.classList.toggle(classname);
		for(var i=0;i<arr.length;i++){
			if(arr[i]!==element){
				arr[i].classList.remove(classname);
			}
		}
	}else{
		var strClassName=element.className;
		var isChecked=strClassName.indexOf(classname);
		classname=" "+classname;
		if(isChecked<0){
			element.className+=classname;
 		}
 		// for IE9
 		else{
 			element.className=element.className.replace(classname, "");
 			console.log(element.className);
 		}
 		for(var i=0;i<arr.length;i++){
 			if(arr[i]!==element){
 				arr[i].className=arr[i].className.replace(classname, "");
 			}
 		}
	}

}