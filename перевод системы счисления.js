var num = parseInt(prompt('Введите число'));
var notation = parseInt(prompt('Выберите систему счисления (введите 2, 8 или 16)'));
if (notation == 2) {alert( num.toString(2));}
else if (notation ==8) {alert( num.toString(8));}
else if (notation ==16) {alert( num.toString(16));}
else {alert('Неверный ввод');}
