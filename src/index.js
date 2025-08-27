function KnightMoves(start, end){
    let directions = [[2,1], [1,2],[-1,2],[-2,1],[-2,-1],[-1,-2],[1,-2],[2,-1]];
    let queue = [[start, [start]]];

    const visited = Array.from({ length: 8 }, () => Array(8).fill(false));
    visited[start[0]][start[1]] = true;

    while (queue.length > 0){
        let currPos = queue.shift();

        if (arraysEqual(currPos[0], end)){
            return currPos[1];
        }

        for (let i = 0 ; i < 8 ; i++){
            let currX = currPos[0][0];
            let currY = currPos[0][1];
            
            let newX = currX + directions[i][0];
            let newY = currY + directions[i][1];

            if (isValid([newX, newY]) && !visited[newX][newY]){
                visited[newX][newY] = true;
                let newMoveCord = [newX, newY];

                let newPath = [...currPos[1]];
                newPath.push(newMoveCord);

                let newMove = [newMoveCord, newPath];
                queue.push(newMove);
            }
            
        }
    }

}

function arraysEqual(a, b) {
  return a.length === b.length && a.every((val, i) => val === b[i]);
}

function isValid([x, y]) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}


let testPath = KnightMoves([0,0], [7,7]);

testPath.forEach((e) => console.log(e));