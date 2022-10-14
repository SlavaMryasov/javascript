// const button1 = document.querySelector('.btn');
// button1.addEventListener('click', () => {console.log('click')})

// const button2 = document.querySelector('.btn2');
// button2.addEventListener('click', () => {console.log('click')})

// const age = prompt('напиши свой возраст');
// alert(`тебе ${age} лет`)

let offset = 0; // смещение от левого края

const sliderLine= document.querySelector('.slider-line');

document.querySelector('.btn2').addEventListener('click', () => {
  offset = offset - 612; 
  if (offset < -2448) {
    offset = 0;
  }
  console.log('left');
  sliderLine.style.left = offset + 'px';

  // setTimeout(() => {

  // })
});

const del = () => {

}

document.querySelector('.btn').addEventListener('click', () => {
  offset = offset + 612; 
  if (offset > 0) {
    offset = -2448;
  }
  console.log('left');
  sliderLine.style.left = offset + 'px';
});


const rep = setInterval(() =>{

setTimeout(() => document.body.style.background = 'LightYellow', 1000);
setTimeout(() => document.body.style.background = 'LemonChiffon', 2000);
setTimeout(() => document.body.style.background = 'LightGoldenrodYellow', 3000);
setTimeout(() => document.body.style.background = 'PapayaWhip', 4000);
setTimeout(() => document.body.style.background = 'Moccasin', 5000);
setTimeout(() => document.body.style.background = 'PeachPuff', 6000);
setTimeout(() => document.body.style.background = 'PaleGoldenrod', 7000);
setTimeout(() => document.body.style.background = 'Khaki', 8000);
setTimeout(() => document.body.style.background = 'DarkKhaki', 9000);

}, 10000);


const htmlElement = document.documentElement;
const headElement = document.head;
const bodyElement = document.body;
const childNodes = bodyElement.childNodes;

// console.log(htmlElement);
// console.log(headElement);
// console.log(bodyElement.hasChildNodes())

// for(let node of childNodes) {
//   console.log(node);
// }

const cvet = document.getElementsByClassName(".containerSlides");
cvet.style.backgroundColor = "red";
console.log(cvet);