let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) slideIndex = 0;
    else if (index < 0) slideIndex = totalSlides - 1;
    else slideIndex = index;

    const offset = -slideIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(slideIndex + step);
}

document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));

let autoSlide = setInterval(() => moveSlide(1), 3000);

// Optional: Clear auto-slide interval on manual navigation
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => clearInterval(autoSlide));
});
