export function positiveSum(arr:number[]):number {
    return arr.reduce((sum, n) => {
        return n > 0 ? sum + n: sum;
    }, 0);
}