slidesIndex = 1 ;

function changeSlide(n)
{
	showSlides(slidesIndex +=n) ;

}

function showSlides(n)
{
	var i;
	var slides = document.getElementsByClassName('slides') ;

	if(n>slides.length)
	{
		slidesIndex = 1 ;
	}
	if(n<1)
	{
		slidesIndex = slides.length ;
	}

	for(i=0 ; i<slides.length ;i++)
	{
		slides[i].style.display = 'none' ;
	}

	slides[slidesIndex -1].style.display = 'block' ;
}