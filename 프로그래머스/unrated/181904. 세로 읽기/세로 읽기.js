function solution(my_string, m, c) {
    const arr = []
    for(let i=0; i< my_string.length; i++){
        const string = my_string.slice(m*i,m*(i+1))
        if(string){
            arr.push(my_string.slice(m*i,m*(i+1)))
        }
    }
    let answer =''
    for(x of arr){
        answer = answer + x[c-1]
    }
    return answer
}