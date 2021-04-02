'use strict';

//любое число "Доход за месяц"
let money = 50000;

//строка с доп доходом
let income = "freelancing";

//строка с перечислением доп расходов через запятую
let addExpenses = "Taxi, Internet, CommunalPayments";

//любое булевое значение
let deposit = false;

//любое число , желаемая сумма накоплений
let mission = 500000;

//число от 1 до 12 (месяцев)
let period = 7;

console.log(typeof (money));
console.log(typeof (income));
console.log(typeof (deposit));

console.log(addExpenses.length);
console.log("Период равен " + period + " месяцев");
console.log(`Цель заработать ${mission} рублей`);

addExpenses = addExpenses.toLowerCase();
console.log(addExpenses.split(', '));

let budgetDay = money / 30;
budgetDay = budgetDay.toFixed(2);
console.log(budgetDay);
