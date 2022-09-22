//1111111111111111111111 // 

// let myName

// // console.log(myName) // undefined

// // myName = 'Slava'

// // console.log(myName)


// const myName = 'Slava'
// console.log(myName)


//222222222222222222222222222

// const objectA = {
//   a: 10,
//   b: true
// }

// const copyOfA = objectA
// copyOfA.c = 'abc'

// copyOfA.a = 20
// console.log(objectA)
// console.log(copyOfA)


// const objectB = {
//   a: 20,
//   b: false,
//   c: 'slava'
// }
// console.log(objectB)

// copyObjectB = objectB
// console.log(copyObjectB)
// copyObjectB.b = true
// copyObjectB.d = false
// console.log(objectB)
// console.log(copyObjectB)




//333333333333333333333333333333333
// function a() {
//   console.log('hello world')
// }

// a() // 'hello world'

// a = 10

// a() // Uncaught TypeError: a is not a function




// const a = () => {
//   console.log('hello world')
// }

// a() // 'hello world'

// a = 10 // Assignment to constant variable.

// a()


//44444444444444444444444444444444444444444

// const myCity = {
//   city: 'kazan',
//   popular: true,
//   country: 'Rus'                                      
// }
// console.log(myCity.city) 
// myCity.city = 'sarapul' // поменяли значение свойства объекта
// console.log(myCity.city) 
// console.log(myCity.popular)
// myCity.size = 'small'
// delete myCity.popular 
// console.table(myCity)


// //5555555555555555555555555555555555

// const myCity = {
//   city: 'kazan',
// }

// myCity['popular'] = true
// console.log(myCity) // {city: 'kazan', popular: true}

// const countryPropertyName = 'country'

// myCity[countryPropertyName] = 'Rus'

// console.log(myCity) // {city: 'kazan', popular: true, country: 'Rus'}
// console.log(countryPropertyName)


//777777777777777777777777777777777777777777777
// const name = 'slava'
// const postsQty = 23

// const userProfile = {
//   name: name,
//   postsQty: postsQty,
//   hasSignedAgreement: false 
// }
// console.log(userProfile)



// const name = 'slava'
// const postsQty = 23

// const userProfile = {
//   name,
//   postsQty,
//   hasSignedAgreement: false 
// }
// console.log(userProfile)


//88888888888888888888888888888888888888

// const myCity = {
//   city: 'kazan',
//   cityGreeting: function () {
//     console.log('Greetings!!!')
//   }
// }
// myCity.cityGreeting()


// const myCity = {
//   city: 'kazan',
//   cityGreeting: () {             //сокращено, без function
//     console.log('Greetings!!!')
//   }
// }
// myCity.cityGreeting()



//999999999999999999999999 JSON

// const a = {
//   'userId': 1,
//   'id': 1,                                //пример1
//   'title': 'Test title',
//   'status': {
//     'completed': false
//   }
// }

// console.log(JSON.stringify(a))



// const b = '{"userId":1,"id":1,"title":"Test title","status":{"completed":false}}'
// console.log(JSON.parse(b))



// const post = {
//   title: 'My post',
//   likesQty: 5
// }

// const postStringify = JSON.stringify(post) // присвоили переменной результат конвертации объекта в строку
// console.log(postStringify)                // вывели переменную, значение которого строка 
// console.log(JSON.parse(postStringify))    // конвертировали строку в объект JS и вывели в консоль 


//10 копирование примитивов и ссылочного типа

// const a = 10
// let b = a
// b = 30

// console.log(a) // 10
// console.log(b) // 30


// const person = {
//   name: 'slava',
//   age: 25
// }

// person.age = 11
// person.isAdult = true

// console.log(person.age)  //22
// console.log(person.isAdult) // true



// const person = {
//   name: 'slava', 
//   age: 25
// }

// const person2 = person

// person2.age = 26
// person2.isAdult = true

// console.log(person.age)
// console.log(person.isAdult)



//11 копирование ссылочного типа без мутаций

////assign

// const person = {
//   name: 'slava',
//   age: 25
// }

// const person2 = Object.assign({}, person) // в фигурных пустой объект(который создаем),после запятой 
//                                           // объект, который копируем

// person2.age = 22

// console.log(person.age)
// console.log(person2.age)


// //spread

// const person = {
//   name: 'slava',
//   age: 25
// }

// const person2 = {...person}

// person2.name = 'alex'
// console.log(person.name) // 'slava'
// console.log(person2.name) // 'alex'


//полностью избегаем мутации

// const person = {
//   name: 'slava',
//   age: 25
// }

// const person2 = (JSON.parse(JSON.stringify(person)))
// person2.name = 'alex'

// console.log(person.name) // slava
// console.log(person2.name) // alex



// 12 ФУНКЦИИ

// let a = 5
// let b = 3

// let c

// c = a + b
// console.log(c)

//  a = 8
//  b = 12

// c = a + b
// console.log(c)


// let a = 5
// let b = 13

// function sum(a, b) {
//  const c = a + b
//  console.log(c)
// }

// sum(a, b)



// function myFn(a, b) {
//   let c
//   a = a + 1
//   c = a + b
//   return c  // возврат переменной c 
// }

// console.log(myFn.name) // получили имя функции
// console.dir(myFn.name) // получили имя функции в свойстве name, объекта myFn



//  function myFn(a, b) {
//   let c
//   a = a + 1 // увеличиваем a на 1
//   c = a + b
//   return c  
// }
// const sum = myFn(2, 6)    // присвоили результат вызова функции переменной
// console.log(sum)         // вывели переменную которой присвоен результат функции 



//13 ПЕРЕДАЧА ЗНАЧЕНИЯ ПО ССЫЛКЕ

// const personeOne = {
//     name: 'slava',
//     age: 25
// }

// const personTwo = {
//     name : 'alex',
//     age: 55
// }

// function increasePersoneAge(person) {
// person.age += 1  // можно ++
// return person
// }

// increasePersoneAge(personeOne)
// increasePersoneAge(personTwo)
// console.log(personeOne.age, personTwo.age)


// const counter = {
//    meaning: 12 
// }

// function addition (plusOne) {
//     plusOne.meaning ++
// }

// addition(counter)
// console.log(counter)

//14 ПЕРЕДАЧА ЗНАЧЕНИЯ ПО ССЫЛКЕ БЕЗ МУТАЦИИ

// Написать функцию счетчик при вызове которой в первый раз будет ввыведен первй позьзователь с лайком 1
// при втором вызове будет выведен второй пользователь с лайком 2 
// const userOne = 'первый пользователь'
// const userTwo = 'второй пользователь'

// const userLike = {
//   name : ' ',
//   like : null
// }

// if (like)
// function like(tap) {
//   const 
// }





// const personOne = {
//   name: 'slava',
//   age: 25
// }

// function agePlus(plusOne) {
// const plusOneYear = Object.assign({}, plusOne)
// plusOneYear.age ++
// return plusOneYear
// }

// const addedOneYear = agePlus(personOne)
// console.log(personOne.age)
// console.log(addedOneYear.age)



// const personOne = {
//   name: 'slava',
//   age: 25
// }

// function agePlusOne(agePlus) {
//   const forFunction = Object.assign({}, agePlus)
//   forFunction.age ++
//   return forFunction
// } 

// const addAge = agePlusOne(personOne)
// console.log(personOne)
// console.log(addAge)


//15 КОЛБЭК ФУНКЦИИ

// function myName()  {
//   console.log('matrix')
// } 

// setTimeout(myName, 2000)


//   function myName(name, fam) {
//   let c = name + fam
//   console.log(c)
//   }
//  function printMyName(myName) {
//   console.log('это мое имя')
//   myName()
//  }

//  printMyName(function(){
//   myName('slava', ' mryasov')
//  })


// function sum(a, b) {
//   let c = a + b
//   console.log(c) 
// }

// function sumLog(y){
//   console.log('сложение');
// y()
// }

// sumLog(function(){
//   sum(4, 5)
// })

// console.log(typeof sum)




// 16 spread 
// const button = {
//   width: 200,
//   text: 'pupa'
// }

// const redButton = {
//   ...button,
//   color: 'red'
// }

// console.table(redButton)
// console.table(button)



// const buttonInfo = {
//   text: 'buy'
// }

// const buttonStyle = {
//   width: 200,
//   height: 100,
//   color: 'red'
// }

// const button = {
//   ...buttonInfo,
//   ...buttonStyle
// }

// console.table(button)


//17 конкатенация строк

//  const hello = 'hello'
//  const world = 'world'

//  const greeting = hello + ' ' + world

//  console.log(greeting)




// // шаблонная строка

//  const hello = 'hello'
//  const world = 'world'

//  const greeting = `${hello} ${world}`

//  console.log(greeting)



// const myName = 'меня зовут Слава'
// const myCity = 'я живу в городе Казань'

// const information = `${myName}, ${myCity}`

// console.log(information)


// const myName = 'Слава'
// const myCity = 'Казань'

// const information = `Меня зовут ${myName}, я живу в городе ${myCity}`

// console.log(information) 



// 18 ПРИСВАИВАНИЕ ФУНКЦИОНАЛЬНОГО ВЫРАЖЕНИЯ ПЕРЕМЕННОЙ

// const myFunction = function(a, b) {
//   let c
//   a = a + 1
//   c = a + b
//   return c
// }

// console.log(myFunction(5, 3))



// 19 стрелочне функции

// const myFunction = (a, b) => {
//   let c
//   a = a + 1
//   c = a + b
//   return c
//  }

//  console.log(myFunction(2, 4))



//  setTimeout(() => {
//   console.log('отложенной сообщение')
//  }, 2000)



// 20 Значения параметров функции по умолчанию

//   function multByFactor(value, multiplier = 1) {
//   return value * multiplier
//  }

//  console.log(multByFactor(10, 2),  multByFactor(5))



//  анонимное функциональное выражение 

//  const myFn = function(value, multiplier = 1) {
//   return value * multiplier
//  }

//  console.log(myFn(10, 2),  myFn(5))



//стрелочная функция 

//  const myFn = (value, multiplier = 1) => {
//   return value * multiplier
//  }

//  console.log(myFn(10, 2),  myFn(5))



// const newPost = function(post, addedAt = Date()) {
//  const objForFn = {
//   ...post,
//   addedAt}
//   return objForFn
// }

// const firstPost = {
//   id: 1,
//   name: 'slava',
// }

// console.log(newPost(firstPost))





// const newPost = function(post, addedAt = Date()) {
//   const postForFn = Object.assign({}, post, addedAt)
//   return postForFn
// }

// const firstPost = {
//   id: 1,
//   name: ' slava',
// }


// const result = (newPost(firstPost))
// console.log(result)



// 21 - ОБРАБОТКА ОШИБОК 

//  const fnWithError = () => {
//   throw new Error('Some Error')
//  }

//  fnWithError() // вызов фунции

//  console.log('Continue...')




// const fnWithError = () => {
//   throw new Error('Some Error')
//  }

//  try{ 
//   fnWithError() // вызов фунции
//   }
// catch{
//   console.log('Continue...')
//  }


// const fnWithError = () => {
//   throw new Error('Some error')
// }

// try {
//   fnWithError()
// } catch(error){
// console.error(error)
// console.log(error.message)
// }

// console.log('Continue...')


// 22 - МАССИВЫ

// const myArray = [1, 2, 3]
// console.log(myArray)

// const myArray2 =  Array(1, 2, 3)
// console.log(myArray2)



// const myArray = [1, true, 'a']
// console.log(myArray) // [1, true, 'a']

// console.log(myArray[0]) // 1
// console.log(myArray[1]) // true

// console.log(myArray.length) // 3

// myArray.length = 7
// console.log(myArray)



// const myArray = [1, 2, 3, 4]  
// console.log(myArray)             // [1, 2, 3, 4]
// console.log(myArray.length)      // 4

// myArray[2] = 'abc'

// console.log(myArray) // [1, 2, 'abc', 4]
// console.log(myArray.[2]) // 'abc'

// myArray[4] = true

// console.log(myArray) // [1, 2, 'abc', 4, true]
// console.log(myArray.length) // 5



// const myArray = [1, 2, 3]
// console.log(myArray)

// myArray.push(4)

// console.log(myArray)

// myArray.push(true)

// console.log(myArray)


// const myArray = [1, 2, 3]
// console.log(myArray) // [1, 2, 3]

// myArray.pop()

// console.log(myArray) // [1, 2]

// const removedElement = myArray.pop()

// console.log(myArray) // [1]
// console.log(removedElement) // 2



// const myArray = [1, 2, 3]
// console.log(myArray)

// myArray.unshift(true)

// console.log(myArray)

// myArray.unshift('abc')

// console.log(myArray)




// const myArray = [1, 2, 3]
// console.log(myArray) // [1, 2, 3]

// myArray.shift()

// console.log(myArray) // [2, 3]

// const removedElement = myArray.shift() 

// console.log(myArray) // [3]
// console.log(removedElement) // 2


// myArray = [1, 2, 3]
// console.log(myArray) // [1 2 3]

// myArray.push(4)

// console.log(myArray) // [1 2 3 4]

// const del = myArray.pop()

// console.log(myArray)// [1 2 3]
// console.log(del) // 4

// myArray.unshift(4)

// console.log(myArray)// [4 1 2 3]

// const del2 = myArray.shift()
// console.log(del2) // 4

// console.log(myArray) // [1 2 3]








// const myArray = [
//   {name: 'маша', age: 24, budget: 200},
//   {name: 'петя', age: 20, budget: 2500},
//   {name: 'вася', age: 17, budget: 500},
//   {name: 'игорь', age: 33, budget: 9500},
//   {name: 'лена', age: 51, budget: 32500},
//   {name: 'дима', age: 13, budget: 200},
//   {name: 'костя', age: 18, budget: 3000},

// ]

// const myArray2 = myArray.filter((el) => {
//   if (el.age > 20)
//  return 
// })
// console.log(myArray)
// console.log(myArray2)




                                                  //23 - forEach


// const myArray = [1, 2, 3]
// console.log(myArray) // [ 1 2 3 ]

// const res = myArray.forEach(el => console.log(el * 2))

// console.log(res)
// console.log(myArray) // массив не изменился


                                                      //24 - map

// const myArray = [1, 2, 3]
// console.log(myArray) // [ 1 2 3 ]

// const newArray = myArray.map(el => el * 3)

// console.log(myArray) // [1 2 3] массив не изменился
// console.log(newArray) // [3 6 9] новый измененный массив



                                                        //  25 - деструктуризация объектов
   
// const userProfile = { 
//   name: 'slava',
//   commentsQty: 23,
//   hasSignedAgreement: false,
//  }

//  const {name, commentsQty, hasSignedAgreement } = userProfile;

//  console.log(name) // slava
//  console.log(commentsQty) // 23
//  console.log(hasSignedAgreement)
 


// const userProfile = {
//   name: 'slava',
//   id: 12,
//   hasSignedAgreement: false,
// }

// const { name, id, hasSignedAgreement } = userProfile
// console.log(name, id, hasSignedAgreement)
// console.log(name, id, hasSignedAgreement)
// console.log(name, id, hasSignedAgreement)


                                                         //  26 - деструктуризация массивов

  //  const fruits = ['apple', 'banana']
   
  //  const [ fruitOne, fruitTwo ] = fruits // указываем новые переменные в нужном порядке

  //  console.log(fruitOne, fruitTwo)


                                                         //  27 - деструктуризация в функциях

  // const userProfile = {
  //   name: 'slava',
  //   commentsQty: 23,
  //   hasSignedAgreement: false,
  //  }

  //  const userInfo = ({ name, commentsQty }) => {
  //   if (!commentsQty) {
  //     return `User ${name} has no commenst`  
  //   }
  //   return `User ${name} has ${commentsQty} comments`
  //  }

  //  console.log(userInfo(userProfile) )


                                                          // 28 - деструктуризация в функциях
  const userProfile = {
    name: 'slava',
    commentsQty: 22,
    hasSignedAgreement: false
  }

  const userInfo = ({ name, commentsQty }) => {
    if (!commentsQty) {
       return `пользователь ${name} пока не оставил коментарии`
    }
    else {
      return `пользователь ${name} комментировал ${commentsQty} раза`
    }
  }

  const userCommensts = userInfo(userProfile)
  console.log(userCommensts)




















//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------


// const myArray = [
//   {name: 'маша', age: 24, budget: 200},
//   {name: 'петя', age: 20, budget: 2500},
//   {name: 'вася', age: 17, budget: 500},
//   {name: 'игорь', age: 33, budget: 9500},
//   {name: 'лена', age: 51, budget: 32500},
//   {name: 'дима', age: 13, budget: 200},
//   {name: 'костя', age: 18, budget: 3000},
// ]



// const newArray = myArray.filter(el => {
//   if (el.name.includes('м'))
//   return el.name
// })

// const name = newArray.map (nam => nam.name)
// console.log(name)



// const newArray = myArray.reduce((accum, name) => {
//   if (name.name.includes('м'))
//  accum = [accum.name ,name.name];
//  return accum
// } )
// console.log(newArray)





// const numbers = [4, 3, 3, 1, 15, 7, 4, 19, 19]; // исходный массив

// // получаем объект в котором ключ - это элемент массива,
// // а значение - количество вхождений
// // { '4': 2, '3': 2, '1': 1 ... }
// const countItems = numbers.reduce((acc, item) => {
//   acc[item] = acc[item] ? acc[item] + 1 : 1; // если элемент уже был, то прибавляем 1, если нет - устанавливаем 1
//   return acc;
// }, {});

// // обрабатываем ключи объекта
// const result = Object.keys(countItems).filter((item) => countItems[item] > 1);
// console.dir(result); // => ['3', '4', '19']





// const getCounts = function (letter) {
//   const lett = letter.split('') 
//   return lett
// }
// const arr = getCounts('aasabbbbddd')

// const countItems = arr.reduce((accum, item) => {
//   accum[item] = accum[item] ? accum[item] + 1 : 1; 
//   return accum;
// }, {});

// console.log(countItems)




// const getCounts = function (letter) {
//   const lett = letter.split('') 
//   return lett
// }
// const arr = getCounts('aasabbbbddd')

// const countItems = arr.reduce((accum, item) => {
// if (accum[item] = accum[item]) {
//   accum[item] = accum[item]  + 1;
// } else {
//   accum[item] = 1;
// }
// return accum
// },{});

// console.log(countItems)



// const myArray = [10, 20, 30, -36, 40, -10]

// const getSum = myArray.reduce((accum, numb) => {
//   accum = accum + numb
//   return accum
// })

// console.log(getSum)


//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------
