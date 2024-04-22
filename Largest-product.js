function largest_product(arr){
    let largest_product = 1;
    let prev = arr[0];
    for(let i = 1; i < arr.length; i++){
        let product = 1;
        product = prev * arr[i];
        prev = arr[i];
        if(product > largest_product){
            largest_product = product
        }
    }
    return largest_product;
}
console.log(largest_product([3, 6, 8, -2, -5, 7, 3, 8]));