// Calculate ratio of occurance elements of array according to their sign

const sample_Array1 = [-4, 3, -9, 0, 4, 1];
function ratio_counter(arr){

let positive_ele_count = 0;
let negative_ele_count = 0;
let zeros_count = 0;
for(let ele of arr){
    if(ele > 0){
        positive_ele_count++;
    }
    else if(ele < 0){
        negative_ele_count++;
    }
    else{
        zeros_count++;
    }
};
let positive_ele_count_ratio = (positive_ele_count/arr.length).toFixed(6);
let negative_ele_count_ratio = (negative_ele_count/arr.length).toFixed(6);
let zeros_count_ratio = (zeros_count/arr.length).toFixed(6);
return `${positive_ele_count_ratio} \n${negative_ele_count_ratio} \n${zeros_count_ratio}`;
}
console.log(ratio_counter(sample_Array1));