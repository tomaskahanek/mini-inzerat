window.addEventListener('DOMContentLoaded', (event) => {
    const lightboxOptions = {
        animationSpeed: 100,
        animationSlide: false,
        fadeSpeed: 100,
        widthRatio: 0.95,
        heightRatio: 0.95,
        loop: false,
        overlayOpacity: 0.85,
    }

    var lightbox1 = new SimpleLightbox('.gallery-1 a', lightboxOptions);
    var lightbox2 = new SimpleLightbox('.gallery-2 a', lightboxOptions);
});