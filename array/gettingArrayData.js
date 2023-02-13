console.log(first([7, 9, 0, -2]));  // 7
console.log(first([],3));  // []
console.log(first([7, 9, 0, -2],3));  // [7, 9, 0]
console.log(first([7, 9, 0, -2],6));  // [7, 9, 0, -2]
console.log(first([7, 9, 0, -2],-3));  // []

// function first(a, b) { 
//     console.log(a,b);
//     if()  {

//     } else {
//         return a[0]
//     } 
// }















function first(data, count){
    if(count > 0){
        return data.slice(0, count)
    }
    if(count = null){
        return []
    } 
}