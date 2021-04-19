'use strict';

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
        budget: money,
        budgetDay: 0,
        budgetMonth: 0,
        income: {},
        addIncome: [],
        expenses: [],
        addExpenses: [],
        deposit: false,
        percentDeposit: 0,
        moneyDeposit: 0,
        mission: 50000,
        period: 7,

        asking: function (){
            if(confirm('Есть ли у вас дополнительный заработок?')){
                let itemIncome;
                do{
                    itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксую');
                }
                while (itemIncome === null || itemIncome === '');
                let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
                appData.income[itemIncome] = +cashIncome;
            }

            let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
                appData.addExpenses = addExpenses.toLowerCase().split(',');

                for(let i = 0; i< 2; i++){
                    let itemExpenses = prompt('Введите обязательную статью расходов');
                    let cashExpenses;
                    do{
                        cashExpenses = prompt('Во сколько это обойдется?');
                    }
                    while (isNaN(cashExpenses) || cashExpenses === '' || cashExpenses === null);
                    appData.expenses[itemExpenses] = +cashExpenses;
                }
                },
        getInfoDeposit: function (){
            appData.deposit = confirm('Есть ли у вас депозит в банке?');
            if(appData.deposit){
                appData.persenDeposit = prompt('Какой годовой процент?', '10');
                appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
            }
        },
        /**
         * Расходы за месяц
         * @returns {number}
         */
        getExpensesMonth: function(){
                   for (let key in appData.expenses){
                        appData.expensesMonth += appData.expenses[key];
                    }
                },

        /**
         * Функция возвращает Накопления за месяц (Доходы минус расходы)
         * @returns {number}
         */
        getBudget: function () {
            appData.budgetMonth = appData.budget - appData.expensesMonth;
            appData.budgetDay = Math.floor(appData.budgetMonth / 30);
        },

        /**
         * Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (getAccumulatedMonth) и возвращает результат
         * @returns {number}
         */
        getTargetMonth: function (){
            return appData.mission / appData.budgetMonth;
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
                return ('У вас высокий уровень дохода');
            }else if (600 < appData.budgetDay < 1200){
                return (('У вас средний уровень дохода'));
            }else if(0 < appData.budgetDay < 600){
                return ('К сожалению у вас уровень дохода ниже среднего');
            }else {
                return('Что-то пошло не так!');
            }
        },

        calcSavedMoney: function (){
            return appData.budgetMonth * appData.period;
        }
    };
appData.asking();
appData.getExpensesMonth();
appData.getBudget();


console.log('Расходы за месяц: ' + appData.expensesMonth);

if(appData.getTargetMonth() > 0){
    console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяца');
} else {
    console.log('Цель не будет достигнута');
}

console.log(appData.getStatusIncome());

// for(let key in appData){
//     console.log('Наша программа включает в себя данные: ' + key + ' - ' + appData[key]);
// }

//Кнопку "Рассчитать" через id
let calculeteTotal = document.getElementById('#start');

//Кнопки “+” (плюс) через Tag, каждую в своей переменной.
let incomeAdd = document.getElementsByTagName('button')[0];
let expensesAdd = document.getElementsByTagName('button')[1];

//Чекбокс по id через querySelector
let depositCheck = document.querySelector('#deposit-check');

//Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
let additionalIncomeItem = document.querySelectorAll('.additional_income-item');

/*Каждый элемент в правой части программы через класс(не через querySelector),
     которые имеют в имени класса "-value",
    начиная с class="budget_day-value" и заканчивая class="target_month-value">
 */

let expenseMonthValue = document.getElementsByClassName('budget_day-value');
let additionalIncomeValue = document.getElementsByClassName('additional_income-value');
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value');
let incomePeriodValue = document.getElementsByClassName('income_period-value');
let targetMonthValue = document.getElementsByClassName('target_month-value');

/*
Оставшиеся поля через querySelector каждый в отдельную переменную:
  поля ввода (input) с левой стороны и не забудьте про range.
*/
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');
let expensesTitle = document.querySelector('.expenses-title');
let expensesAmount = document.querySelector('.expenses-amount');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let periodSelect = document.querySelector('.period-select');
