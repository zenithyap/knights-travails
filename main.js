function knightMoves(start, end) {
    const GRID_WIDTH = 8;
    const moves = [
                [1,2], [2,1], 
                [2,-1], [1,-2],
                [-1,-2], [-2,-1],
                [-2,1], [-1,2]
            ];
    const queue = [[start]];
    const endString = `${end[0]},${end[1]}`;
    const visited = new Set();

    while (queue.length > 0) {
        const path = queue.shift();
        const [x, y] = path[path.length - 1];
        const posString = `${x},${y}`;

        visited.add(posString);
        if (posString === endString) {
            return path;
        }

        for (const move of moves) {
            const newX = x + move[0];
            const newY = y + move[1];
            newPos = `${newX},${newY}`;
            if (newX < GRID_WIDTH && newX > -1
                && newY < GRID_WIDTH && newY > -1
                && !visited.has(newPos)) {
                    const newPath = [...path, [newX, newY]];
                    queue.push(newPath);
            }
        }
    }

    return null;
}

console.log(knightMoves([3,3],[4,3]));
console.log(knightMoves([0,0],[3,3]));
console.log(knightMoves([3,3],[0,0]));
console.log(knightMoves([0,0],[7,7]));