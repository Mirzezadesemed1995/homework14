function showTab(index) {
    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => tab.classList.remove('active'));
    tabs[index].classList.add('active');

    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');

    const sliderContent = document.querySelector('.slider-content');
    sliderContent.style.transform = `translateX(-${index * 100}%)`;
}

showTab(0);

