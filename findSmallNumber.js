

// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে। 

function findSmallNumber (number) {
    
    let samllNumber = number[0] ;
    for ( let i = 1; i<number.length; i++) {
        if (number [i] < samllNumber) {
            samllNumber = number[i];
        }
    }
     return samllNumber ;

}

let numArray = [50 , 52, 54, 55 , 56, 57, 58 , 42 ];
let result = findSmallNumber(numArray);

console.log (result);