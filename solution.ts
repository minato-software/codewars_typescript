export class Kata {
    static squareDigits(num: number): number {
        let result = "";
        while (num > 0) {
            const lastDigit = num % 10;
            num = Math.floor(num / 10); //everything but the last digit
            const squareDigit = lastDigit * lastDigit;
            result = squareDigit + result;
        }
        return parseInt(result); // conver the result string back into a number
    }
}