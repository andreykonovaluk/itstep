/*Дан прямоугольник размерами NхM. Каждый раз от него отрезают квадрат 
со стороной равной меньшей стороне оставшегося прямоугольника. Например, 
прямоугольник 10х6, то сначала отрезаю 6х6, потом 4х4 и т.д. 
Сколько нужно сделать отрезаний до того, как получится квардрат.*/
var N = 100, M = 60;
count = 0;
do{
    if(N > M){
        N -= M;
        count++;
    } else if(M > N) {
        M -= N;
        count++;
    }
} while( N != M);
console.log(count);