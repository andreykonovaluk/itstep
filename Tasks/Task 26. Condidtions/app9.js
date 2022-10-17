var weekDay = 5, timeHour = 7, timeMinute = 59;
if (((weekDay >= 1) && (weekDay <= 5)) && ((timeHour >= 9) && (timeHour <= 16)) && ((timeMinute >= 00) && (timeMinute <= 60)) || ((weekDay >= 1) && (weekDay <= 5)) && ((timeHour >= 8) && (timeHour <= 17)) && ((timeMinute = 00))) {
    console.log('Рабочее время')
} else {    
    console.log('Нерабочее время')
}