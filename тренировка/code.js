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
let hi = document.getElementById('earth');
setInterval(() => hi.hidden = !hi.hidden, 1000); 

capsCar = document.querySelector('ol').firstChild.nextSibling;
setTimeout(() => capsCar.innerHTML = 'CAR',1500);

// // let bodyy = document.body;

// // bodyy.myStyle = {
// //   background: 'red',
// //   length: 20,
// // }

// // bodyy.getBackground = function () {
// //   return bodyy.myStyle.background;
// // }

// // console.log(bodyy.getBackground());
// // console.log(bodyy.myStyle.background);
// // console.log(bodyy.nodeName);
// // console.log(bodyy.tagName);

// // console.dir(bodyy);
// // let odin = document.getElementsByClassName('star')[1];
// // console.dir(odin);
// // console.log(odin.hasAttribute('def'));
// // console.log(odin.getAttribute('def'));
// // odin.setAttribute('def', 'значе');
// // console.log(odin.getAttribute('def'));
// // odin.removeAttribute('def');
// // console.log(odin.hasAttribute('def'));

let chek = document.getElementById('input');
// // console.dir(chek);
// // setTimeout(() => chek.checked = true, 3000);

// setTimeout(() => {
//   console.dir(chek.checked)
// }, 3200);

let laba =  document.getElementById('ol');
 
chek.addEventListener('click', () => {
  if (chek.checked == true) {
    laba.hidden = true;
  }
  else {
    laba.hidden = false;
  }
});
// // let flSkip = false;
// // for (let i of document.querySelectorAll('[cell-red]')) {
// //   if(!flSkip) i.setAttribute('cell-red', 'lightRed');
// //   flSkip = !flSkip
// // }

// урок 5 - работа с нестандартными свойствами DOM-элементов: getAttribute, setAttribute, dataset

//5.1 общее
console.log('--------------------------------------------------');
console.log('добавляем новые свойства объету body')
let body1 = document.body;
body1.myStyle = 'color: red'; // добавили новое свойство myStyle к body
console.log(body1.myStyle, '- новое свойство');

console.log('--------------------------------------------------');
console.log('присваеваем не строку, как в примере выше, а объект и вызываем свойство lenght');
let body2 = document.body;
body2.myStyle = {
  length: 20,
  color: 'red',
}
console.log(body2.myStyle.length);

console.log('--------------------------------------------------');
console.log('добавляем метод вызова свойства color к body');
let body3 = document.body;
body3.myStyle = {
  length: 20,
  color: 'red',
}
body3.getColor = function() {
  return this.myStyle.color;
}
console.log(body3.getColor());

console.log('--------------------------------------------------');
console.log('атрибут id автоматически присваивается объету дерева, если оно записано в верстке.')
console.log('Этог можно увидеть, если вывести объект с помощью console.dir')
console.log('--------------------------------------------------');

//5.2 методы для нестандартных атрибутов: hasAttribute, getAttribute, removeAttribute, Attribute, dataSet
console.log('проверяем есть ли атрибут def у odin:')
let odin = document.getElementById('odin');
console.log(odin.hasAttribute('def'));

console.log('добавляем атрибут def со значением в odin');
odin.setAttribute('def', 'значение');

console.log('получаем значение атрибута:');
console.log(odin.getAttribute('def'));

console.log('меняем значение атрибута');
odin.setAttribute('def', 'новое значение');

console.log('проверяем есть ли атрибут def у odin:');
console.log(odin.hasAttribute('def'));

console.log('получаем значение атрибута:');
console.log(odin.getAttribute('def'));

console.log('удаляем атрибут');
odin.removeAttribute('def');

console.log('проверяем есть ли атрибут def у odin:');
console.log(odin.hasAttribute('def'));

console.log('вывод всех атрибутов у odin');
for (let atr of odin.attributes) console.log(atr);


//5.3 практика использования нестандартных атрибутов

let inp = document.querySelectorAll('[data-cell-red]'); // нашли все элементы с атрибутом cell-red
for (let cell of inp) {
  let attr = cell.getAttribute('data-cell-red'); //получили значение атрибута у элементов с атрибутом cell-red
  cell.style.background = attr; // поменяли цвет, который указан в атрибуте в html
}

console.log('-------------------повторение-1-5-урок------------');
console.log('-------------------повторение-1-5-урок------------');
console.log('-------------------повторение-1-5-урок------------');
console.log('-------------------повторение-1-5-урок------------');
console.log('-------------------повторение-1-5-урок------------');

let ch1 = document.body.childNodes;
for(let ch2 of ch1) console.log(ch2);

console.log('--------------------------------------------------');
let ch3 = Array.from(ch1);
ch3.forEach((ch4) => console.log(ch4));

console.log('--------------------------------------------------');
let ch5 = document.body.childNodes[0];
console.log(ch5);
console.log('--------------------------------------------------');
let ch6 = document.body.children[1];
console.log(ch6);
console.log('--------------------------------------------------');
let ch7 = document.body.firstChild;
console.log(ch7);
console.log('--------------------------------------------------');
let ch8 = document.body.lastChild;
console.log(ch8);

console.log('--------------------------------------------------');
let ch9 = document.body.hasChildNodes();
console.log(ch9);

console.log('--------------------------------------------------');
let ch10 = document.body.children;
for (let ch11 of ch10) console.log(ch11);

console.log('--------------------------------------------------');
let ch12 = document.body.previousSibling.previousSibling;
console.log(ch12);
let ch13 = document.head.nextSibling.nextSibling;
console.log(ch13);

console.log('--------------------------------------------------');
let ch14 = document.body.parentNode;
console.log(ch14);

console.log('--------------------------------------------------');
let ch15 = document.getElementById('car');
console.log(ch15);

console.log('--------------------------------------------------');
console.log(ch15.matches('li'));
console.log('--------------------------------------------------');
console.log(ch15.closest('body'))

console.log('--------------------------------------------------');
let ch16 = document.head.constructor.name;
console.log(ch16);

console.log('--------------------------------------------------');
let ch17 = document.head.nodeName;
console.log(ch17);

console.log('--------------------------------------------------');
ch18 = document.querySelector('ul').textContent;
console.log(ch18);

console.log('--------------------------------------------------');

// let ch19 = document.querySelector('h1');
// console.log(ch19);
// console.log(ch19.innerHTML);
// let ch20 = ch19.innerHTML = 'замен';
// console.log(ch20.outerHTML = '<h3>замена с тегом</h3>')
// let ch19 = document.querySelector('h1');
// console.log(ch19.outerHTML = '<h2> замена с тегом</h2>')

let ch20 = document.getElementById('sun');
console.log(ch20);
ch20.hidden = true;
console.log(ch20);

console.log('--------------------------------------------------');

let attrr = document.getElementsByTagName('table')[0].children[0].children[0].children[1];
attrr.setAttribute('data-color', 'blue');


console.log('-------------------повторение-1-5-урок------------');
console.log('-------------------повторение-1-5-урок------------');
console.log('-------------------повторение-1-5-урок------------');
console.log('-------------------повторение-1-5-урок------------');
console.log('-------------------повторение-1-5-урок------------');

//урок 6 - создание и добавление элементов DOM createElement, append, remuve, insertAjacentHTML

//6.1 -создаем див с помощью createElement добавляем див в дерево с помощью append(добавляем в конец родителя)
console.log('создаем и добавляем див с помощью createElement и append')
let div = document.createElement('div');
div.className = 'msg';
div.setAttribute('id', 'inportant');
div.innerHTML = 'Важная информация!';
document.body.append(div);

console.log('--------------------------------------------------');
//6.2 -создаем див с помощью createElement добавляем див в дерево с помощью prepend(добавляем в начало родителя)
console.log('создаем и добавляем див с помощью createElement и prepend')
let div2 = document.createElement('div');
div2.className = 'msg';
div2.innerHTML = 'невероятно важная информация!!!';
document.getElementById('inportant').prepend(div2);


let ul = document.querySelector('ul');
let firstULi = document.createElement('li');
firstULi.className = 'star';
firstULi.innerHTML = 'полярная';
ul.prepend(firstULi);
firstULi.setAttribute('id', 'polaris');

let secondULi = document.createElement('li');
secondULi.className = 'star';
secondULi.innerHTML = 'плутон';
secondULi.setAttribute('id', 'pluto');
ul.append(secondULi);

console.log('--------------------------------------------------');
//6.3 -создаем ли с помощью createElement добавляем див в дерево с помощью after(добавляем после )
console.log('создаем и добавляем ли с помощью createElement и after')
let thirdULi = document.createElement('li');
thirdULi.innerHTML = 'альтаир';
thirdULi.className = 'star';
thirdULi.setAttribute('id', 'altair');
secondULi.after(thirdULi);

let fourth = document.createElement('li');
fourth.innerHTML = 'вега';
fourth.className = 'star';
fourth.setAttribute('id','vega');
thirdULi.after(fourth);

console.log('--------------------------------------------------');
//6.4 -создаем ли с помощью createElement добавляем ли в дерево с помощью before(добавляем перед)
console.log('создаем и добавляем див с помощью createElement и prepend')
let fifth = document.createElement('li');
fifth.innerHTML = 'альдебаран';
fifth.className = 'star';
fifth.setAttribute('id','aldebaran');
fourth.before(fifth); 

//6.5 - замена всего списка ul
console.log('замена всего списка ul');
let sys = document.getElementById('system');
let ull = document.querySelector('ul');

chek.addEventListener('click', () => {
  if(chek.checked == true) {
  ull.replaceWith(document.createElement('hr'));
  }
  else {
    let hrr = document.querySelector('hr');
    hrr.replaceWith(ull); 
  }
});

//6.6 - создание текстовых элементов с момощью createTextNode
console.log('создание текстовых элементов с момощью createTextNode');
let textNode = document.createTextNode('текстовый элемент');
document.body.append(textNode);

let migalOchka = document.createTextNode('МигалОчка');
document.getElementById('rec').after(migalOchka);
 
let list3 = document.querySelector('ol')
list3.insertAdjacentHTML('afterbegin','<li>Jjjj')
console.log(list3);
















