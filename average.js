

// ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা। 


function average(numberArray) {
    let total = 0;
    
    for (let i = 0; i < numberArray.length; i++) {
        total = total + numberArray[i];
    }
    total = total / numberArray.length;
    return total;
}





let numArray = [50, 52, 54, 55, 56, 57, 58, 42, 8];
let result = average(numArray);

console.log(result);