/*Задание #2
Создайте пример наследования, реализуйте класс Student и класс Aspirant, аспирант отличается от 
    студента наличием некой научной работы.
а) Класс Student содержит переменные: String firstName, lastName, group. А также, averageMark, 
    содержащую среднюю оценку.
б) Добавить конструктор в оба класса. 
в) Создать метод getScholarship() для класса Student, который возвращает сумму стипендии. 
    Если средняя оценка студента равна 5, то сумма 100$, иначе 80$. 
    Переопределить этот метод в классе Aspirant.  Если средняя оценка аспиранта равна 5, то сумма 200$, 
    иначе 180$.
г) Создать массив типа Student, содержащий объекты класса Student и Aspirant. 
Вызвать метод getScholarship() для каждого элемента массива.*/

class Student{

    firstName;
    lastName;
    group;
    averageMark;

    constructor(firstName, lastName, group, averageMark){
        this.firstName = firstName;
        this.lastName  = lastName;
        this.group = group;
        this.averageMark = averageMark;

    }

    getScholarship(averageMark){
        if(this.averageMark == 5){
            return '100$';
        } 
        if(this.averageMark != 5){
            return '80$';
        }
    }

}

class Aspirant extends Student{

    scientificWork;

    constructor(firstName, lastName, group, averageMark, scientificWork) {
        super(firstName, lastName, group, averageMark);
        this.scientificWork = scientificWork;
    }

    getScholarship(averageMark) {
        if (this.averageMark == 5) {
            return '200$';
        } 
        if (this.averageMark != 5) {
            return '180$';
        }

    }
}

let student = new Student("Андрей", "Коновалюк", "812", 4);
let aspirant = new Aspirant("Василий", "Стельмашук", "1012", 5, "Научные Труды");

console.log(student, aspirant);

console.log(`Стипендия студента - ${student.getScholarship()}`);
console.log(`Стипендия аспиранта - ${aspirant.getScholarship()}`);

let Students = [];
Students.push(student, aspirant);
console.log(Students);

Students.forEach((item) => console.log(item.getScholarship()));