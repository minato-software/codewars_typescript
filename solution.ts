export function isValidWalk(walk: string[]) {
    const directions = {
        n: 0,
        s: 0,
        w: 0,
        e: 0,
    }
    
    for (const dir of walk) {
        directions[dir as keyof typeof directions] += 1;
    }
    
    return walk.length == 10 &&
        directions.n == directions.s &&
        directions.w == directions.e ;
}