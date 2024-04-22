
        function rotateArray(arr, num) {
            num = num % arr.length;
            let rotatedArray = [...arr];
            for (let i = 0; i < num; i++) {
                let el = rotatedArray.pop();
                rotatedArray.unshift(el);
            }
            return rotatedArray;
        }
        console.log(rotateArray([1, 2, 3, 4], 2));
    