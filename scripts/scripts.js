const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const test = navLinks.querySelectorAll('li')

hamburger.addEventListener('click', () =>{
    navLinks.classList.toggle('show');
})

// for(let i = 0; i < test.length; i++){
//     test[i].addEventListener('click', ()=>{
//         let current = document.getElementsByClassName('test');
//         current[0].className = current[0].className.replace(' test', '');
//         this.className += ' active';
//     })
// }