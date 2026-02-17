export const zeroFuel = (distance: number, mpg: number, fuelLeft: number): boolean => {
    if (fuelLeft * mpg >= distance) {
        return true;
    } else {
        return false;
    }
};