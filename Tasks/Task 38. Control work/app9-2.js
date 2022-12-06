
let data = "22.10.1990";
let arrayData = data.split('.');
let day = 22, month = 10, year = 1990;
numOfDay = 0;
console.log(day);
console.log(month);
console.log(year);
if (month == 1) {
    numOfDay = day;
};
if (month == 2) {
    numOfDay = 31 + day;
};
if (month == 3) {
    numOfDay = 59 + day;
} else if ((month == 2) && (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    numOfDay = 60 + day;
}
if (month == 4) {
    numOfDay = 90 + day;
} else if ((month == 2) && (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    numOfDay = 91 + day;
}
if (month == 5) {
    numOfDay = 120 + day;
} else if ((month == 2) && (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    numOfDay = 121 + day;
}
if (month == 6) {
    numOfDay = 151 + day;
} else if ((month == 2) && (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    numOfDay = 152 + day;
}
if (month == 7) {
    numOfDay = 181 + day;
} else if ((month == 2) && (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    numOfDay = 181 + day;
}
if (month == 8) {
    numOfDay = 212 + day;
} else if ((month == 2) && (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    numOfDay = 213 + day;
}
if (month == 9) {
    numOfDay = 243 + day;
} else if ((month == 2) && (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    numOfDay = 244 + day;
}
if (month == 10) {
    numOfDay = 273 + day;
} else if ((month == 2) && (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    numOfDay = 274 + day;
}
if (month == 11) {
    numOfDay = 304 + day;
} else if ((month == 2) && (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    numOfDay = 305 + day;
}
if (month == 12) {
    numOfDay = 334 + day;
} else if ((month == 2) && (year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
    numOfDay = 335 + day;
}
console.log(numOfDay);