//    CHP # 5
// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
//2. Repeat task1 for subtraction, multiplication, division & modulus.
//                           ANS
// var num1 = +prompt("enter num")
// var num2 = +prompt("enter num 2")
// var calc = num1 + num2
// var calc2 = num1 * num2
// var calc3 = num1 / num2
// var calc4 = num1 % num2
//  document.write("the additions is" +" "+calc + ", the multiplication is" +" "+ calc2 + ", the division is" +" "+calc3 +", the modulas is" +" "+ calc4 )


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
//                      ANS
// var num = +null
// document.write("value after variable dec is" +" "+ num)
// num = 5
//  document.write(", value after initialization "+ num)
// ++num
// document.write(", value after increment is " + num)
// num = num + 7
// document.write(", value after addition is " + num)
// --num
// document.write(", value after decrement is " + num)
// var calc = num % 3
// document.write(", The remainder is : " + calc )


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie.
//                    ANS
// var cost = 600
// var priceForTickets = 5 * cost
// document.write("price for buying 5 tickets is " + priceForTickets )


// 5. Write a script to display multiplication table of any
// number in your browser.
//                    ANS
// var table = "table of 2;<br>2x1=1<br>2x2=4<br>2x3=6<br>2x4=8<br>2x5=10<br>2x6=12<br>2x7=14<br>2x8=16<br>2x9=18<br>2x10=20<br>2x11=22<br>2x12=24\n"
// document.write(table)


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
//                     ANS
// var C = 40
// var F = (C * 9 / 5) + 32
// document.write(C+" is "+ F +"<br>")
// F = 70
// C = (F-32)* 5 / 9
// document.write(F +" is " + C)


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
//                     ANS
// var itm1 = 490
// var quan1 = 3
// var itm2 = 699
// var quan2 = 2
// var Scharges = 150
// var total = (itm1 * quan1) + (itm2 * quan2)
// document.write("your Total is = " + total)


// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
//                      ANS
// var obt = +prompt("marks obtained")
// var total = +prompt("total marks for test")
// var percentage = (obt/total)*100
// document.write("your percentage is " + percentage + "%")


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
//                      ANS
// var pkr = (10*104.80) + (25*28)
// document.write("Total currency we have is " + pkr)


// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
//                       ANS
// var calc = ((6+5)*10)/2
// document.write("ans is " + calc)


// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
//                       ANS
// var year = 2023
// var biyear = 2006
// var age = year - biyear
// document.write("age is " + age)


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
//                       ANS
// var π = 3.14
// var r = 9
// var circumference = 2*π*r
// var area = π * r * r 
// document.write("radius = "+r+", <br>circumference is, " + circumference + "<br>area is " + area)





//                  CHP 6-9
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
//                 ANS
// var a = 10
// document.write('value for a is ' + a)
// ++a
// document.write('value for ++a is' + a)
// document.write('<br>value for a++ is' + a++)
// document.write('<br>value after execution is' + a)
// document.write("<br>value for --a is" + --a)
// document.write('<br>valur for a-- is' + a--)
// document.write('<br>value after executions' + a)


// 3. Write a program that takes input a name from user &
// greet the user.
//                 ANS
// var name = prompt('what is your name')
// alert("hello " + name)


// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.
//                 ANS
// COULDNT SOLVE IT


//6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)
//                  ANS
// var sub1 = prompt("enter sub1 name")
// var sub2 = prompt("enter sub2 name")
// var sub3 = prompt("enter sub3 name")
// var mk1 = +prompt("enter marks obtained in sub 1")
// var mk2 = +prompt("enter marks obtained in sub 2")
// var mk3 = +prompt("enter marks obtained in sub 3")
// var totalmk = 100
// var perc1 = (mk1/totalmk)*100
// var perc2 = (mk2/totalmk)*100
// var perc3 = (mk3/totalmk)*100
// var totalPerc = ((mk1 + mk2 + mk3)/300)*100
// document.write("marks and perc obtained in " + sub1 +" "+ mk1 +" "+ perc1)
// document.write("<br>marks and perc obtained in " + sub2 +" "+ mk2 +" "+ perc2)
// document.write("<br>marks and perc obtained in " + sub3 +" "+ mk3 +" "+ perc3)
// document.write("<br>overall percentage is " + totalPerc)





//                   CHP # 9-11
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
//                   ANS
// “Welcome to city of lights”
// var city = prompt("enter your favourite city from Pakistan")
// var display = "welcome to the city of lights"
// var req = "karachi"
// if (req == city) {    
// document.write(display)
// }
// else{
//     document.write("this website is only for karachites sorry")
// }


// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
//                    ANS
// var gender = prompt("pls enter your gender male or female")
// var m = "male"
// var f = "female"
// if (gender == m) {
// document.write("hello sir")
// }
// else if(gender == f){
//     document.write("hello mam")
// }
// else{
//     document.write("there are only two genders")
// }


// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
//                    ANS
// var colour1 = "red"
// var colour2 = "yellow"
// var colour3 = "green"
// var currentcolour = prompt("what is the colour of the traffic light red green or yellow")
// if (currentcolour == colour1) {
//     document.write("you need to stop")
// } 
// else if (currentcolour == colour2){
//     document.write("get ready to move")
// }
// else if (currentcolour == colour3){
//     document.write("you can move")
// }
// else{
//     document.write("traffic light only have three colours")
// }


// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”
//                     ANS
// var fuel = +prompt("enter current fuel in your car")
// if(fuel <= 0.25){
//     document.write("please refuel your car")
// }
// else{
//     document.write("you have enough fuel")
// }


// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// User Input & Conditional Statement | JAVASCRIPT

// Page 2 of 4

// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
// alert("car is smaller than cat");
//                           ANS
// a = displayed
// b = not displayed
// c = condition 2 and 4 will be displayed only
// d = displayed
// e = not displayed
// f = displayed


// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
//                          ANS
// var mk1 = +prompt("enter marks for subject 1")
// var mk2 = +prompt("enter marks for subject 2")
// var mk3 = +prompt("enter marks for subject 3")
// var total = mk1 + mk2 + mk3
// var perc = (total/300)*100
// if (perc >= 80) {
//     var grade = "A+"
//     document.write("TOTAL MKS = 300 " + "<br>marks obtained = " + total + "<br>percentage =" + perc + "<br>grade = " + grade + "<br>remarks = Excellent ")
// }
// else if(perc >= 70){
//     grade = "A"
//     document.write("TOTAL MKS = 300 " + "<br>marks obtained = " + total + "<br>percentage =" + perc + "<br>grade = " + grade + "<br>remarks = G00D ")
// }
// else if(perc >= 60){
//     grade = "B"
//     document.write("TOTAL MKS = 300 " + "<br>marks obtained = " + total + "<br>percentage =" + perc + "<br>grade = " + grade + "<br>remarks = You Need to Improve ")
// }
// else{
//     grade = "fail"
//     document.write("TOTAL MKS = 300 " + "<br>marks obtained = " + total + "<br>percentage =" + perc + "<br>grade = " + grade + "<br>remarks = Sorry ")
// }


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
//                      ANS
// var secret = 7
// var close = 6
// var guess = +prompt("guess a number between 1 to 10") 
// if (guess == secret) {
//     document.write("BINGO!")
// }
// else if (guess == close){
//     document.write("VERY CLOSE TO THE ANSWER")
// }
// else{
//     document.write("try again")
// }


// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.
//                       ANS
// var num = +prompt("enter a number")
// var calc = num%3
// if (calc == 0) {
//     document.write("divisible by 3")
// }
// else{
//     document.write("not divisible by 3")
// }


// 9. Write a program that checks whether the given input is an
// even number or an odd number.
//                       ANS
// var num = +prompt("enter num you want to check if even or odd")
// var calc = num%2
// if (calc == 0) {
//     document.write("even")
// }
// else{
//     document.write("odd")
// }


// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
//                        ANS
// var temp = +prompt("enter current temp in C'")
// if (temp > 40) {
//     document.write("“It is too hot outside.”")
// }
// else if (temp > 30){
//     document.write('“The Weather today is Normal.”')
// }
// else if (temp > 20){
//     document.write('“Today’s Weather is cool.”')
// }
// else if (temp > 10){
//     document.write("“OMG! Today’s weather is so Cool.”")
// }
// else{
//     document.write("Its freezing cold outside")
// }


// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.
//                         ANS
var num1 = +prompt("Enter num1")
var num2 = +prompt("Enter num2")
var Operation = prompt("Enter operation +, -, *, /, %")
if (Operation == "+") {
    var calc = num1 + num2   
     document.write(calc)
}
else if (Operation == "-"){
     calc = num1 - num2
     document.write(calc)
}
else if (Operation == "*"){
    calc = num1 * num2
    document.write(calc)
}
else if (Operation == "/"){
    calc = num1 / num2
    document.write(calc)
}
else{
    calc = num1 % num2
    document.write(calc)
}