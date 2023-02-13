function is_array(data){
    if(Array.isArray(data)){
        return true
    } else {
        return false
    }
}

console.log(is_array('w3resource'));  false
console.log(is_array([1, 2, 4, 0]));  true