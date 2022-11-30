const a = [-1, 2, -3, 0, -4, 25, -6, 100];
console.log(a);
let res = a.filter((elem) => elem > 0)
            .map((elem) => elem**2)
            .reduce((sum, elem) => sum + elem, 0);
console.log(res);
