const entities = [
    {
        city:'Rostov-on-Don\n' +
            'LCD admiral',
        area:'81 m2',
        time:'3.5 months',
        img: './img/image1.png'
    },
    {
        city:'Sochi\n' +
            'Thieves',
        area:'105 m2',
        time:'4 months',
        img: './img/example2.png'
    },
    {
        city:'Rostov-on-Don\n' +
            'Patriotic',
        area:'93 m2',
        time:'3 months',
        img: './img/example3.png'
    }
];


//    <--- Присвоение переменным классы с активным нажатием --->
const pop = "third_list_hover";
const pop2 = 'circle_hover';

//    <--- Присвоение переменным HTML блоков для дальнейшего изменения  --->
const city = document.getElementById('City');
const area = document.getElementById('Area');
const time = document.getElementById('time');
const img = document.getElementById('off_third');

//    <--- Замена текста и картинки в HTML блоках --->
const setEntity = (index) => {

    currentPosition = index<0 ? entities.length-1 : index%entities.length; // Проверка на отрицательный index

    city.innerText = entities[currentPosition].city;
    area.innerText = entities[currentPosition].area;
    time.innerText = entities[currentPosition].time;
    img.src = entities[currentPosition].img;

    circle[currentPosition].classList.add(pop2) // Присваивание класса с активным нажатием
    name[currentPosition].classList.add(pop)

    if(last!=currentPosition){                  // Проверка на не совпадение прошлого выбранного элемента с текущим
        circle[last].classList.remove(pop2);
        name[last].classList.remove(pop);
    }

    last = currentPosition;                     // Хранение прошлого нажатого элемента
}

//    <--- Поиск переключателей и их инициализация --->
const name = document.querySelectorAll('.name');
const circle = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

var currentPosition = 0;                        // Выбранный элемент по умолчанию
var last = 0;
circle[currentPosition].classList.add(pop2)
name[currentPosition].classList.add(pop)


circle.forEach((item,i)=>{ // Слушатели на круглые переключатели
    item.addEventListener('click',()=>{
        currentPosition = i;
        setEntity(i);
    })
})

name.forEach((item,i = 0)=>{ // Слушатели на именные переключатели
    item.addEventListener('click',()=>{
        currentPosition = i;
        setEntity(i);
    })
})



prev.addEventListener('click',()=>{ // Слушатели на стрелочные переключатели
    setEntity(currentPosition-1);
})
next.addEventListener('click',()=>{
    setEntity(currentPosition+1);
})