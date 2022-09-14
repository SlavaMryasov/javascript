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



 setTimeout(() => {
  console.log('отложенной сообщение')
 }, 2000)
