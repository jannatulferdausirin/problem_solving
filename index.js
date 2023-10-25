// ==========problem 1 ========
// ===multi stage conditions===
// check-out mark-sheet number to gpa...
// a+Grade =80;
// aGrade =60;
// bGrade =50;
// cGrade =40;
// dGrade =39;
let result = 33;


if (result < 0 || result > 100) {
    console.log('type a valid numbers')
} else if (result >= 80 && result<=100){
    console.log('A+ Grade peyecho')
}
else if(result>= 60 && result<=79){
    console.log('A Grade peyecho')
}
else if(result>= 50 && result<=59){
    console.log('B Grade peyecho')
}
else if(result>= 39 && result <= 49) {
    console.log('C Grade peyecho')
} else {
    console.log('you are fail')
}

// ===problem 2 ======
// print largest number among three...
let a = 113;
let b = 79;
let c = 45;

if (a > b && a > c) {
    console.log('largest number a');
} else if (b > a && b > c) {
    console.log('largest number b');
}
// else if(c>a && c>b){
//    console.log('largest number c');
// }
 else {
    console.log('c is largest');
}
// =========problem 3======
// triangle is isosceles or not..
let side1 = 9;
let side2 = 8;
let side3 = 10;


if (side1 == side2 && side1 == side3 && side3 == side1) {
    console.log("triangle is equilateral")
} else if ((side1 == side2) || (side2 == side3) || (side1 == side3)) {
    console.log("triangle is scalene")
} else {
    console.log("triangle is isosceles")
};
// ==================namta===============

let inputBox = document.querySelector('.inputbox');
let btn = document.querySelector('.btn');
let error = document.querySelector('.error');
let positive_number =document.querySelector('.positive_number');
let resultOut = document.querySelector('.result');

btn.addEventListener('click',function(){
    // console.log(inputBox.value);
    let namta=inputBox.value;
    if(!namta){
        error.innerHTML ='faka rakha jabe na!';
    }
    else if(namta <0){
        positive_number.innerHTML='plz enter a positive number!';
    }
   else{
    error.innerHTML='';
    positive_number.innerHTML=''
   
    for (let i = 1; i<=10; i++){
        console.log(namta + "x" + i + "=" + namta*i);
     
    }
   }
  
})