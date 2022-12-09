
// function eachCons(array, n) {
//   let ar = []
//  ar.push([array[0], array[1]], [array[1], array[2]] )
//   return ar
// }

// console.log(eachCons([1,2,3,4,5,6], 2))



// let myArray = [1,2,3,4,5,6]
// for(let i = 0; i <= myArray.length + 1; i++){
// let ar = [];
//   ar.push(myArray[0], myArray[1])
//   myArray.shift()
//   console.log(ar)
// }



// function eachCons(arr, n) {
// const r = [];
// for(let i = 0; i <= arr.length - n; i++){
//   const chunk = [];
//   for(let j = i; j < i + n;j++){
//     chunk.push(arr[j])
//   }
//   r.push(chunk)
// }
// console.log(r)
// }
// eachCons([1,2,3,4], 2)


        

// function eachCons(arr, n) {
//   let k = n
//   let count = [];
//   for(let i = 0; i <= arr.length - k; i++){  
//     let count2 = [];
//     for(let j = i; j < arr.length; j++){ 
//       if(j < n){
//         count2.push(arr[j])
//       }
//     }
//     n++
//     count.push(count2)
//   }
//   return count 
// }

// console.log(eachCons([1,2,3,4,5,6,7,8], 3));

        
// function between(a,b) {
//   let arr = [];
//   for(let i = a; i <= b; i++){
//     arr.push(i)
//   }
//   return arr
  
// }
// console.log(between(2,6))

// function toFreud(string){
//   let word = '';
//   if(string !== ''){word = string.split(' ')
//   for(let i = 0; i<word.length; i ++){
//     word[i] = 'sex'
//   }
//   word = word.join(' ')
//   return word}
//   else { return ''}
// }

// console.log(toFreud(""))



// базовые 
// 1
// let fn = (a, b) => a * b
// console.log(fn(2,3))

//2
// let fn = (name, surName, age) => {
//   return `Привет ${name} ${surName} с возрастом ${age}`
// }
// console.log(fn('иван','петров', 17))

//3
// let fn = (m) => {
//   if(m == 'm' || m == 'M') return 'man'
//   else if(m == 'f' || m =='F' ) return 'women'
//   else return 'mr.trance'
// }
// console.log(fn('q'))

//4
// let fn = (num) => {
//   if(num === 1) return 'понедельник'
//   if(num === 2) return 'вторник'
//   if(num === 3) return 'среда'
//   if(num === 4) return 'четверг'
//   if(num === 5) return 'пятница'
//   if(num === 6) return 'суббота'
//   if(num === 7) return 'воскресение'
//   else return 'введите число от 1 до 7'
// }

// console.log(fn(8))

//5
// let fn = (str) => {
//  let spl = str.split('.')
//  let fin = [];
//   for(let i = 0; i < spl.length; i++){
//     let splLet;
//     splLet = spl[i].split(' ');
//     fin = fin + splLet[0] + ' ';
//   }
//   return fin
//   }

// console.log(fn('1мама мыла раму.2мама мыла раму.3мама мыла раму.4мама мыла раму.'))


//6
// let time = new Date().getHours();
// let goodTimeOfDay = (name) => {
//   if(time >= 0 && time < 6) return `good night ${name}`;
//   else if(time >= 6 && time < 10) return `good morning ${name}`;
//   else if(time >= 10 && time < 16) return `good afternoon ${name}`;
//   else return `good evening ${name}`;
// }

// console.log(goodTimeOfDay('slava'));

//7
// function peopleAge (age){
//   if(age <= 17) console.log(' ребенок');
//   else if(age <= 30) console.log(' молодой');
//   else if(age <= 55) console.log(' зрелый');
//   else console.log(' старый');
//   return 
// }
 

// //8 
//  function fn (name, age){
// console.log( `${name} имеет возраст ${age} и он `) 
// console.log(peopleAge(age))
// return 
// }
// console.log(fn('slava', 22));


// массивы
// //1
// function intEven (arr){
//   for(let i = 0; i< arr.length; i++){
//     if(arr[i]%2 === 0){
//       return false
//     }else{
//       return true
//     }
//   }
// }
// console.log(intEven([1, 2, 4]));

//2
// function intOdd (arr){
//   for(let i = 0; i< arr.length; i++){
//     if(arr[i]%2 !== 0){
//       return false
//     }else{
//       return true
//     }
//   }
// }
// console.log(intEven([2, 2, 4]));


//3
// function multiple5 (arr) {
//   let ar = [];
// for(let i = 0; i < arr.length; i++){
//   if(arr[i]%5 === 0 && arr[i]> 0){
//     ar.push(arr[i]);
//   }
// }
// return ar
// }
// console.log(multiple5([1, -2, 2,3,4,5,6]));

//4
// function average(arr){
//   let sum = 0;
//   for (let i = 0; i< arr.length; i++){
//     sum = sum + (arr[i]/arr.length) 
//   }
//   return sum.toFixed(2);
// }
// console.log(average([1,2,3.21121]));

//5
// function transferLastToBeginn(arr){
// let ar = arr.pop();
// arr.unshift(ar);
// console.log(arr);
// }
// transferLastToBeginn([1,2,3,4,5]);

//6
// function staff(employee){
//   let ar = [];
//   for(let i = 0; i < employee.length; i++){
//     ar.push(`Имя: ${employee[i].name} Возраст: ${employee[i].age}`);
//   }
//   return ar;
// }
// console.log(staff([{name: 'иван', age: 21}, {name: 'диван', age: 24}, {name: 'пухан', age: 32}]));


//Объекты
//1
// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// }
// let sum = 0;
// for(let key in salaries){
//   sum = sum + salaries[key]
// }
// console.log(sum)

//2
// let menu ={
//   width: 200,
//   height: 300,
//   title: 'my menu'
// }
// function mult(){
//   for (let key in menu){
//     if(typeof menu[key] === 'number'){
//       menu[key]= menu[key] *2
//     }
//   }
// }
// mult()
// console.log(menu)

//3

// function showStep() {console.log(this.name, this.step)}
// function up(){this.step ++}
// function down(){this.step --}

// class User{
//   constructor(text) {
//     this.name = text
//     this.step = 0
//   }
//     showStep() {console.log(this.name, this.step)}
//     up(){this.step ++}
//     down(){this.step --}
// }

// let user1 = new User('slava');
// user1.up();
// console.log(user1.step);

//dom
//1
// document.getElementById('button1').addEventListener('click', () => {
//   alert('привет')

// })


//2
// document.getElementById('button1').addEventListener('click', () => {
//   document.getElementById('input1').value= 'slavamryasov@mail.ru'
// })

//3
let inp1 = document.getElementById('input1')
let regEm = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let inp2 = document.getElementById('input2');
 let regPh = /^[\d\+][\d\(\)\ -]{4,14}\d$/
document.getElementById('button1').addEventListener('click', () => {  
  if(inp1.value === ''){
    alert('введите адрес почтового ящика')
  }
  else if(regEm.test(inp1.value)){
    alert('молодец email')
  }
  else{
    alert('неправильный формат почтового ящика')
  }
})

document.getElementById('button1').addEventListener('click', () => {  
  if(inp2.value === ''){
    alert('введите номер талефона')
  }
  else if(regPh.test(inp2.value)){
    alert('молодец phone')
  }
  else{
    alert('неправильный формат номера телефона')
  }
})

//4
let saveInp1;

document.querySelector('#button2').addEventListener('click', ()=>{
  saveInp1 = inp1.value;
  inp1.value = inp2.value;
  inp2.value = saveInp1
})

//5
document.querySelector('#button3').addEventListener('click', ()=>{
  document.getElementById('input1').setAttribute('disabled',true)
})
document.querySelector('#button4').addEventListener('click', ()=>{
  document.getElementById('input1').removeAttribute('disabled')
})

//6
document.querySelector('#button5').addEventListener('click', ()=>{
  if(document.getElementById('square1').hasAttribute('hidden') === false){
  document.getElementById('square1').setAttribute('hidden',true)
  document.querySelector('#button5').textContent = 'показать зеленый квадрат'}
  else if(document.querySelector('#button5').textContent == 'показать зеленый квадрат'){
    document.getElementById('square1').removeAttribute('hidden');
    document.querySelector('#button5').textContent = 'скрыть зеленый квадрат'
  }
})

//7

let square2Red = document.querySelector('#square2');

square2Red.addEventListener('mouseover', ()=> {
  document.querySelector('#square2').style.background ='blue'
})
square2Red.addEventListener('mouseout', ()=> {
  document.querySelector('#square2').style.background ='red'
  console.log('sqr')
})


//8
// let sqr = document.querySelector('#sqrAll').children
//   for(let i= 0; i < sqr.length;i++){
//      sqr[i].addEventListener('mouseover', ()=>{
//       sqr[i].style.background = 'green' 
//      })
//   }
//   for(let i= 0; i < sqr.length; i++){
//     sqr[i].addEventListener('mouseout', ()=>{
//      sqr[i].style.background = 'red' 
//     })
//  }

let save =[]
let sqr = document.querySelector('#sqrAll').children
  for(let i= 0; i < sqr.length;i++){
    sqr[i].addEventListener('click', ()=>{
      save.unshift(sqr[i])
      save[0].setAttribute('style', 'background:green')
      if(save[1] !== undefined){
      save[1].setAttribute('style', 'background:red')
      save.pop()}
    })
  }










