document.addEventListener("DOMContentLoaded", function() {
    const slideshows = document.querySelectorAll('.slideshow-container');
    
    slideshows.forEach((slideshow) => {
        const slides = slideshow.querySelectorAll('.slide');
        let currentIndex = 0;
        
        function showSlide(index) {
            slides.forEach((slide) => slide.style.display = 'none');
            slides[index].style.display = 'block';
        }
        
        showSlide(currentIndex);
        
        slideshow.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % slides.length; 
            showSlide(currentIndex);
        });
    });
});