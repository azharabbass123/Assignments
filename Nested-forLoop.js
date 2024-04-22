
        function nestedLoops() {
            for (let i = 1; i <= 5; i++) {
                let output = '';
                for (let j = 1; j <= 5 - i; j++) {
                    output += '.';
                };
                for (let k = 1; k <= i; k++) {
                    output += i.toString();
                };
                console.log(output);
            };
        };
        nestedLoops();
    