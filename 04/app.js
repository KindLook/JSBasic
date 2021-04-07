'use strict';



/**
 * 1.Функция возвращает сумму всех обязательных расходов за месяц
 * @param amount1
 * @param amount2
 * @returns {*}
 */
function getExpensesMonth(amount1, amount2){
    return amount1 + amount2;
}

/**
 * 2.Функция возвращает Накопления за месяц (Доходы минус расходы)
 * @param money
 * @param ExpensesMonth
 * @returns {number}
 */
function getAccumulatedMonth(money, ExpensesMonth){
    return money - ExpensesMonth;
}


/**
 * 4. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
 * @param mission
 * @param accumulatedMonth
 * @returns {number}
 */
function getTargetMonth(mission, accumulatedMonth){
    return Math.ceil(mission / accumulatedMonth);
}

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

/**
 * содержит результат функции getExpensesMonth сумму всех обязательных расходов за месяц
 * @type {*}
 */
let expensesMonth = getExpensesMonth();
/**
 * 3.содержит результат функции getAccumulatedMonth, Накопления за месяц (Доходы минус расходы)
 * @type {number}
 */
let accumulatedMonth = getAccumulatedMonth();

//"Доход за месяц"
let money = +prompt('Ваш месячный доход?');

//строка с доп доходом
let income = "freelancing";

//строка с перечислением доп расходов через запятую
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

//булевое значение
let deposit = confirm('Есть ли у вас депозит в банке?');

//статьи расходов и во сколько это обойдется
let expenses1 = prompt('Введите обязательную статью расходов');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = +prompt('Во сколько это обойдется?');

//желаемая сумма накоплений
let mission = 500000;

//число от 1 до 12 (месяцев)
let period = 7;



showTypeOf();

getExpensesMonth(amount1, amount2);

addExpenses = addExpenses.toLowerCase();
console.log(addExpenses.split(', '));

//сколько месяцев потребуется до достижения цели
console.log('Цель будет достигнута за ' + getTargetMonth() + ' месяцев');

/**
 * 6. бюджет на день учитывая обяз расходы в месяц
 * @type {number}
 */
let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день: ' + budgetDay);


getStatusIncome();






