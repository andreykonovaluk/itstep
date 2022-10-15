var weekDay = 5, timeHour = 18, timeMinute = 10;
if (((weekDay >= 1) && (weekDay <= 5)) && ((timeHour >= 8) && (timeHour <= 17))) {
    console.log('Рабочее время')
} else if (((weekDay >= 1 && weekDay <= 5) && (timeHour >= 0 && timeHour < 8 && timeHour > 17 && timeHour <= 23)) || (weekDay >= 6 && weekDay <= 7)) {
    console.log('Нерабочее время')
} else {
    console.log('некорректный ввод')
}