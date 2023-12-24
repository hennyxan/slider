// const doc = document;
// const boxItem = doc.querySelectorAll('.box-item');

// className 
// boxItem.className += 'item my-classes';

// classList
// add , remove, toggle, contains;


// boxItem.onclick = function () {
//     const index = this.dataset.index;
//     const id = this.dataset.itemId;

//     console.log(this.dataset);
//     console.log(index);
//     console.log(id);

//     this.dataset.itemClick = 'true';

//     this.classList.toggle('box-item_active');
// };


// const shema = 'summer'; // summer
// // winter = white
// // summer = green

// let mainColor;

// if (shema === 'winter') {
//     mainColor = 'white';
// } else {
//     mainColor = 'green';
// }

// const mainColor = (shema === 'winter') ?  'white' : 'green';

// console.log('shema', shema);
// console.log('mainColor', mainColor);

// shema === 'winter'
//     ? console.log('this is winter')
//     : console.log('this is summer');



// const doc = document;
// const boxItem = doc.querySelectorAll('.box-item');

// boxItem.forEach(function (item) {
//     item.onclick = function () {
//         this.style.background
//             ? this.style.background = ''
//             : this.style.background = 'green';
//     }
// });

// this.style.background
// ? this.style.background = ''
// : this.style.background = 'green';
// }

// for (var i = 0; i < boxItem.length; i++) {
//     let item = boxItem[i];
//     boxItem[i].onclick = function () {
//         console.log(i);
//         console.log('click ${item.inneHTML}');
//     }
// }



// dz


const slider = document.getElementById('slider')
const slides = slider.children

const controls = document.getElementById('controls')

let i = 0

function current(el) {
    for (let j = 0; j < controls.children.length; j++) {
        if (el === controls.children[j]) {
            return j
        }
    }
}

slides[i].classList.add('slide--current')
controls.children[i].classList.add('control--current')

controls.addEventListener('click', (e) => {
    slides[i].classList.remove('slide--current')
    controls.children[i].classList.remove('control--current')
    i = current(e.target)
    e.target.classList.add('control--current')
    slides[i].classList.add('slide--current')
})


//dz