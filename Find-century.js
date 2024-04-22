function find_Century(year){
    let century = Math.ceil((year)/100)
    return century;

}
console.log(find_Century(2000));