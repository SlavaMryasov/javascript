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
//   cityGreeting: () {             //сокращено без function
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

const b = '{"userId":1,"id":1,"title":"Test title","status":{"completed":false}}'
console.log(JSON.parse(b))

