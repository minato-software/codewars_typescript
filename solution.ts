// return the two oldest/oldest ages within the array of ages passed in.
// it should return the two ages as a sorted array, youngest age first
export function twoOldestAges(ages: number[]): number[] {
    let max = Math.max.apply(Math, ages);
    let nextBiggestAge = nextBiggest(ages);
    let oldestAges: number[] = [nextBiggestAge, max];
    return oldestAges;
}
function nextBiggest(arr :number[]) {
    let max = -Infinity, result = -Infinity;

    for (const value of arr) {
        const nr = Number(value)

        if (nr >= max) {
            [result, max] = [max, nr] // save previous max
        } else if (nr < max && nr > result) {
            result = nr; // new second biggest
        }
    }

    return result;
}