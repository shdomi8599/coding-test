function solution(my_string) {
    let answer =''
    let arr = ['a','e','i','o','u']
    
    for(let i=0; i < my_string.length; i++){
        let isIncludes = false
        
        for(let j=0; j< arr.length; j++){
            if(arr[j] === my_string[i]){
                isIncludes = true
                break
            }
        }
        if(!isIncludes){
            answer += my_string[i]
        }
    }
    return answer
}