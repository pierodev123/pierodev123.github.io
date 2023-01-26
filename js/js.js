const swiper = new Swiper(".gallerySwiper",{
    slidesPerview: 1,
    spaceBetween: 20,
    pagination:{
        el:".swiper-pagination",
        clickbale:true,
    },
    breakpoints:{
        800:{
            slidesPerview:3,
            spaceBetween:30,

        },
        600:{
            slidesPerview:2,
            spaceBetween:20,
        },

    },
});

const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click',() =>{
menuBtn.classList.toggle('.menu-open');
});


const  pagination = document.querySelectorAll('.pagination li a');
const sections = document.querySelectorAll('.main-section');
for(let i=0; i<sections.length;i++){
    window.addEventListener('.scroll', ()=>{
        if(window.scrollY > sec[i].offsetTop - offset &&
            window.scrollY < section[i].offsetTop + section[i].offsetHeight - offset
            ){
                pagination.forEach(pag=>{
                    pag.classList.remove('.active');
                });
                pagination[i].classList.add('active');
            }
    });
}