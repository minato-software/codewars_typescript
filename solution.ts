export const digitalRoot = (n:number):number => {
    const digits = String(n).split('').map(Number);
    let sum = digits.reduce((acc, num) => acc + num, 0);
    while (sum >= 10) {
        const loops = sum.toString().split('').map(Number);
         sum = loops.reduce((acc, num) => acc + num, 0);
    }
    return sum;
};