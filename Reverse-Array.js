
        // Reverse Array
        function reverseArray(arr) {
            let reversedArr = [];
            for (let i = 0; i < arr.length; i++) {
                reversedArr.unshift(arr[i]);
            }
            return reversedArr;
        }

        console.log(reverseArray([1, 2, 3, 4]));
   