'use strict';


/**
 * Проверка на число, n пытается преобразовать в число с точкой и спрашивает
 * это не NaN? или n конечное не бесконечное число. Если преобразовать не получается - false
 * @param n
 * @returns {boolean|boolean}
 */
let isNumber = function (n){
   return !isNaN(parseFloat(n)) && isFinite(n);
};



//"Доход за месяц"
let money;
//строка с доп доходом
let income = "freelancing";
//строка с перечислением доп расходов через запятую
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
//булевое значение
let deposit = confirm('Есть ли у вас депозит в банке?');
//желаемая сумма накоплений
let mission = 500000;
//число от 1 до 12 (месяцев)
let period = 7;



/**
 * запрос месячного дохода с проверкой что ввели число, переспрашивает пока не ввели число
 */

let start = function (){
    money = prompt('Ваш месячный доход?');
    // do {
    //     money = +prompt('Ваш месячный доход?');
    // }
    // while (!isNumber(money));

    while (!isNumber(money)){
        money = prompt('Ваш месячный доход?');
    }
};

start();

//статьи расходов и во сколько это обойдется
let expenses = [];

// расходы в массив, строка
addExpenses = addExpenses.toLowerCase();
console.log(addExpenses.split(', '));

/**
 * Функция возвращает сумму всех обязательных расходов за месяц
 * @returns {number}
 */
let getExpensesMonth = function (){
    //переменная суммы
    let sum = 0;


    for (let i = 0; i < 2; i++){
        expenses[i] = prompt('Введите обязательную статью расходов');

        //sum += +prompt('Во сколько это обойдется?');
        do {
            sum = +prompt('Во сколько это обойдется?');
        }
        while (!isNumber(sum));
    }
    console.log(expenses);

    //возврат результата суммы расходов
    return sum;
};

let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц: ' + expensesAmount);


/**
 * Функция возвращает Накопления за месяц (Доходы минус расходы)
 * @returns {number}
 */
let getAccumulatedMonth = function (){
    return money - expensesAmount;
};



/**
 * Накопления за месяц (Доходы минус расходы), содержит результат функции getAccumulatedMonth,
 * @type {number}
 */
let accumulatedMonth = getAccumulatedMonth();

/**
 * Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
 * @returns {number}
 */
let getTargetMonth = function (){
    return Math.ceil(mission / accumulatedMonth);
};

function  showTypeOf(){
    console.log(typeof (money));
    console.log(typeof (income));
    console.log(typeof (deposit));
}

/**
 * Если budgetDay больше 1200, то “У вас высокий уровень дохода”

 Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”

 Если budgetDay меньше 600 и больше 0 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”

 Если отрицательное значение то вывести “Что то пошло не так”

 Учесть варианты 0, 600 и 1200 (к какому уровню не важно)
 */
function getStatusIncome(){
    if (budgetDay > 1200){
        console.log('У вас высокий уровень дохода');
    }else if (600 < budgetDay < 1200){
        console.log(('У вас средний уровень дохода'));
    }else if(0 < budgetDay < 600){
        console.log('К сожалению у вас уровень дохода ниже среднего');
    }else {
        console.log('Вы не сможете достичь цели');
    }
}





showTypeOf();




//сколько месяцев потребуется до достижения цели
console.log('Цель будет достигнута за ' + getTargetMonth() + ' месяцев');

/**
 * 6. бюджет на день учитывая обяз расходы в месяц
 * @type {number}
 */
let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день: ' + budgetDay);


getStatusIncome();






