let index = 0;

function showSlide(i){
index = i;
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');

slides.forEach(s => s.classList.remove('active'));
dots.forEach(d => d.classList.remove('active'));

slides[i].classList.add('active');
dots[i].classList.add('active');
}

setInterval(()=>{
index = (index + 1) % 3;
showSlide(index);
}, 3000);
