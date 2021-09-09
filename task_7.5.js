// Модуль 7. Задание 5
/*
Переписать консольное приложение из Задания 4 на классы.
*/

class OfficeDevice {
	constructor() {
		this.volt = 220;
		this.energyEfficiency = 'A';
		this.protectionClass = 'IP4';
	}

	static sumWatt = 0;
	powerConsume(on) {
		let watt = this.volt*this.ampere;
			if (on) {
		 		sumWatt += watt;
		 		console.log(`Включили ${this.type}, потребление ${sumWatt}Вт`);
			} else if (sumWatt <= 0) {
		 		console.log(`Нет включённых устройств, потребление 0Вт.`)
			} else {
		 		sumWatt -= watt;
		 		console.log(`Выключили ${this.type}, потребление ${sumWatt}Вт`)
			}
	}
}

class OfficeHardware extends OfficeDevice {
	constructor(type, brand, color, ampere) {
		super();
		this.type = type;
		this.brand = brand;
		this.color = color;
		this.ampere = ampere;
	}
	watt() {
		console.log(`${this.type} потребляет ${this.volt*this.ampere}Вт`);
	}
}

let laptop = new OfficeHardware('ноутбук', 'Apple', 'серебрянный', 2);
let printer = new OfficeHardware('принтер', 'Canon', 'белый', 1);
let scanner = new OfficeHardware('cканер', 'Canon', 'черный', 0.5);
 
laptop.watt();
printer.watt();
scanner.watt();
 
laptop.powerConsume(1);
printer.powerConsume(1);
scanner.powerConsume(1);
printer.powerConsume(0);
scanner.powerConsume(0);
laptop.powerConsume(0);