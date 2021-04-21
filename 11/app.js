'use strict';
let start = document.getElementById('start'),
    incomeAdd = document.getElementsByTagName('button')[0],
    expensesAdd = document.getElementsByTagName('button')[1],
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    expenseMonthValue = document.getElementsByClassName('budget_day-value'),
    additionalIncomeValue = document.getElementsByClassName('additional_income-value'),
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value'),
    incomePeriodValue = document.getElementsByClassName('income_period-value'),
    targetMonthValue = document.getElementsByClassName('target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    periodSelect = document.querySelector('.period-select');



    let appData = {
        budget: 0,
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
        start: function (){
            if(salaryAmount.value === ''){
                alert('Ошибка. Поле "Месячный доход" должно быть заполнено');
                return ;
            }

            appData.budget = salaryAmount.value;
            console.log('salaryAmount.value: ', salaryAmount.value);
            // appData.asking();
            // appData.getExpensesMonth();
            // appData.getBudget();
        },


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
start.addEventListener('click', appData.start());






if(appData.getTargetMonth() > 0){
    console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяца');
} else {
    console.log('Цель не будет достигнута');
}






