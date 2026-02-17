export function litres(time: number): number {
    const liters_per_hour = .5;
    return  Math.floor(liters_per_hour * time);
}