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
let money,
    start = function (){
        do {
            money = prompt('Ваш месячный доход?', 80000 );
        }
        while (isNaN(money) || money === '' || money === null);
        };

    start();

    let appData = {
        income: {},
        addIncome: [],
        expenses: [],
        addExpenses: [],
        deposit: false,
        mission: 50000,
        period: 7,
        budget: money,
        budgetDay: 0,
        budgetMonth: 0,
        asking: function (){
            let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
                appData.addExpenses = addExpenses.toLowerCase().split(',');
                appData.deposit = confirm('Есть ли у вас депозит в банке?');
                console.log(appData.addExpenses);
                console.log(appData.deposit);
                },
        /**
         * Расходы за месяц
         * @returns {number}
         */
        getExpensesMonth: function(){
                    let expensesMonth = 0;
                    for (let i = 0; i < 2; i++){
                        appData.expenses[i] = prompt('Введите обязательную статью расходов');
                        do {
                            expensesMonth = +prompt('Во сколько это обойдется?');
                        }
                        while (!isNumber(expensesMonth));
                    }

                    appData.expensesMonth = expensesMonth;
                    console.log(appData.expensesMonth);
                },

        /**
         * Функция возвращает Накопления за месяц (Доходы минус расходы)
         * @returns {number}
         */
        getAccumulatedMonth: function () {
            let budgetMonth = 0;
            appData.budgetMonth = money - appData.budgetMonth;
            console.log(appData.budgetMonth);
        },

        /**
         * Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (getAccumulatedMonth) и возвращает результат
         * @returns {number}
         */
        getTargetMonth: function (){
            return Math.ceil(appData.mission / appData.budgetMonth);
        },

        budgetDay: function (){
           let budgetDay = 0;
           appData.budgetDay = Math.floor(appData.budgetMonth / 30);
            console.log(appData.budgetDay);
        },
        /**
         * Если budgetDay больше 1200, то “У вас высокий уровень дохода”

         Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”

         Если budgetDay меньше 600 и больше 0 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”

         Если отрицательное значение то вывести “Что то пошло не так”

         Учесть варианты 0, 600 и 1200 (к какому уровню не важно)
         */
        getStatusIncome: function(){
            if (appData.budgetDay > 1200){
                console.log('У вас высокий уровень дохода');
            }else if (600 < appData.budgetDay < 1200){
                console.log(('У вас средний уровень дохода'));
            }else if(0 < appData.budgetDay < 600){
                console.log('К сожалению у вас уровень дохода ниже среднего');
            }else {
                console.log('Вы не сможете достичь цели');
            }
        },
    };

console.log(appData);

//
// let expensesAmount = getExpensesMonth();
// console.log('Расходы за месяц: ' + expensesAmount);



// /**
//  * Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
//  * @returns {number}
//  */
// let getTargetMonth = function (){
//     return Math.ceil(appData.mission / accumulatedMonth);
// };


// /**
//  * Если budgetDay больше 1200, то “У вас высокий уровень дохода”
//
//  Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
//
//  Если budgetDay меньше 600 и больше 0 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
//
//  Если отрицательное значение то вывести “Что то пошло не так”
//
//  Учесть варианты 0, 600 и 1200 (к какому уровню не важно)
//  */
// function getStatusIncome(){
//     if (budgetDay > 1200){
//         console.log('У вас высокий уровень дохода');
//     }else if (600 < budgetDay < 1200){
//         console.log(('У вас средний уровень дохода'));
//     }else if(0 < budgetDay < 600){
//         console.log('К сожалению у вас уровень дохода ниже среднего');
//     }else {
//         console.log('Вы не сможете достичь цели');
//     }
// }




console.log('Расходы за месяц: ' + appData.expensesMonth);

//сколько месяцев потребуется до достижения цели
let targetMonth = appData.getTargetMonth();
console.log('Цель будет достигнута за ' + targetMonth + ' месяцев');




appData.getStatusIncome();






