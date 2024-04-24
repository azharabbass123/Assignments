// Find repeted value in given array and return an object with string and count of repetition

var sample_Array = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig']

function frequency_counter(arr){
    const count = {};

for (let ele of arr) {
    if (count[ele]) {
        count[ele] += 1;
    } else {
        count[ele] = 1;
    }
}
 
 return count;
}
console.log(frequency_counter(sample_Array));
