
    // Combine Arrays with spread operater
    function combineArrays_spread(arr1, arr2) {
        // To remove duplicates we can use 'Set class'
        const combinedArr = [...new Set([...arr1, ...arr2])];
        return combinedArr;
    }
    console.log(combineArrays_spread([1, 2, 3, 4], [4, 5, 6]));

    // Combine arrays with push method.
    let array1 = [1,2,3, 4, 5, 6, 7];
    let array2 = [8, 9, 10];
    function combineArrays_push(arr1, arr2) {
        for (let i = 0; i < arr2.length; i++) {
            arr1.push(arr2[i])
        };
        return arr1;
    }
    console.log(combineArrays_push(array1, array2));

    // Combine arrays with reduce method
    function combineArrays_reduce(arr1, arr2){
        let newArr = arr2.reduce((arr, item) =>{
            arr.push(item)
            return arr;
        }, arr1);

        return newArr;
    }
    console.log(combineArrays_reduce([1, 2, 3], [4, 5, 6]));
    