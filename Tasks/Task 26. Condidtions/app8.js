var year = 2004;
if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    console.log('год високосный')
} else {
    console.log('год невисокосный')
}