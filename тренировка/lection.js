
                                                  браузерное окружение, спецификации

    js изначально был создан для браузеров. Но с тех пор он значительно эволюционировал и превратился в 
кроссплатформенный язык программирования для широкого круга задач.

Сегодня js может использоваться в браузере, на сервере или в какой то другой среде, даже в кофеварке.
Каждая среда представляет свою функциональность, которую спецификация js называет окружением.

Окружение представляет свои объекты и дополнительные функции, в дополнение базовым языковым. Браузеры,
например, дают средства для управления веб-страницами. Node js делает доступными какие то серверные возможности
и тд. 

В примере ниже в общих чертах показано, что доступно в js в браузерном окружении:



       => DOM (document)
window => BOM (navigator, screen, location, frames, history, XMLHttpRequest)
       => JS  (Object, Array, Function)



 Как мы видим, имеется корневой объект window, который выступает в двух ролях:
1.	Во-первых, это глобальный объект для кода.
2.	Во-вторых, он также представляет собой окно браузера и располагает методами для управления им.
Например, здесь мы используем window как глобальный объект:

function sayHi() {
       alert('hello');
}

// глобальные функции доступны как методы глобального объекта:
window.sayHi();

А здесь мы используем window как объект окна браузера

alert(window.innerHeight); // внутренняя высота окна браузера

------------------------------------------
DOM (Document Object Model)

DOM - объектная модель документа, которая представляет все содержимое страницы в виде объектов, которые можно менять.

Объект document - основная входная точка. С его помощью мы можем что то создавать или менять на странице.

Например:

document.body.style.background = 'red'; // Заменим цвет фона на красный

setTimeout(() => document.body.style.background = '', 1000); // а через секунду вернем как было 

Мы использовали в примере только document.body.style, но на самом деле возможности по управлению страницей намного шире.

-------------------------------------------------
DOM - не только для браузеров 
Спецификация DOM описывает структуру документа и представляет объекты для манипуляций со страницами. Существуют и другие, 
отличные от браузеров, инструменты, использующие DOM.

Например, серверные скрипты, которые загружают и обрабатывают HTML- страницы, также могут использовать DOM.

---------------------------------------------
CSSOM для стилей
Правила стилей CSS структурированы иначе чем HTML. Для них есть отдельная спецификация, которая объясняет, как стили должны 
представляться в виде объектов, как их читать и писать.Array

CSSOM используется вместе с DOM  при изменении стилей документа. В реальности CSSOM требуется редко, обычно правила CSS статичны.
Мы редко добавляем/удаляем стили из js, но это возможно.

____________________________________________________

BOM (Browser Object Model)

Объектная модель браузера - это дополнительные объекты, предоставляемые браузером(окружением), чтобы работать со всем кроме документа

Например:

 Объект navigator дает информацию о самом браузере и операционной системе. Среди множества его свойств самыми известными являются 
 navigator.userAgent - информация о текущем браузере, и navigator.platform - информация о платформе(винда, линукс и тд)

  