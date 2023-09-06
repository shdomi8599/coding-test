function solution(my_string, indices) {
  let arr = my_string.split('');
  let result = arr.map((x,index)=>{
      for(let i=0; i< indices.length; i++){
          if (index===indices[i]){
              x = ''
              return x
          }
      }
      return x
   })
  
  return result.join('')
}