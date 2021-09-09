// Модуль 7. Задание 2
/*
Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false.
*/

//Решение, если в нашем объекте ест унаследованные объекты
let student = {
	name: 'Ivan',
	student: true,
	age: 20
 };
 
 function equalKey(str, obj) {
	 for (let key in obj) {
		 if([key] == str) return true;
	 } return false;
 }
 console.log(equalKey('age', student)) //true
 console.log(equalKey('house', student)) //false

 //Решение, если в нашем объекте нет унаследованных объектов
 let student = {
	name: 'Ivan',
	student: true,
	age: 20
 };
 
let equalKey = (str, obj) => (str in obj) ? true : false;

console.log(equalKey('age', student)) //true
console.log(equalKey('house', student)) //false