document.addEventListener("DOMContentLoaded", function() {
    const slideshows = document.querySelectorAll('.slideshow-container');
    
    slideshows.forEach((slideshow) => {
        const slides = slideshow.querySelectorAll('.slide');
        let currentIndex = 0;
        
        function showSlide(index) {
            // Hide all images
            slides.forEach((slide) => slide.style.display = 'none');
            // Show the current image
            slides[index].style.display = 'block';
        }
        
        // Initialize the first slide
        showSlide(currentIndex);
        
        // Click handler for navigating through images
        slideshow.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % slides.length;  // Loop back to the first image after the last one
            showSlide(currentIndex);
        });
    });
});