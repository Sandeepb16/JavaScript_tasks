// var age=+prompt("enter your age");
// var years=age<18?'not eglib': 'your eglib';
// console.log(years);



var leapyear=+prompt("enter year");
// var a= leapyear%4 
// var b=leapyear%400 && leapyear%100;
// a , b = 0? 'it is leap year': b > 0? 'it is leap year':'not aleap year';

(y=leapyear%4==0)?'it leap year': (y=leapyear%400==0) && (y=leapyear%100==0)?'its leap year': 'not a leap year';  
console.log(y)