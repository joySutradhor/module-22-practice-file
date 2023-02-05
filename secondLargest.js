
// ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো। 


function smallNumber (numbers) {

    let largest1 = numbers[0];
    let largest2 = 0 ;
    for (let i = 1 ; i<numbers.length; i++) {
        if ( numbers[i] > largest1) {
            largest2 = largest1 ;
            largest1 = numbers[i];
        }

        else if (numbers[i] > largest2 && numbers[i] != largest1) {
            largest2 = numbers [i];
        }
    }
    return largest2 ;

}







let numArray = [50 , 52, 54, 55 , 56, 57, 58 , 42 ];
let result = smallNumber(numArray);

console.log (result);


// alternative 

function smallNumber (numbers) {
    let arrSorted  = numbers.sort() ;
    let smallestNumber = arrSorted[arrSorted.length-2] 
   
    return  smallestNumber ;
}

let numsArray = [50 , 22, 84, 75 , 56, 79, 75 , 82 ];
let results = smallNumber(numsArray);

console.log (results);