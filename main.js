
// szachownica
// let space = "";
// let sign = "* ";
// let size = 10;

// for(let i = 1; i <= size; i++){
//     if(i % 2 == 0){
//         space += " ";
//     }
//     space += sign;
//     for(let i = size; i <= size; i++ ){
//         space += sign.repeat(size) + "\n";
        
//     }
// }

// console.log(space);

// POTĘGOWANIE W REKURENCJI

// function power(base, exponent){
//     if(exponent == 0){
//         return 1;
//     } else {
//         return base * power(base, exponent - 1) ;
//     }
// }

// console.log(power(2, 5));

// KANAŁ O WSZYSTKIM, REKURENCJA - rekurencja
// to wywoływanie samej funkcji przez samą siebie

// let result = document.getElementById("result");

// function silnia(n){
//     if(n == 1){
//         return 1;
//     } else {
//         return n * silnia(n - 1);
//     }
// }

// result.innerHTML += "silnia = " + silnia(4)

// // 4 * 3 * 2 * 1  

// REKURENCJA CIĄG DALSZY

// JEŻELI N TO 1, ZATRZYMAJ SIĘ
// JEŻELI N JEST PARZYSTE, POWTÓRZ DZIAŁANIE DLA N/2
// JEŻELI N JEST NIEPARZYSTE, POWTÓRZ DZIAŁANIE DLA 3N + 1

// function collatz(n){
//     if(n == 1){
//         return 0;
//     }

//     return n % 2 == 0 ? collatz(n/2) + 1 :
//      collatz(3 * n + 1 ) + 1;

// }

// console.log(`ilość kroków: ${collatz(21)}`);
// 


// rekurencja liczby parzyste NIEPARZYSTE

// function evenIs(n){
//     if(n == 0){
//     return true;        
//     } else if (n == 1){
//         return false;
//     } else if (n < 0){
//         return evenIs(n - 1);
//     } else {
//         return evenIs(n - 2);
//     }
// }

// console.log(evenIs(11));

function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4