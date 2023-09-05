function solution(board, k) {
    var answer = 0;
    for(let i=0; i<board.length; i++){
        const target = board[i]
        for(let j=0; j<target.length; j++){
            if(i+j <= k){
                answer = answer + target[j]
            }
        }
    }
    return answer;
}