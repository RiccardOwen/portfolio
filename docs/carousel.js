document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function updateCarousel() {
        carouselItems.forEach((item, i) => {
            item.classList.remove('active', 'left', 'right');
            item.style.zIndex = 0;
            item.style.opacity = 0.3;
            item.style.transform = 'scale(0.85) translateX(0)';
        });

        // Center (active) item
        carouselItems[currentIndex].classList.add('active');
        carouselItems[currentIndex].style.zIndex = 2;
        carouselItems[currentIndex].style.opacity = 1;
        carouselItems[currentIndex].style.transform = 'scale(1) translateX(0)';

        // Left item
        const leftIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        carouselItems[leftIndex].classList.add('left');
        carouselItems[leftIndex].style.zIndex = 1;
        carouselItems[leftIndex].style.transform = 'scale(0.85) translateX(-60%)';

        // Right item
        const rightIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[rightIndex].classList.add('right');
        carouselItems[rightIndex].style.zIndex = 1;
        carouselItems[rightIndex].style.transform = 'scale(0.85) translateX(60%)';
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    // mouse wheel control
    document.querySelector('.carousel').addEventListener('wheel', function (e) {
        e.preventDefault();
        if (e.deltaY > 0) {
            nextItem();
        } else {
            prevItem();
        }
    });

    //touch support
    let startX = 0;
    let endX = 0;

    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        if (startX - endX > 50) {
            nextItem();
        } else if (endX - startX > 50) {
            prevItem();
        }
    });

    // Initial state
    updateCarousel();
});