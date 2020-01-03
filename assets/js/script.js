let navbar = document.querySelector('.nav-list');
let navChange = Array.from(document.querySelectorAll('.menu'));
navChange.forEach( (nav) => {
    nav.addEventListener('click', () => {
        navbar.classList.toggle('nav-change');
        // document.querySelector(".reserve").style.display = "none";
    })
})


window.addEventListener('scroll', () =>{
    let header = document.querySelector("header");
    let top = window.pageYOffset;
    if(top > 400){
        header.classList.add("active");
    }
    else{
        header.classList.remove("active");
    }
});


// const images = ['assets/images/slide_01.jpg',
// 'assets/images/slide_02.jpg',
// 'assets/images/slide_03.jpg',
// 'assets/images/slide_04.jpg',
// 'assets/images/slide_05.jpg'];
// const lines = document.querySelectorAll(".line-select");
// const arrows = document.querySelectorAll(".arrow");
// let img = document.querySelector(".container-fluid");
// img.style.backgroundImage = `url(${images[0]})`;


// function slide(){   
//     lines[i].classList.add("active");
//     img.style.backgroundImage = "url(" + images[i] + ")";
//     lines.forEach( (line) =>{
//         line.addEventListener('click', () =>{
//             line.classList.add("active");
//             let a = line.id;
//             img.style.backgroundImage = "url(" + images[a] + ")";
//             i = a;
//             for(let j=0;j<5;j++){
//                 if(j != a){
//                     lines[j].classList.remove("active");
//                 }
//             }
//         });
//     });
//     for(let j=0;j<5;j++){
//         if(j != i){
//             lines[j].classList.remove("active");
//         }
//     }
//     i++;
//     if(i >= 5){
//         i = 0;
//     }
// }
// setInterval(slide, 5000); 




