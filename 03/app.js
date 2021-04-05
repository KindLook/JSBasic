// 'use strict';
//
// //"Доход за месяц"
// let money = +prompt('Ваш месячный доход?');
//
// //строка с доп доходом
// let income = "freelancing";
//
// //строка с перечислением доп расходов через запятую
// let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
//
// //булевое значение
// let deposit = confirm('Есть ли у вас депозит в банке?');
//
// //статьи расходов и во сколько это обойдется
// let expenses1 = prompt('Введите обязательную статью расходов');
// let amount1 = +prompt('Во сколько это обойдется?');
// let expenses2 = prompt('Введите обязательную статью расходов');
// let amount2 = +prompt('Во сколько это обойдется?');
//
// //желаемая сумма накоплений
// let mission = 500000;
//
// //число от 1 до 12 (месяцев)
// let period = 7;
//
// console.log(typeof (money));
// console.log(typeof (income));
// console.log(typeof (deposit));
//
// console.log(addExpenses.length);
// console.log('Период равен ' + period + ' месяцев');
// console.log(`Цель заработать ${mission} рублей`);
//
// addExpenses = addExpenses.toLowerCase();
// console.log(addExpenses.split(', '));
//
// /**
//  * 6. бюджет на месяц с учетом обяз расходов
//  * @type {number}
//  */
// let budgetMonth = money - (amount1 + amount1);
// console.log('Бюджет на месяц: ' + budgetMonth);
//
// //7.сколько месяцев потребуется до достижения цели
// console.log('Цель будет достигнута за ' + Math.ceil(mission / budgetMonth) + ' месяцев');
//
// /**
//  * 8. бюджет на день учитывая обяз расходы в месяц
//  * @type {number}
//  */
// let budgetDay = Math.floor(budgetMonth / 30);
// console.log('Бюджет на день: ' + budgetDay);
//
// /*
// 9)
// Если budgetDay больше 1200, то “У вас высокий уровень дохода”
//
// Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
//
// Если budgetDay меньше 600 и больше 0 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
//
// Если отрицательное значение то вывести “Что то пошло не так”
//
// Учесть варианты 0, 600 и 1200 (к какому уровню не важно)
//  */
//
// if (budgetDay > 1200){
//     console.log('У вас высокий уровень дохода');
// }else if (600 < budgetDay < 1200){
//     console.log(('У вас средний уровень дохода'));
// }else if(0 < budgetDay < 600){
//     console.log('К сожалению у вас уровень дохода ниже среднего');
// }else {
//     console.log('Вы не сможете достичь цели');
// }

// 1. может принимать ru или eng
let lang = prompt('Введите ru или eng');

if(lang == 'ru'){
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if(lang == 'eng'){
    console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
} else{
    console.log('Вводите только  ru или eng');
}

switch(lang){
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    case 'eng':
        console.log('monday, tuesday, wednesday, thursday, friday, saturday, sunday');
        break;
    default:
        console.log('Вводите только  ru или eng');
        break;
}


let week = [
    ['Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье'],
    ['monday, tuesday, wednesday, thursday, friday, saturday, sunday']
];
let weekLang = (lang == 'ru') ? console.log(week[0]): console.log(week[1]);


// 2. Артем-директор, Максим-преподаватель, остальные студенты
let namePerson = prompt('Введите имя');
namePerson = namePerson.toLowerCase();
let access = (namePerson == 'артем')? console.log('Директор'):(namePerson == 'максим')? console.log('Преподаватель') : console.log('Студент');