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


// const rep = setInterval(() =>{

// setTimeout(() => document.body.style.background = 'LightYellow', 1000);
// setTimeout(() => document.body.style.background = 'LemonChiffon', 2000);
// setTimeout(() => document.body.style.background = 'LightGoldenrodYellow', 3000);
// setTimeout(() => document.body.style.background = 'PapayaWhip', 4000);
// setTimeout(() => document.body.style.background = 'Moccasin', 5000);
// setTimeout(() => document.body.style.background = 'PeachPuff', 6000);
// setTimeout(() => document.body.style.background = 'PaleGoldenrod', 7000);
// setTimeout(() => document.body.style.background = 'Khaki', 8000);
// setTimeout(() => document.body.style.background = 'DarkKhaki', 9000);

// }, 10000);


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



//мигалка 
let cvet = document.getElementsByClassName('rec');
let cvet1 = document.getElementsByClassName('container');

setInterval(() => {
setTimeout(() => {
  cvet[0].style.background = "#d195ff";
  const tes = document.body.childNodes[1];
  cvet[0].style.borderRadius = "23px";
}, 100);

setTimeout(() => {
  cvet[0].style.background = "#dda0ff";
  const tes = document.body.childNodes[1];
  cvet[0].style.borderRadius = "25px";
}, 200);
}, 200);
// мигалка


let arr = Array.from(document.body.childNodes);  
arr.forEach((elem) => console.log(elem)); // вывод всех дочерних элементов боди массивом


// alert(document.body.childNodes[1]) // вывод одного из детей html 

// alert(document.getElementsByClassName('rec')[0].parentNode === document.getElementById('container')); // проверка, является ли .container родителем .rec 




// let td = (table.rows[0].cells[0]);
// td.style.background = 'red';
// td = (table.rows[1].cells[1]);
// td.style.background = 'red';
// td = (table.rows[2].cells[2]); ТАК НЕ НАДО, если нужно закарасить ячейки наискосок - ОБРАЩЕНИЕ К ЯЧЕЙКАМ ТАБЛИЦЫ
// td.style.background = 'red';
// td = (table.rows[3].cells[3]);
// td.style.background = 'red';
// td = (table.rows[4].cells[4]);
// td.style.background = 'red';






// урок 1 модель документа dom

console.log(innerHeight, 'высота окна'); // проверка высоты окна браузера

console.log(innerWidth, 'ширина окна'); // проверка ширины окна браузера 

document.body.style.background = "green"; // замена цвета фона страницы

setTimeout(() => {document.body.style.background = ''}, 1500); // возврат фона через полторы секунды

console.log(navigator.platform); // определение операционки


// урок 2 навигация по dom

//2.1
console.log('--------------------------------------------------');
console.log('--------------------------------------------------');
let html = document.documentElement; // ссылка на объект html
let body = document.body; //  ссылка на body
let head = document.head; // ссылка на head

console.log(html, head, body) //  'вывод html, body и head в консоль'


//2.2 перебор всех узлов boby 
//2.2.1
console.log('--------------------------------------------------');
console.log('перебор дочерних узлов body');
for (let i = 0; i < document.body.childNodes.length; i++) {
  console.log(document.body.childNodes[i]);
}
console.log('-------------------------мой аналог-------------------------');
console.log('--------------------------------------------------');
let lk = Array.from(document.body.childNodes)
lk.forEach((ch) => console.log(ch))

//2.2.2 перебор через for of
console.log('--------------------------------------------------');
console.log('перебор дочерних узлов с помощью for of');
for ( let allChild of document.body.childNodes) {
  console.log(allChild);
}

//2.2.3 преобразование коллекции дочерних элементов body в массив с последующим перебором с помощью forEach 
console.log('--------------------------------------------------');
console.log('преобразование коллекции дочерних элементов body в массив с последующим перебором с помощью forEach')
let arrAllChilds = Array.from(document.body.childNodes); // преобразовали в массив
arr.forEach((child) => console.log(child)); // непосредственный перебор


//2.3.1 вывод первого и последнего дочернего элемента
console.log('--------------------------------------------------');

console.log('вывод первого дочернего элемента body');
let first = document.body.firstChild;
console.log(first);

console.log('вывод последнего дочернего элемента body');
let last = document.body.lastChild;
console.log(last);

console.log('--------------------------------------------------');
console.log('альтернативный вывод первого дочернего элемента body');
let fir = document.body.childNodes[0];
console.log(fir)

console.log('альтернативный вывод последнего дочернего элемента body');
let las = document.body.childNodes[document.body.childNodes.length-1];
console.log(las);
console.log('--------------------------------------------------');
console.log('--------------------------------------------------');
console.log('эксперимент: альтернативный вывод последнего дочернего элемента containerSlides');
let rec = document.getElementById('containerSlides').childNodes[document.getElementById('containerSlides').childNodes.length-1];
console.log(rec);

//2.3.2 проверка, существуют ли дочерние элементы у body
console.log('--------------------------------------------------');
console.log('проверка, существуют ли дочерние элементы у body');
let yesOrNo = document.body.hasChildNodes();
console.log(yesOrNo);


//2.4 вывод элементов только из DOM без комментов и текстовых узлов
console.log('--------------------------------------------------');
console.log('вывод элементов только из DOM без комментов и текстовых узлов');
for (let childr of document.body.children) {
  console.log(childr);
}

//2.5 вывод соседнего элемента от текущего
console.log('--------------------------------------------------');
console.log('вывод соседнего элемента от текущего');
console.log('левый сосед');
console.log(document.body.previousSibling); // выведет текстовый узел, если head и body будут в одной строе, то выведет head
console.log('правый сосед, здесь вариант с DOM элементами без текста(nextElementSibling вместо nextSibling)');
console.log(document.head.nextElementSibling);

//2.6 Вывод родителя текущего элемента body
console.log('--------------------------------------------------');
console.log('Вывод родителя текущего элемента body');
console.log(document.body.parentNode);

console.log('--------------------------------------------------');
console.log('--------------------------------------------------');
// урок 3 методы поиска элементов в DOM: querySelector, querySelectorAll, getElementById

//3.1 getElementById
console.log('поиск элемента по id');
let divElem = document.getElementById('container');
console.log(divElem);
//либо
console.log(container); // лучше не использовать


// 3.2 querySelectorAll
console.log('--------------------------------------------------');
console.log('вывод li всех только маркированного списка ul');
let list = document.querySelectorAll('ul > li'); // ('ul > li:first-child') - выбор первого элемента
for (let val of list) {
console.log(val);
}

// 3.3 querySelector
console.log('--------------------------------------------------');
console.log('вывод первого li только нумерованного списка ol');
let listе = document.querySelector('ol > li'); 
console.log(listе);

console.log('--------------------------------------------------');
//3.4 matches - подходит ли элемент под указанные селекторы 
let list1 = document.querySelectorAll('ul > li');
for (let item1 of list1) {
  if(item1.matches('li.star')) {
  console.log(item1)
  }
}
console.log('--------------------------------------------------');
console.log('--------------------------------------------------');
let list2 = document.querySelectorAll('ul > li');
for (let i of list2) {
  if (i.matches('li.planet')) {
    console.log(i);
    i.style.background = 'red';
  }
}

//3.5 closest - поиск ближайшего предка, который соответсутвует css селектору
console.log('--------------------------------------------------');
let li1 = document.querySelector('li')
console.log(li1.closest('.system'))//предок(родитель) system
console.log(li1.closest('.h1')) // null


// урок 4 свойства DOM-узло: nodeName, innerHTML, outerHTML, data, textContent, hidden

// 4.1 constructor - узнаем к какому элементу относится тот или иной DOM узел
console.log('--------------------------------------------------');
console.log('узнаем к чему относится DOM-узел body');
console.log(document.body.constructor.name ); //
console.log(document.querySelector('ul').constructor.name)

// 4.2 определение имени узла по свойству nodeName и tagName
console.log('--------------------------------------------------');
console.log('сойство nodeName у боди:', document.body.nodeName);
let com = document.body.firstChild;
console.log('сойство nodeName у коммента:', com.nodeName); // коммент записан без переноса строки
console.log('сойство tagName у боди:', document.body.tagName);
// у коммента нет tagName, как и у остальных DOM элементов без тега

// 4.3 innerHTML - позволяет читать и изменять содержимое тегов элементов
console.log('--------------------------------------------------');
let h1 = document.body.firstChild.nextSibling; // обратились к заголовку, сначало обратившись к комменту
console.log(h1.innerHTML); // содержимое заголовка
setTimeout(() => h1.innerHTML = '<u>измененный заголовок</u>', 2000) // заменили содержимое через 2 сек

console.log('--------------------------------------------------');
// 4.4 outerHTML - замена всего тега
setTimeout(() => h1.outerHTML = '<h2>теперь заголовок второго уровня, на строке 296<h2/>',4000);

// ДЛЯ КОММЕНТОВ И ТЕКСТОВЫХ ЭЛЕМЕНТОВ ИСПОЛЬЗУЕТСЯ НЕ innerHTML, а data (пример: com.data = '123')


//4.5 textContent - вывод текста тегов элементов без самих тегов
console.log('--------------------------------------------------');
console.log('вывод текстового содержимого body');
console.log(document.body.textContent);

// для скрытия таега используется hidden (пример h1.hidden)

















