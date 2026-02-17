export const makeNegative = (num: number): number => {
    if(num > 0) {
        return (num - num - num);
    } else if (num < 0) {
        return num;
    } else if (num == 0) {
        return num;
    }
    return num;
};