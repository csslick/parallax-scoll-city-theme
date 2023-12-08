const sun = document.querySelector('.sun');
const clouds =document.querySelector('.clouds');
const building_back = document.querySelector('.building-back');
const building_front = document.querySelector('.building-front');
const h1 = document.querySelector('section h1');

window.addEventListener('scroll', function() {
    console.log(window.scrollY)
    let y = window.scrollY;

    // 태양은 제자리
    sun.style.transform = `translateY(${y * 0.5}px)`;
    
    // 구름은 천천히
    clouds.style.transform = `translateY(${y * 0.2}px)`;

    // 전경 빠르게
    building_front.style.transform = `translate(${y * 0}px, ${y * 0.4}px)`;
    building_back.style.transform = `translateY(${y * 0.3}px)`;

    // 제목 스크롤
    h1.style.transform = `translateX(${y * 1}px)`;

})