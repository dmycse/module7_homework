// Модуль 7. Задание 1
/*
Написать, функцию, которая принимает в качестве аргумента объект 
и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение.
*/
const person = {
	country: 'Russia',
	city: 'Moscow', 
};

let student = Object.create(person);
student.name = 'Ivan';
student.student = true;
student.age = 20;

function showOwnProp(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) console.log(`${key}: ${obj[key]}`);
	}
}
showOwnProp(student);