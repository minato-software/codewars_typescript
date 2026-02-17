export function past(h: number, m: number, s: number): number {
    const msPerHour = h * 3600000;
    const msPerMinute = m * 60000;
    const msPerSecond = s * 1000;
    return (msPerHour + msPerMinute + msPerSecond);
}