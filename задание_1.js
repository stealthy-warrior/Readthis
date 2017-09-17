var str1 = prompt('Введите любое число от 100 до 999');
str1 = str1[0] + (Math.floor(Math.random() * 10)) + str1[2];
var str2 = prompt('Введите любое число от 100 до 999');
str2 = str2[0] + (Math.floor(Math.random() * 10)) + str2[2];
alert( str1 + ' ' + str2);
