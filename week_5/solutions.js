console.log("----------------------------------");
console.log(" ***** LOOPS ****** ");
console.log("----------------------------------");

// todo 
//! ornek 1
// const meyve = ["Muz", "Portakal", "Elma", "Kiraz","Şeftali"];
 
// var i = 0;  
 
// while (i < meyve.length) {
 
//    let a = meyve[i];

//     console.log(a);
   
//     i++;
// }

// todo 
//! ornek 2

// let j = 0;

// do{

     
    
    
// x = Math.floor(Math.random() * Math.floor(100));

//     j++;

// }while(x!=50);
// console.log(`${j} times you guessed`);

 // todo 
//! ornek 3

//  let i = 1;

//  let sum =0;

//  while(i<=10){
//      sum+=i
//      i++;
//  }
//  console.log(sum);


 // todo 
//! ornek 4


//  let i = 1;

// let faktoriel=1

//  while(i<=5){
//      faktoriel*=i
//      i++;
//  }
//  console.log(faktoriel);


 // todo 
//! ornek 5

// let i =0;

// while(i<=10){
//     console.log(`girdiginiz sayi ${i}`);
//     i++;
// }


 // todo 
//! ornek 6

// const primeNum = +(prompt("bir sayi giriniz"))

// let isPrime = true

// if(primeNum < 2){
//     console.log("enter a bigger number");
// }else{for(i=2;i<primeNum; i++){if (primeNum % i===0){
//         console.log(`${primeNum} is not a prime number ${i}`);
//         isPrime= false;
//         break;
//     }}}

    
// if(isPrime ===true){
// console.log(`${primeNum} is a prime number`);
// }
// todo 
//! ornek 7

// const grade = +prompt("bir sayi giriniz")

// do {
    
//     +prompt("bir sayi giriniz")
//     ;
// }while(grade<0 ||  grade>100);
// console.log("tebrikler");

 let grade = +prompt("bir sayi giriniz")
counter = 0

while(grade>0){
    grade=Math.floor(grade/10);
    counter++;
}console.log(counter);