// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */
let div1 = document.querySelector('.div-1');
let out1 = document.querySelector('.out-1');

function t1() {
    out1.textContent += 'touch';
}
div1.addEventListener('touchstart', t1);
// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let div2 = document.querySelector('.div-2');
let out2 = document.querySelector('.out-2');
let count = 0;

function t2() {
    count++;
    out2.textContent = count;
}
div2.addEventListener('touchstart', t2);
// ваше событие здесь!!!


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */
let div3 = document.querySelectorAll('.block');
let out3 = document.querySelector('.out-3');

function t3() {
    out3.textContent = this.innerHTML;
}
div3.forEach(element => {
    element.addEventListener('touchstart', t3);
});

// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */
let div4 = document.querySelector('.div-4');
let out4 = document.querySelector('.out-4');
let btn4 = document.querySelector('.b-4');

function t4() {
    out4.textContent += 'touch';
}
btn4.onclick = () => {
    div4.addEventListener('touchstart', t4);
}
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */
let btn5 = document.querySelector('.b-5');

function t5() {}
btn5.onclick = () => {
    div4.removeEventListener('touchstart', t4);
}
// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */
let out6 = document.querySelector('.out-6');

function t6() {
    out6.textContent += 'touchend';
}
div4.addEventListener('touchend', t6);
// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

let div7 = document.querySelector('.div-7');

function t7() {
    div7.style.backgroundColor = 'red';
}
div7.addEventListener('touchstart', t7);
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
let div8 = document.querySelector('.div-8');
let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

function t8() {
    let rand = Math.floor(Math.random() * 6);
    // console.log(a8[rand]);
    div8.style.backgroundColor = a8[rand];
}
div8.addEventListener('touchstart', t8);
// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */
let div9 = document.querySelector('.div-9');
let out9 = document.querySelector('.out-9');

function t9(event) {
    console.log(event.touches.length);
    out9.textContent = event.touches.length;
}
div9.addEventListener('touchstart', t9);
// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let div10 = document.querySelector('.div-10');
let w10 = 75;

function t10() {
    div10.style.width = w10 + 'px';
    w10++;
}
div10.addEventListener('touchmove', t10);
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */
let div11 = document.querySelector('.div-11');
let out11 = document.querySelector('.out-11');


function t11(event) {
    // console.log(event.touches[0].radiusX);
    out11.textContent += event.touches[0].radiusX;
    out11.textContent += event.touches[0].radiusY;
}
div11.addEventListener('touchstart', t11);
// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12. Добавьте touch события так, чтобы при клике на img-12-min картинка появлялась в блоке div-12-max. Если нажимается кнопка prev - то появляется изображение идущее перед текущим. Если нажимается кнопка next - то после текущего. Выбор изображений зациклен.  Изображение, которое сейчас дублируется в большом блоке должно выделяться классом .active-img. Добавьте кнопку reset для сброса состояния, когда выводится первое изображение. Все изображения и начальное состояние - выводится из массива 
    a = [1.png, 2.png, 3.png, 4.png, 5.png, 6.png] - изображения находятся в папке img.
    Усложните задачу - подумайте как в массиве сохранить информацию текст, которая будет выводиться если картинка активна. Сам текст можно сохранять в data-text при отрисовке изображения.
    Источник иконок https://www.iconfinder.com/iconsets/unigrid-phantom-halloween
*/

function t12() {

}

// ваше событие здесь!!!