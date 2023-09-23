function solution(my_string) {
    let arr = ['a','e','i','o','u']
    const result=  my_string.split('').filter(x=>!arr.includes(x))
    return result.join('')
}