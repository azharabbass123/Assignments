// Calcualte absolute sum of diagonal of given matric

const array = [[11, 2, 4], [4, 7, 8], [2, 7, 3]];
function diagonal_sum_calac(arr, n){
    let d1 = 0;
    let d2 = 0;

    for(let i = 0; i < n; i++){
        d1 += arr[i][i];       //Sum of left to right diagonal
        d2 += arr[i][n -i -1]; //Sum of rigth to left diagonal
    }
    //console.log(d1);
    //console.log(d2);
    return Math.abs(d1 - d2);
}
console.log(diagonal_sum_calac(array, 3));