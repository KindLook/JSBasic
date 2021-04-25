'use strict';
let start = document.getElementById('start'),
    incomeAdd = document.getElementsByTagName('button')[0],
    expensesAdd = document.getElementsByTagName('button')[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value'),
    budgetMonthValue = document.getElementsByClassName('budget_month-value'),
    expensesMonthValue = document.getElementsByClassName('expenses_month-value'),
    additionalIncomeValue = document.getElementsByClassName('additional_income-value'),
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value'),
    incomePeriodValue = document.getElementsByClassName('income_period-value'),
    targetMonthValue = document.getElementsByClassName('target_month-value'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    periodSelect = document.querySelector('.period-select'),
    targetAmount = document.querySelector('.target-amount');


let appData = {
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    addIncome: [],
    expenses: {},
    expensesMonth: 0,
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    start: function () {
        if (salaryAmount.value === '') {
            alert('Ошибка. Поле "Месячный доход" должно быть заполнено');
            return;
        }

        appData.budget = salaryAmount.value;
        appData.getExpenses();

        appData.getExpensesMonth();
        appData.getBudget();
        appData.getAddExpenses();
        appData.getAddIncome();
        appData.showResult();
    },
    /**
     * записывает результаты вычисленийв поля на сайте
     */
    showResult: function () {
        budgetMonthValue.value = appData.budgetMonth;
        budgetDayValue.value = appData.budgetDay;
        expensesMonthValue.value = appData.expensesMonth;
        additionalExpensesValue.value = appData.addExpenses.join(', ');
        additionalIncomeValue.value = appData.addIncome.join(', ');
        targetMonthValue.value = Math.ceil(appData.getTargetMonth());  //округление в большую сторону
        incomePeriodValue.value = appData.calcPeriod();
    },


    /**
     * При нажатии на кнопку плюс добавляется два поля ввода выше
     */
    addExpensesBlock: function () {

        let cloneExpensesItem = expensesItems[0].cloneNode(true);  //делаем копию c содержимым expensesItem
        expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);  //вставить новый элемент перед кнопкой expensesAdd
        //будет получать поля из блока с input-ами
        expensesItems = document.querySelectorAll('.expenses-items');
        //если элементов больше 3 то убрать кнопку
        if (expensesItems.length === 3) {
            expensesAdd.style.display = 'none';
        }

    },

    /**
     * соединим все расходы и запишем в объект
     * запускается в start
     */
    getExpenses: function () {
        expensesItems.forEach(function (item) {
            let itemExpenses = item.querySelector('.expenses-title').value;  //получим значение из поля input expenses-title  наименование
            let cashExpenses = item.querySelector('.expenses-amount').value; //получим значение из поля input expenses-amount сумма
            if (itemExpenses !== '' && cashExpenses !== '') {
                appData.expenses[itemExpenses] = cashExpenses;  //если не пустые строки то записываем в глобальный объект expenses
            }

        });
    },
    /**
     * Возможные расходы
     */
    getAddExpenses: function () {
        let addExpenses = additionalExpensesItem.value.split(','); //массив и элементы через ,
        addExpenses.forEach(function (item) {
            item = item.trim();   //убрали лишние пробелы
            if (item !== '') {
                appData.addExpenses.push(item);
            }
        })
    },

    getAddIncome: function () {
        additionalIncomeItem.forEach(function (item) {
            let itemValue = item.value.trim();
            if (itemValue !== '') {
                appData.addIncome.push(itemValue);
            }
        });

    },

    asking: function () {
        if (confirm('Есть ли у вас дополнительный заработок?')) {
            let itemIncome;
            do {
                itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксую');
            }
            while (itemIncome === null || itemIncome === '');
            let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
            appData.income[itemIncome] = +cashIncome;
        }

        let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
        appData.addExpenses = addExpenses.toLowerCase().split(',');

    },
    getInfoDeposit: function () {
        appData.deposit = confirm('Есть ли у вас депозит в банке?');
        if (appData.deposit) {
            appData.persenDeposit = prompt('Какой годовой процент?', '10');
            appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        }
    },
    /**
     * Расходы за месяц
     * @returns {number}
     */
    getExpensesMonth: function () {
        for (let key in appData.expenses) {
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
    getTargetMonth: function () {
        return targetAmount.value / appData.budgetMonth;
    },

    /**
     * Если budgetDay больше 1200, то “У вас высокий уровень дохода”

     Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”

     Если budgetDay меньше 600 и больше 0 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”

     Если отрицательное значение то вывести “Что то пошло не так”

     Учесть варианты 0, 600 и 1200 (к какому уровню не важно)
     */
    getStatusIncome: function () {
        if (appData.budgetDay > 1200) {
            return ('У вас высокий уровень дохода');
        } else if (600 < appData.budgetDay < 1200) {
            return (('У вас средний уровень дохода'));
        } else if (0 < appData.budgetDay < 600) {
            return ('К сожалению у вас уровень дохода ниже среднего');
        } else {
            return ('Что-то пошло не так!');
        }
    },

    calcPeriod: function () {
        return appData.budgetMonth * periodSelect.value;
    }
};
start.addEventListener('click', appData.start);

expensesAdd.addEventListener('click', appData.addExpensesBlock);


// if (appData.getTargetMonth() > 0) {
//     console.log('Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяца');
// } else {
//     console.log('Цель не будет достигнута');
// }






