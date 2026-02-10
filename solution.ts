export function smallEnough(arr: number[], limit: number): boolean{
    for (let num of arr) {
        if(num > limit) {
            return false;
        }
    }
    return true;
}