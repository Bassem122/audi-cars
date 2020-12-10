document.querySelector(".print").addEventListener("click",function(event){print(this)});

document.querySelectorAll(".favo").forEach(el => el.addEventListener("click",function(){
console.log(this.childNodes);	addToFavo(this.childNodes[1]);} ));

function addToFavo(el)
{
	el.classList.toggle("far");
	el.classList.toggle("fas");
}

document.querySelectorAll(".cart").forEach(el => el.addEventListener("click",function(){
console.log(el); el.setAttribute("data-cart",eval(el.getAttribute("data-cart")+1)); } ));

/** carousel **/
$('.carousel').carousel({
  interval: 2000,
});

$(document).ready(function(){
	
	/** slick **/
	$('.using-slick').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 1000,
	  dots: true,
	  infinite: true,
	  responsive: 
	  [
		{
		  breakpoint: 1024,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			dots: true
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		  }
		}
	  ]
	  
	});
	
});