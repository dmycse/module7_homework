// Модуль 7. Задание 4
/*
Реализовать консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
Выбрав прибор, подумайте, какими свойствами он обладает.
План:
- Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
- Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
- У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
- Создать экземпляры каждого прибора;
- Вывести в консоль и посмотреть результаты работы.
*/

function OfficeDevice() {
	this.volt = 220,
	this.energyEfficiency = 'A',
	this.protectionClass = 'IP4'
}
 
let sumWatt = 0;
OfficeDevice.prototype.powerConsume = function (on) {
	let watt = this.volt*this.ampere;
	if (on) {
		 sumWatt += watt;
		 console.log(`Включили ${this.type}, потребление ${sumWatt}Вт`);
	} else if (sumWatt <= 0) {
		 console.log(`Нет включённых устройств, потребления 0Вт.`)
	} else {
		 sumWatt -= watt;
		 console.log(`Выключили ${this.type}, потребление ${sumWatt}Вт`)
	}
}
 
function OfficeHardware(type, brand, color, ampere) {
	this.type = type,
	this.brand = brand,
	this.color = color,
	this.ampere = ampere
}
 
OfficeHardware.prototype = new OfficeDevice();
 
OfficeHardware.prototype.watt = function() {
	console.log(`${this.type} потребляет ${this.volt*this.ampere}Вт`);}
 
const laptop = new OfficeHardware('ноутбук', 'Apple', 'серебрянный', 2);
const printer = new OfficeHardware('принтер', 'Canon', 'белый', 1);
const scanner = new OfficeHardware('cканер', 'Canon', 'черный', 0.5);
 
laptop.watt();
printer.watt();
scanner.watt();
 
laptop.powerConsume(1);
printer.powerConsume(1);
scanner.powerConsume(1);
printer.powerConsume(0);
scanner.powerConsume(0);
laptop.powerConsume(0);
