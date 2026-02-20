export function dirReduc(arr: string[]): string[] {
    const oppositeDirections: Record<string, string> = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "EAST": "WEST",
        "WEST": "EAST"
    };
    return arr.reduce((stack: string[], dir: string) => {
        const lastDirection = stack[stack.length - 1];
        if (lastDirection === oppositeDirections[dir.toUpperCase()]) {
            stack.pop();
        } else {
            stack.push(dir);
        }
        return stack;
    }, []);
}