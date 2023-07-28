"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let d = 0;
	d = b ** 2 - 4 * a * c;
	if (d < 0) {
		arr = [];
	} else if (d === 0) {
		arr = [-b / (2 * a)];
	} else {
		arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let s = 0;
	let p = 0;
	let payment = 0;
	s = amount - contribution;
	p = percent / 100 / 12;
	payment = s * (p + (p / (((1 + p) ** countMonths) - 1)));
	payment = Number((countMonths * payment).toFixed(2));
	return payment;
}