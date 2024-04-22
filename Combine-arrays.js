
        // Combine Arrays
        function combineArrays(arr1, arr2) {
            // To remove duplicates we can use 'Set class'
            const combinedArr = [...new Set([...arr1, ...arr2])];
            return combinedArr;
        }
        console.log(combineArrays([1, 2, 3, 4], [4, 5, 6]));

        // Combine arrays with a diffrent method.
        function combineArrays2(arr1, arr2) {
            for (let i = 0; i < arr2.length; i++) {
                arr1.push(arr2[i])
            };
            return arr1;
        }
        console.log(combineArrays2([1, 2, 3], [4, 5, 6]));
    