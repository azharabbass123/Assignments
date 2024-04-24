// Find the number of items sold with wrong prices.

let productsArray = ['eggs', 'milk', 'cheese'];
let productPricesArray = [2.89, 3.29, 5.79];
let productSoldArray = ['eggs', 'eggs', 'cheese', 'milk']
let soldPriceArray = [2.89, 2.99, 5.97, 3.29];
let wrongItem = [];

function wrong_priced_items(prodctArr, prodctPrcArr, prodSoldArr, soldPrcArr){
    let product_prices = {};
    let sold_product_prices = {};

    function convertToObj(a, b) {
        if (a.length != b.length || 
            a.length == 0 || 
            b.length == 0) {
            return null;
        }
        let obj = {};
     
        // Using the foreach method
        a.forEach((k, i) => 
                  { obj[k] = b[i] })
        return obj;
    }
    
    function countDifferentValues(obj1, obj2) {
        let count = 0;
        // Iterate through the keys of obj1
        for (let key in obj2) {
            // Check if the key exists in obj2
            if (key in obj1) {    
                // Compare the values corresponding to the key
                if (obj1[key] != obj2[key]) {
                    wrongItem.push(key);
                    count++; // Increment count if values are different
                }
            } else{
                count++;
            }
        }

        return count;
    }
    product_prices = convertToObj(prodctArr, prodctPrcArr);
    sold_product_prices = convertToObj(prodSoldArr, soldPrcArr);
    let wrongCount = 0;
    wrongCount = countDifferentValues(product_prices, sold_product_prices);
    
    
    return wrongCount;
}
const numberOfWrongPriceItems = wrong_priced_items(productsArray,
     productPricesArray,
      productSoldArray,
       soldPriceArray)
console.log(`There are ${numberOfWrongPriceItems} items sold at wrong price: \n ${wrongItem}.`);