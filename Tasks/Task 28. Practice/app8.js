//Дан день, месяц и год (3 числа). Определить, является ли дата корректной.
var day=29, month=2, year=2001;
if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && (day>=1 && day<=31) && year>=1){
    console.log("введена корректная дата");
} else if ((month == 4 || month == 6 || month == 9 || month == 11) && (day>=1 && day<=30) && year>=1){
    console.log("введена корректная дата");
} else if ((month == 2) && (year % 400 == 0) && (day>=1 && day<=29)){
    console.log("введена корректная дата");
} else if ((month == 2) && (year % 400 != 0) && (day >= 1 && day <= 28)) {
    console.log("введена корректная дата");
} else {
    console.log("введена некорректная дата");
}