
// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে। 

function smallNumber (num1, num2, num3) {
    if (num1 > num2 && num1 > num3 ) {
        return num1;
    }
    else if ( num2 > num3 ) {
        return num2

    }
    else{
        return num3 ;
    }
}

let isSmallNumber = smallNumber(50 , 70 , 80);
console.log(isSmallNumber);
