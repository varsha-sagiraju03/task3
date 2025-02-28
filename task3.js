// 1. What will be the output of the following code and why?
// let score = 75;
// let grade;
// if (score >= 90) {
//  grade = "A";
// } else if (score >= 80) {
//  grade = "B";
// } else if (score >= 70) {
//  grade = "C";
// } else if (score >= 60) {
//  grade = "D";
// } else {
//  grade = "F";
// }
// console.log(grade);
// if (grade !== "F" ? score > 80 : false) {
//  console.log("Excellent performance");
// } else {
//  console.log("Keep working hard");
// } 
// output will be keep working hard because grade will print C then it gors to the if condition C!==F 
//  returns true then it checks score >80 is false  then it will print keep working hard

// let authenticated = true;
// let premium = false;
// let admin = false;
// console.log(authenticated && (premium || admin) ? "Full Access" : "Limited Access");
// authenticated = false;
// console.log(authenticated && (premium || admin) ? "Full Access" : "Limited Access");
// //output:Limited Access
// //Reason:console.log: "Full Access" because authenticated is true and premium is true.
// authenticated = true;
// premium = true;
// console.log(authenticated && (premium || admin) ? "Full Access" : "Limited Access");
// output is Fill Access  "Full Access" again because the values remain unchanged.

// 3
// let temperature = 25;
// let humidity = 80;
// let precipitation = 60;
// let result;
// if (temperature > 30) {
//  if (humidity > 90) {
//  result = "Stay indoors";
//  } else if (precipitation > 80) {
//  result = "Take an umbrella";
//  } else {
//  result = "Enjoy the warm weather";
//  }
// } else if (temperature > 20) {
//  if (humidity > 70 && precipitation > 50) {
//  result = "Expect rain soon";
//  } else if (humidity <= 70 && precipitation <= 50) {
//  result = "Perfect weather";
//  } else {
//  result = "Changeable conditions";
//  }
// } else {
//  result = "Bring a jacket";
// }
// console.log(result);
// the output will be expect rain soon beacuse it checks the temperature >30 is false it comes out of if block then checks the 
// else if statement the condition is true as  temperature is  greater than 20 which is 25
// it goes inside else if,if condition it satisfies the if statement which is
// humidity >70 && preciptation >50 is true so it will print expect rain soon

// 4
// let userAge = 19;
// let hasParentalConsent = false;
// let isSubscribed = true;
// let message;
// if (userAge >= 18) {
//  message = "Adult content accessible";
// } else if (userAge >= 13) {
//  if (hasParentalConsent) {
//  message = "Teen content accessible with consent";
//  } else {
//  message = "Parental consent required";
//  }
// } else {
//  message = "Content not accessible";
// }
// if (isSubscribed) {
//  if (userAge < 18 && !hasParentalConsent) {
//     message = "Subscribe status pending parental approval";
//     } else {
//     message += " with premium features";
//     }
//    }
//    console.log(message);
// the output will be adult content accessible  with premium features because it satisfies the if condition which 
// is greater than 18 it prints adult content accesible then it checks the if condition of isSubscribed which is true
// then checks the condition which is userage is less than 18 is false && !nothasParentalConsent which is also false 
// so it will print else statement which is message=adult content accesible +with premium feature which is message is 
// adult content accessible with premium features

// 5
// let a = 5, b = 10, c = 15;
// let result = "";
// if (a < b) {
//  if (b < c) {
//  a = b;
//  if (a < c) {
//  b = c;
//  if (b > a) {
//  result += "Path 1 ";
//  c = a;
//  }
//  }
//  } else {
//     result += "Path 2 ";
//  c = a;
//  }
// } else {
//  result += "Path 3 ";
//  a = c;
// }
// if (a == 10 && b == 15) {
//  result += "Condition X met";
// } else if (a == 5 && c == 5) {
//  result += "Condition Y met";
// } else {
//  result += "No conditions met";
// }
// console.log(`a=${a}, b=${b}, c=${c}`);
// console.log(result);
// result will be a is 10 b is 15 c is 10 , result is  path1 condition y met because a is less than b which is
// 5 less than 10 it goes inside if statement it checks b <c which is 10 < 15,it goes inside which is 
// a is 10 then checks another if statment a=10 < c=15 which is true  then goes inside 
// statement b=c which is b value is 15 then b=15>a=10 which is true then it will print result + path1 
// in which is result is empty it will print path1 & the value of c is a which is c=10 & then it checks the if condition
// a==10 which is true & b==15 which is true it print the result + condition X met so result will be path1 condition x met
// the value of a=10 b =15 c=10

// 6
// let num1 = 25; 
// let num2 = 40; 
// let greatest = num1 > num2 ? num1 : num2 > num1 ? num2 : "Both numbers are equal";
// console.log('The greatest number is: ${greatest}');
//output: The greatest number is: ${greatest}

// 7
// let num3 = Number(prompt("Enter first number:"));
// let num4 = Number(prompt("Enter second number:"));
// let num5 = Number(prompt("Enter  third number:"));
// let greatest1 = Math.max(num3, num4, num5);
// console.log(`The greatest number is: ${greatest1}`);
// Enter first number:10
// Enter the second number:11
// Enter the third number:12
// The greatest number is:12

//8
// let age = Number(prompt("Enter your age:"));
// if (age > 18 && age < 90) {
//     console.log("Eligible to Vote");
// } else {
//     console.log("Not Eligible to Vote");
// }
//output:
// Enter your age:24
//Eligible to Vote


// 9
// undefined is when we dont want to initialize the value & 
// null is defined as when we dont want to initialize the value but have to give some value then use null

// 11
// let ageMine=23;
// let License=true;
// if(ageMine>18 , License){
//     console.log('person can drive');
// }
// else{
//     console.log('person cannot drive');
// }

// 13
let myAge =23;
// myAge = 23;

if (myAge < 13) {
    console.log('I am a child');
} else if (myAge >= 13 && myAge <= 19) {
    console.log('I am a teenager');
} else {
    console.log('I am an adult');
}

// 12 & 14
let score=85;
let attendance=75;
let extraCredit=true;
if((score>80&&attendance>80)||extraCredit){
    console.log('student is passed');
}
else{
    console.log('student is failed');
}

// 15
let temperature=35;
let isHot=temperature>30;
console.log(isHot);