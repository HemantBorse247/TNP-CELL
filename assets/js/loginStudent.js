let toggle = document.querySelectorAll('.toggle-btn');
let slide = document.querySelector('.slider');
let signin = document.querySelector('.sign-in');
let signup = document.querySelector('.sign-up');

// signup.addEventListener('click', () => {
//     if (test.classList.contains('disN')) {
//         test.classList.add('disB');
//         test.classList.remove('disN');
//     }
//     else {
//         test.classList.remove('disB');
//         test.classList.add('disN');
//     }
// });
console.log(slide);
console.log(signin);
console.log(signup);

toggle[0].addEventListener('click', () => {
    if (slide.classList.contains('animationF')) {
        slide.classList.remove('animationF');
    }
    else {
        slide.classList.add('animationR');
    }
    slide.classList.add('animationR');

    if (signin.classList.contains('dnone')) {
        signin.classList.add('dblock');
        signin.classList.remove('dnone');

        if (signup.classList.contains('dblock')) {
            signup.classList.remove('dblock');
            signup.classList.add('dnone');
        }
        else
            signup.classList.add('dnone');
    }
});

toggle[1].addEventListener('click', () => {
    if (slide.classList.contains('animationR')) {
        slide.classList.remove('animationR');
    }
    else {
        slide.classList.add('animationF');
    }
    slide.classList.add('animationF');

    if (signup.classList.contains('dnone')) {
        signup.classList.remove('dnone');
        signup.classList.add('dblock');

        if (signin.classList.contains('dblock')) {
            signin.classList.remove('dblock');
            signin.classList.add('dnone');
        }
        else
            signin.classList.add('dnone');
    }
});

