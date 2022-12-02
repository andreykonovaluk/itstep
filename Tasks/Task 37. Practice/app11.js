//Дана строка. Подсчитать количество слогов в слове.

let str = 'Пинаколада';
console.log(str);
str = str.toLowerCase().split('');
count = 0;
for(i = 0; i < str.length; i++){
    if (str[i] == 'а' || str[i] == 'е' || str[i] == 'ё' || str[i] == 'и' || str[i] == 'о' || str[i] == 'у' || str[i] == 'ы' || str[i] == 'э' || str[i] == 'ю' || str[i] == 'я') {
        count++;
    }
}
console.log('Количество слогов равно', count);