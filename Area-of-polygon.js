function area_of_polygon(num){
    if(num === 1){
        return 1;
    }
    let area = 0;
    squareOfNum = num ** 2;
    squareOfPreviousNum = (num - 1) ** 2
    area = squareOfNum + squareOfPreviousNum;
    return area;
}
console.log(area_of_polygon(4));