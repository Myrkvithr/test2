'use strict'

let isPlay = false;

//----------Preload imgs

function preloadBackgroundImages(urls) {
    urls.forEach((el, index) => {
        const img = new Image();
        img.src = urls[index];

    });
}



preloadBackgroundImages(['./assets/img/forest.jpg',
    './assets/img/solovey.jpg',
    './assets/img/drozd.jpg',
    './assets/img/zarynka.jpg',
    './assets/img/javoronok.jpg',
    './assets/img/slavka.jpg',
]);



//------------
//-----------

//----------Preload audio

// function preloadAudio(urls) {
//     urls.forEach((el, index) => {
//         const audioPlayer = new Audio();
//         audioPlayer.preloadAudio('./assets/img/forest.jpg');
//         console.log(urls[index]);
//     });

// }

// preloadAudio(['./assets/audio/forest.mp3',
//     './assets/audio/solovey.mp3',
//     './assets/audio/drozd.mp3',
//     './assets/audio/zarynka.mp3',
//     './assets/audio/javoronok.mp3',
//     './assets/audio/slavka.mp3',
// ]);

//------------
//-----------


// const audio = document.querySelector('audio');

// function playAudio() {
//     if (!isPlay) {
//         audio.scr = 'https://7oom.ru/audio/naturesounds/07%20Birds%20(7oom.ru).mp3';
//         audio.currentTime = 0;
//         audio.play();
//     } else {
//         audio.pause();
//     }
// }

// playAudio();

//-----BTN

const button = document.querySelector('.content__play-btn');

function toggleBtn() {
    button.classList.toggle('pause');
}

button.addEventListener('click', toggleBtn);


//-----Active link

const linksArr = document.querySelectorAll('.header__nav-link');
const headerCont = document.querySelector('.header__container');

function activeLink(event) {
    if (event.target.classList.contains('header__nav-link')) {
        console.log(event.target);

        linksArr.forEach((el) => {
            if (el.classList.contains('active')) {
                el.classList.remove('active');
            }

        });

        event.target.classList.add('active');
        button.classList.add('pause');


    }
}

headerCont.addEventListener('click', activeLink);
