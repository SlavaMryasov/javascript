/*
const newPost = function (post, addedAt = Date())  {
  return {
  ...post,
  addedAt,  
};
}
const firstPost = {
  id: 1,
  author: 'Slava',
}
console.log(newPost(firstPost))
*/

//------------------------------------------

/*
setTimeout(()=>{
  console.log('отложенное')
}, 1000) 
*/

//------------------------------------------
/*
const c = (a, b) => a+b
console.log(c(2, 3))
*/

//------------------------------------------
/*
const mul = (value, multi = 1) => {
  return value * multi
} 
mul(2, 2)
*/

/*
const fnWithError = () => {
  throw new Error('Some error')
}
try {
  fnWithError()
}
catch (error) {
  console.error(error)
  console.log(error.message)
}
console.log('Continue...')
*/
/*
создаем константу приравниваем ее к стрелочной функции в которой 
вброшена ошибка, в труй выводим функцию с ошибкой(не выводится).
в кетч создаем вывод ошибки(красным) и сообщение об ошибке
выводим сообщение продолжить
*/
//------------------------------------------------------------



//  МАССИВЫ
/*
const myArray = [1, true, 'SLAVA',4,5] // 
console.log(myArray)
console.log(myArray.length)
*/

// const myArray = [1, true , 'a', 4, 5, 6]
// console.log(myArray) //[1, true, 'a']

// console.log(myArray[0]) // 1
// console.log(myArray[1]) // true

// var myVar = 1;

// function setMyVar(){
//   myVar = 2; 
// }
// setMyVar();
// console.log(myVar)


// let myLet = 'lalala';
// console.log(myLet)
// myLet = 'alal'
// console.log(myLet)

// let myConst = myLet;
// console.log(myConst)

// let myAge = 25;

// function myFn() {
//   let myAge = 12;
//   console.log(myAge);
// }
// myFn();
// console.log(myAge)


// "use strict"

// age = 25;
// console.log(age);

// var age;

// if (true) {
//   var size = 50;
// }

// console.log(size)

// придумать имя переменной для хранения цвета глаз пользователя сайта
// объявить две переменнные User и userName, присвоить значение Вася переменной userName
// скопировать значение переменной userName в переменную user, вывести в консоль переменную юзер(рузультат Вася)

// let user 
// {
//     userName = 'Вася'
// user = userName;
// console.log(user)
// }

// if (true) {
//   let size = 50;
// }

// console.log(size)



// function myMn(age) {
// if(age > 18){
//   console.log('ты старый, пора на пенсию')
// }
// else{
//   console.log('пока ты молодой')
// }
// if(age < 19) {
//   for (age ; age < 19; age++ )
//   console.log('теперь тебе ' + age)
//   console.log('старпер, так и жизнь пройдет ;D')
//   if(age++){
//     console.log('чуешь, как быстро летит время?')
//   }
//   }

// }
// myMn(12)



// const myArray = [1,2,3]
// console.log(myArray)
// myArray.map((el) => console.log(el*2))
// console.log(myArray)
// console.log(myArray)



          // function myFn (a, b) {
          // let c = a*b
          // return c
          // }
          // console.log(myFn(2, 4))




          //  let name = 'ivan ',
          //    surname = 'petrov ',
          //    age = 17

          //   function myFn (){
          //     let inf = 'привет ' + name + surname + 'возрастом ' + age + ' лет';
          //     return inf
          //   }

          //   console.log(myFn())



              // function myFn(string) {
              //   if (string == 'm'){
              //     return 'вы мужик'            
              //  }
              //  else if (string == 'w'){
              //   return 'вы женщина'
              //  }
              //  else {
              //   return ' вы оно'
              //  }
              // }
              
              // console.log(myFn(''))




              // function day(number) {
              //   if(number == 1){
              //     return 'понедельник'
              //   }
              //    else if(number == 2){
              //     return 'вторник'
              //   }
              //   else if(number == 3){
              //     return 'среда'
              //   }
              //   else if(number == 4){
              //     return 'четверг'
              //   }
              //   else if(number == 5){
              //     return 'пятница'
              //   }
              //   else if(number == 6){
              //     return 'суббота'
              //   }
              //   else if(number == 7){
              //     return 'воскресение'
              //   }
              //   else{
              //     return 'нет такого дня недели'
              //   }
              // }
              // console.log(day(9))




            //   let myString = 'мама мыла раму. пес рубит дрова. редиска метет пол. кошка какает на пол.'

            //   var firstWord = myString.replace(/ .*/,'');

            // console.log(firstWord)

              

// ------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------

Практически все сущности в js это объекты
Объект - набор свойств "имя: значение"

пример объекта: 
{
  visible: true,
  colorDepth: 24,
  title: 'My Image',
  orientation: {
    angle: 0,
    type: 'landscape'
  },
  pixelDepth: 24,
  width: 1440
}

объект нахлдится между парой фигурных скобок и между ними находятся пары( ключ: значение)
значение свойства orientation - вложеный объект(у него есть свои свойства)

Массив в JS - объект
Функция в JS - объект
Число в JS - ведут себя как объекты(примитив)
Строка в JS - ведут себя как объекты(примитив)


console.log('Hello World') - выражение

console - объект
log - метод (это функция которая является значением одного из свойств объекта) - у нашего объекта console есть свойство,
 значение которого - это функция, а такие свойства называются методами(log- метод)
 Точка между console и log - это синтаксис JS , которая называется точечной записью. С помощью точечной записи можно получать доступ к 
 сво2йствам объекта. В данном случае мы получаем с помощью точечной записи доступ к методу объекта, метод называется log
 Скобки это вызов метода - это также часть синтакчиса JS. Поставив скобки после log мы говорим, что хотим вызвать эту функцию,
 которая является методом объекта console - вызавается метод log
 Внутри вызова метода находится аргумент и в данном примере - это просто значение типа строка(string).
 Значение типа строка помощаются в JS либо в одинарные ковычки, либо в двойные -  это описание команды console.log


 Кроме метода log, у console, есть такие методы, как dir - с помощью этого метода можно отобразить все свойства того или иного объета
 с помощью console.dir() - можно увидеть, что любая функция в JS - это объект и увидеть все свойства этого объекта

Также есть метод table() и с помощью него можно в консоли увидеть все свойства объекта, который передан в этот метод
как аргумент(будет находится между скобками) в табличном виде

console.table() - можно использовать в консоли браузера и в интерпритаторе Node.js

Пример: console.log('slava') -  в консоле браузера увидим slava и ответ от интерпритатора JS - undefined - то что видим на этом этапе - 
это результат этого выражения

Любое выражение возвращает значение (в данном случае undefined)

у объекта console - есть ряд свойств(пример: log)

Вызов функции - это выражение, потому что вызов функции всегда возвращает значение


ВЫРАЖЕНИЯ

Любое выражение всегда возвращает значение, это самое важное в понимании того, что такое выражение

Примеры выражений:

'abc' - строка( результат этого выражения - эта же строка)

10 - число - это тоже выражение, если мы передадим это число интерпритатору JS, он нам вернет этоже значение - 10

5+2 - тоже выражение, но здесь испорльзуется оператор + и результатом такого выражения будет число 7

с = 10 - оператор присвоения = и в данном примере число 10 присваивается переменной с названием "с" - это тоже выражение и результатом будет
то значение, которое мы присваиваем переменной "с"

'Good ' + 'Evening' - конкотенация строк с помощью оператора +, результатом этого выражения будет одна строка 'Good Evening'

a <= b || c !== d - выражение с несколькими операторами, такими как "меньше или равно", "или", "неравно"

myFunction(c, d) - вызов функции это тоже выражение, потому что функция всегда возвращает значение
    имя  аргументы


Результатами любого выражения являются значения(через слешы результаты)

'abc' // 'abc'
10 // 10
a + b // сумма 'a' и 'b'
'Good ' + 'Evening' // 'Good Evening'
a <= b || c !== d // true или false
myFunction(c, d) // результат функции


Выражение присваивания a = 20

переменной можно присвоить все что угодно, объект, строку, булевое значение.
Важно понимать, что оператор присвоения = используется в выражении, т.е то что мы видим а = 20 - это выражение, выражение в котором 
значение присваивается переменной.
Здесь мы не объявляем переменную 'а', здесь мы только присваиваем значение


                      Выражения с побочными действиями 

a = 5    - это выражение вернет значение 5, но кроме возвращение, это выражение приведет к выполнению действия,
         значение 5 будет присвоено переменной "а" и позже в коде мы можем обратиться к этой переменной и прочесть это значение
b++    - в этом выражении используется оператор два плюса, он увеличивает значение на единицу, если 'b' было равно 5, то вернется 6

myFunction(c, d) - вызов функции( внутри нее можем выполнять различные действия например обращаться к серверу и получать с него данные, читать 
                                  данные с файла и тд и тп)

выражение, которое не только возвращает значение, но и выполняет какие то действия называется выражением
с побочными действиями (side effects)


                                    ПЕРЕМЕННЫЕ - контейнеры для хранения значений

 Переменные дают возможность повторного доступа к значениям 
 можно перезаписывать значения тех или иных переменных
 Переменную можно рассматривать как коробку и можно положить в нее например свое имя  и на этой коробке можно написать название   
 например myName и в дальнейшем мы можем обратиться к значению этой коробки (распаковать коробку, посмотреть какое значение там находится) 
 и выполнить действия с этим значением. Кроме того можно достать одно значение с этой коробки и положить туда другое значение  
 Можно объединять значения коробок(переменных). Например если у нас есть две строки, присвоенные разным переменным, мы моежм
 орбъединить эти значения и получить новую строку на выходе.

 Переменные рекомендуется называть 

 PascalCase - типы и классы (пример, есть такой класс как Object либо Array)

 DB_PASSWORD - значения известны до запуска приложения и не меняются(например пароли)

 camelCase - для всех остальных случаев(чаще всего)

 НАЗВАНИЯ ПЕРЕМЕННЫХ ДОЛЖНЫ БЫТЬ ПОНЯТНЫМИ!!!!




                          Объявление переменных

ключевые слова для объявления let const var

let и const появились в ECMAScript 6 
ECMAScript - это стандарт JS, который описывает все функции JS, а браузеры применяют этот стандарт

let a    - Объявление переменной с названием "a" (название не понятно, но для примера удобнее). С помощью ключевого слова let
даем инструкцию интерпритатору JS создать новую переменную с названием "a"

a = true    - присваивание значениея true  переменной 'a', переменная была объявлена до этого

const c = 10   - Объявление и присваивание в одной строке

  Разница между let и const

  если объявляем переменную с помощью let(let a = 10), то будет создана переменная 'a' и ей будет присвоено значение '10', далее 
  мы можем переприсваивать значение переменной(новое значение)
  
  Пример: let a = 10  либо   let a
          a = 20             a = 10
                             a = 20

  если используем const, то мы должны в одной строке объявить и присвоить значение переменной
  если попытаемся присвоить новое значение мы получим ошибку       

  ПРАКТИКА ПО СОЗДАНИЮ ПЕРЕМЕННЫХ В ФАЙЛЕ test2.js -1


  Тип переменной определяется типом присвоенного значения
Пример: 
const a = 10  - тип переменной число(Number)
const b = 'abs' - тип переменной строка(String) - переменная b это строка




                                          ТИПЫ - примитивные и ссылочный

Переменная имеет значение => значение имеет тип

ПРИМИТИВНЫЕ ТИПЫ 
если мы присваеваем такие значения переменным, то в памяти компа эти переменные будут непосредственно содержать значения, 
поэтому эти типы называются примитивными

string - строка
boolean - логический (true или false)
number - число
null - ноль - явно указываем, что у какой то переменной на данном этапе значение отсутствует(указываем сами)
undefined - не определено(значения не существует)
symbol - символ, с помощью данного типа можно создавать уникальные значения
BigInt(большое целое) - как number, но оно так же может хранить числа больше двух в 53 степени(к числу добавляется 'n',
что указывает на тип BigInt (19241924124n))

значения примитивных типов:
'Hello World' - строка
undefined - undefined
true - boolean
25 - number


ССЫЛОЧНЫЙ ТИП - всего один

object - объект

Объект - это набор свойств и каждое свойство состоит из названия и значения

Пример: Объект у которого два свойства a и b. Значения ключа(свойства) 'a' - 10, занчение ключа b - true 

 {
  a: 10,
  b: true
 }

 Если мы присваиваем такой объект переменной, то переменная будет хранить лишь ссылку на объект - с массивом тоже самое
         Мы можем иметь несколько одинаковых ссылок в разных местах памяти, которые указывают на один и тот же объект 
            Можно создать сколько угодно переменных ссылающихся на один и тот же объект
                                        
Если мы меняем свойства a и b в объекте (присваиваем новые значения), то поменяв значение свойства объекта в одной 
 переменной , мы поменяем значение в одном месте в памяти и соответственно значения других переменных изменится   

 ПРАКТИКА ПО ССЫЛОЧНЫМ ТИПАМ test2.js -2

Доступ к свойставм того или иного объекта возможен с помощью оператора точка 
                                                                                    const objectA = {
                                                                                      a: 10,
                                                                                      b: true
                                                                                    }
                                                                                    objectA.a = 20

объекту можно добавить новое свойство                                               objectA.c ='abc'




                                                         ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ

    В JS нет необходимости указывать тип переменной, когда мы объявляем переменную или присваиваем ей значение 
Тип переменной будет автоматически меняться в зависимости от ее значения, например:
Если мы изначально присвоили переменной "а" - "abc" ее тип строка,  а потом переприсвоили на'123', то тип переменной автоматически 
изменится на number

JS ДИНАМИЧЕСКИ ТИПИЗИРУЕМЫЙ ЯЗЫК

НЕ НУЖНО НАЗЫВАТЬ ПЕРЕМЕННЫЕ КАК ФУНКЦИИ, ИНАЧЕ ПОСЛЕ СЛУЧАЙНОГО ПЕРЕПРИСВОЕНИЯ ПОЛУЧИМ ОШИБКУ (ЕСТЬ ВЫХОД, ИСПОЛЬЗОВАТЬ const)
пример:
            function a() {
              console.log('hello world')
            }
            a()// 'hello world'
            a = 10
            a() // Uncaught TypeError: a is not a function   - при вызове говорит, что 'a' - это не функция

            ПРАКТИКА ПО ССЫЛОЧНЫМ ТИПАМ test2.js -3         


пример с const:
              const a = () => {
                console.log('hello world')
              }

              a() // 'hello world'

              a = 10 // Assignment to constant variable.  - переприсваивать переменную объявленную с помощью const запрещено 

              a()

const не даст переприсвоить переменную 'a' 



                                                            ОБЪЕКТЫ 

У  объектов есть свойства

если какое то свойство содержит функцию в качестве значения, то такое свойство называется метод

Практически все сущности в JS это объекты, они либо ими являются, либоо вседут себя как объекты(примитивы)

Объект - это набор свойств "имя: значение"

Объект - это тип значений

Объект - это тип переменных

----------------------------------------------------------------------------
пример объекта

const myCity = {
  city: 'Kazan',
  popular: true,
  country: 'Rus'
}

Объект записывается между фигурными скобками
У данного объекта есть три свойства: city, popular, country
Справа после двоеточия - значения соответствующих свойств: Kazan, true, Rus

Иначе эти пары можно назвать: (Ключ: значение)

Порядок свойств не имеет значение

ПОЛУЧЕНИЕ ДОСТУПА К СВОЙСТВАМ ОБЪЕКТА 

const myCity = {
  city: 'kazan',
  popular: true,
  country: 'Rus'                                      
}
console.log(myCity.city) 
myCity.city = 'sarapul' // поменяли значение свойства объекта
console.log(myCity.city) 
console.log(myCity.popular)


Используя точку после названия объекта, мы можем получить доступ к значению свойства объекта // console.log(myCity.city)
Этот синтаксис называется точечная запись(dot notation)

Используя ту же точечную запись можно изменять значене свойств объекта(используется знак присваивания = )

Новое свойство в объектах можно создавать также с помощью точечой записи   myCity.size = 'small'


УДАЛЕНИЕ СВОЙСТВ - происходит с помощью оператора "delete" (пример: delete myCity.country)

ПРАКТИКА ПО ОБЪЕКТАМ test2.js -4


Кроме точечной записи мы можем работать со свойствами объекта используя квадратные скобки 

      const myCity = {
        city: 'kazan'
      }

      myCity['popular'] = true
      console.log(myCity) // {city: 'kazan', popular: true}

Синтаксис с квадратными скобками используется в том случае, если название свойства является значением той или иной переменной

пример(начало кода выше, сейчас просто продолжим код)        ПРАКТИКА ПО квадратным скобкам test2.js -5

      const countryPropertyName = 'country'

      myCity[countryPropertyName] = 'Rus'

      console.log(myCity) // свойство объекта myCity будет называться country, как значение переменной countryPropertyName
                          // мы передаем не имя переменной, а имя свойства переменной 


ВЛОЖЕННОСТЬ (правтика по вложенности test2.js -6)

У объектов в JS могут быть вложенные свойства, которые содержат вложенные объекты

const myCity = {
  city: 'kazan',
  info: {
    isPopular: true,
    country: 'Rus'
  }
}

console.log(myCity.info.isPopular) // true

delete myCity.info['isPopular'] // или   delete myCity.info.isPopular
console.log(myCity)

у объекта myCity есть свойство info и значение этого свойство - объект. Этот объект имеет два своих 
  свойства: isPopular и country(такой объект называется вложенным объектом). У этих вложенных свойств
    также могут быть объекты, как значения и тем самым ВЛОЖЕННОСТЬ МОЖЕТ БЫТЬ МНОГОУРОВНЕВОЙ.
Удалять можно такж, либо используя точечную запись, либо синтаксис с квадратными скобками

ИСПОЛЬЗОВАТЬ СИНТАКСИС С КВАДРАТНЫМИ СКОБКАМИ ТОЛЬКО ТОГДА, КОГДА В КВАДРАТНЫХ СКОБКАХ ДОЛЖНО
  БЫТЬ КАКОЕ ТО ВЫРАЖЕНИЕ, НАПРИМЕР НАЗВАНИЕ ПЕРЕМЕННОЙ 
      

ИСПОЛЬЗОВАНИЕ ПЕРЕМЕННЫХ ПРИ ФОРМИРОВАНИИ ОБЪЕКТОВ ((практика  test2.js -7))

const name = 'slava'
const postsQty = 23

const userProfile = {
  name: name,
  postsQty: postsQty,
  hasSignedAgreement: false 
}

в этом примере есть две переменные: name и postsQty и эти переменные объявлены с помощью const, значение
переменной name - slava, значение переменной postsQty - 23.
Допустим мы хоти создать новый объект, который будет называться  userProfile  и у этого объекта будут
такие свойства как name  и  postsQty и hasSignedAgreement со значеним false, а вот значения для
свойств postsQty и name должны быть сформированы исходя из значений переменных объявленных ранее name и
postsQty. Мы можем легко использовать переменные в качестве значений для свойств объекта. Более того, 
в качестве значений свойств объекта можно использовать любые выражения и сначала JS получит результат
того или иного выражения, а после этот результат присвоится свойству того или иного объекта.
В данном объекте userProfile свойство name имеет значение переменной name(свойство совпадает с именем
  переменной), точно так же для postsQty. 

В JS есть возможность сокращенной записи свойств при формировании таких объектов

const name = 'slava'
const postsQty = 23

const userProfile = {
  name,
  postsQty,
  hasSignedAgreement: false 
}

в данном случаем можно просто писать переменную в качестве свойства


                        ГЛОБАЛЬНЫЕ ОБЪЕКТЫ
              
существуют глобальные объекты:
window - в браузере
global - в node.js

Если в консоли браузера набрать window, мы получим объект с огромным количеством свойст и методов, в
этом глобальном объекте присутствуют методы и свойства, которые доступны в браузере по умолчанию т.е.
мы можем использовать все методы и свойства глобального объекта

Для global тоже самое

Что бы небыло путаницы сделали глобальный объект globalThis(можно вводить и в браузере и в node.js)

метод log - свойство глобального объекта, доступ можно получить:

window.console.log() либо просто console.log()

примеры вызова метода log:
console.log('hello') // в общем случае
window.console.log('hello') // для браузера
global.console.log('hello') // для node.js



                                          МЕТОДЫ (практика  test2.js -8)

метод - это свойство объекта, значение которого функция

методы можно вызывать, потому что функции вызываются( функция выполняет задачу и возвращает значение)


const myCity = {
  city: 'kazan',
  cityGreeting: function () {
    console.log('Greetings!!')
  }
}

myCity.cityGreeting() // 'Greetings!!'

Вызов метода(функции) происходит с использованием круглых скобок



СОКРАЩЕННЫЙ ФОРМАТ ЗАПИСИ МЕТОДОВ

const myCity = {
  city: 'kazan',
  cityGreeting: () {                //сокращено без function
    console.log('Greetings!!')
  }
}

myCity.cityGreeting() // 'Greetings!!'

В этом примере нет ключевого слова function
При записи объектов, в случае, если значение того или иного свойства - функция, можно убирать ключевое 
слово function и ставить круглые скобки после названия свойства 


Если сравнить методы свойства объектов, то мы знаем, что свойства не содержат функции, а методы
содержат функции как значения, соответственно:
Для доступа к свойствам объекта мы просто используем точечную запись и имя совйства 
myCity.city // получаем доступ к свойству

Если же хотим вызвать метод, то добавляем круглые скобки после названия метода 
myCity.cityGreeting() // вызываем метод cityGreeting, используя круглые скобки



МЕТОДЫ VS СВОЙСТВА ОБЪЕКТОВ

Если сравнить методы и свойства и методы, то свойства не содержат функции, а методы содержат функции 
как значение, соответственно для получения доступа к значениям свойств объекта используем точечную 
запись и имя свойства
 ( пример: myCity.city )
Если мы хотим вызвать метод, то добавляем круглые скобки после названия метода
 ( пример: myCity.cityGreeting() )

------------------------------------------------------------------------------------------

                                          JSON

JSON - JavaScript Object Notation - формат обмена данными между компьютерами в интернете


Обычно, когда загружаем любую веб-страницу, эта страница обращается к другим серверам для того, что бы
получить данные для того, что бы показать их нам на экране  -  такими данными могут быть таблицы сти-
лей CSS, картинки, текстовые данные(например список постов или список коментариев) - такие текстовые
данные передаются с серверов используя формат JSON


{
  "userId": 1,
  "id": 1,                                //пример1
  "title": "Test title",
  "status": {
    "completed": false
  }
}
В примере есть набор свойств и эти свойства похожи на свойства в JS объекте, но все свойства находятся
между двойными кавычками - их значения могут бытьразных типов.


ПЕРЕДАЧА ДАННЫХ МЕЖДУ КОМПЬЮТЕРАМИ В ФОРМАТЕ JSON

передача происходит в виде строки (пример ниже)

{"userId":1,"id":1,"title":"Test title","status":{"completed":false}}


Конвертация JSON в JS- объект и наоборот

Если сервер присылает нам JSON(набор данных) и нам необходимо распарсить такой JSON и конвертировать 
его в JS - объект для того что бы отобразить например информацию о пользователе на фронтэнд странице,
для это есть встроенный метод, который является методом объекта JSON  и такой метод называется parse
JSON.parse - т.е получив JSON  в формате строки от сервера мы можем передать его как аргумент в 
вызове метода parse и в результате получим JS- объект в формате как в примере1

Если у нас наоборот есть объект JS и мы хотим конвертировать его в JSON, для этого есть метод stringify
JSON.stringify() - метод объекта JSON. Как аргумент в вызове метода (то что в скобках) указываем например переменную, значение
которой это объект JS и в результате получим строку JSON, которую можно передавать на удаленный сервер.

Что бы отследить данные, которы получал комп от удаленных серверов в браузере можно перейти на вкладку(в тулзах) Fetch/XHR, 
выбрать нужный запрос (name) далее выбрать в кладку Response и эти данные можно увидеть в формате строки.
Что бы увидеть объект(распаршеный JSON) нужно перейти на вкладку  Preview (рядом с Response)



                                                МУТАЦИЯ В JS ()

копирование значений примитивных типов

const a = 10
let b = a
b = 30

console.log(a) // 10
console.log(b) // 30

В этом примере есть переменная a и ее значение примитивный тип -  число(10), объявили с помощью const
далее создаем переменную b и оъявляем ее с помощью ключевого слова let, тем самым мы сможем позже присваивать новые значения этой 
переменной.
Далее копируем переменную a в b -  с примитивными типами такое копирование происходит по значению, т.е берется значение, которое 
находилось в переменной a и копируется в переменную b.
Значения примитивных типов сохраняются непосредственно в переменных, потому копирование происходит по значению(copy by value).
После таких опереций, копирования  a в b, мы хотим присвоить новое значение переменной b и после этого в выводе консоли мы
получим 30.
Значение в переменной a  не изменилось, потому что мы скопировали значение переменной a в переменную b.



мутирование ссылочного типа

const person = {
  name: 'slava',
  age: 25
}

person.age = 11  // изменили свойство 
person.isAdult = true // добавили новое свойство

console.log(person.age)  //22
console.log(person.isAdult) // true

в этом премере у нас есть объект с двумя свойствами name и age, их мы можем спокойно измнять благодаря тому, что это ссылочный тип.
(мутация)

мутирование копий ссылочного типа

const person = {
  name: 'slava', 
  age: 25
}

const person2 = person

person2.age = 26
person2.isAdult = true

console.log(person.age)
console.log(person.isAdult)











