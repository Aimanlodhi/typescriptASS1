document.write("<h1>QUESTION 1</h1>");
// Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;
const ItemsArray = [
    {name: "juice", price: 50, quantity: 3},
    {name: "cookie", price: 30, quantity: 9},
    {name: "shirt", price: 880, quantity: 1},
    {name: "pen", price: 100, quantity: 2}
]
let TotalAllItems = 0;

ItemsArray.forEach(item => {
    const totalItemPrice = item.price * item.quantity;
    console.log(`Total price for ${item.name}: ${totalItemPrice}`);
    TotalAllItems += totalItemPrice;
});

console.log(`Total price for all items: ${TotalAllItems}`);

document.write("<h1>QUESTION 2</h1>");
// 2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.
const User = {
    name: "John Doe",
    email: "john@example.com",
    password: "12345",
    age: 25,
    gender: "male",
    city: "New York",
    country: "USA"
};

// Check for properties
console.log("age" in User ? "Age exists" : "Age does not exist");
console.log("country" in User ? "Country exists" : "Country does not exist");
console.log("firstName" in User ? "firstName exists" : "firstName does not exist");
console.log("lastName" in User ? "lastName exists" : "lastName does not exist");



document.write("<h1>QUESTION 3</h1>");
// 3. Create a constructor function with some properties. Now
// create multiple records using the constructor.
function Product1(Name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
const Product2 = new Product1("Laptop", 1500, 2);
const Product3 = new Product2("Phone", 800, 5);
console.log(Product1);
console.log(Product2);

document.write("<h1>QUESTION 4</h1>");
// 4. Suppose you want to 1check population of your area, their
// educations and professions.
// Create a constructor function which holds following
// properties:
// Name, gender, address, education, profession,
// Enter all records one by one.
// Hint:

//  use select box for education and profession,
//  use radio box for gender

// Bonus : use can use localStorage to save records.
function Person1(Name, gender, address,education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}

const person2 = new Person1("Alice", "female", "123 Main St", "Bachelor's", "Engineer");
console.log(person2);




document.write("<h1>QUESTION #1</h1>");
// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
function power(a, b) {
    return Math.pow(a, b);
}
console.log(power(2, 3)); 


document.write("<h1>QUESTION #2</h1>");
// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2020)); // Output: true
console.log(isLeapYear(2021)); // Output: false


           document.write("<h1>QUESTION #3</h1>");
// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
function CalculateS(a, b, c) {
    return (a + b + c) / 2;
}

function CalculateArea(a, b, c) {
    const s = CalculateS(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

console.log(CalculateArea(3, 4, 5));


            document.write("<h1>QUESTION #4</h1>");
// 4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction.
function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
    const s = calculateS(a, b, c);
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

console.log(calculateArea(3, 4, 5));


document.write("<h1>QUESTION #3</h1>");


function calculateAverage(marks) {
    return marks.reduce((acc, mark) => acc + mark, 0) / marks.length;
}

function calculatePercentage(marks) {
    const total = marks.length * 100;
    const obtained = marks.reduce((acc, mark) => acc + mark, 0);
    return (obtained / total) * 100;
}

function mainFunction(marks) {
    const avg = calculateAverage(marks);
    const percentage = calculatePercentage(marks);
    console.log(`Average: ${avg}`);
    console.log(`Percentage: ${percentage}%`);
}

mainFunction([80, 90, 85]);


        document.write("<h1>QUESTION #5</h1>");
// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) return i;
    }
    return -1;
}
console.log(customIndexOf("hello", "e")); // Output: 1
console.log(customIndexOf("hello", "x")); // Output: -1


       document.write("<h1>QUESTION #6</h1>");
// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.
function removeVowels(sentence) {
    return sentence.replace(/[aeiouAEIOU]/g, '');
}

console.log(removeVowels("This is a test sentence."));



          document.write("<h1>QUESTION #7</h1>");
// 7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// “Pleases read this application and give me gratuity”
// Such occurrences are ea, ea, ui.
function countVowelPairs(text) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < text.length - 1; i++) {
        if (vowels.includes(text[i]) && vowels.includes(text[i + 1])) {
            count++;
            console.log(`Found vowel pair: ${text[i]}${text[i + 1]}`);
        }
    }

    return count;
}

console.log(countVowelPairs("Pleases read this application and give me gratuity"));


          document.write("<h1>QUESTION #8</h1>");
        //   8. The distance between two cities (in km.) is input through the
        //   keyboard. Write four functions to convert and print this
        //   distance in meters, feet, inches and centimeters.
          function toMeters(km) {
            return km * 1000;
        }
        
        function toFeet(km) {
            return km * 3280.84;
        }
        
        function toInches(km) {
            return km * 39370.1;
        }
        
        function toCentimeters(km) {
            return km * 100000;
        }
        
        const distanceInKm = 5;
        console.log("Meters:", toMeters(distanceInKm));
        console.log("Feet:", toFeet(distanceInKm));
        console.log("Inches:", toInches(distanceInKm));
        console.log("Centimeters:", toCentimeters(distanceInKm));


        document.write("<h1>QUESTION #9</h1>");
  // 9. Write a program to calculate overtime pay of employees.
  // Overtime is paid at the rate of Rs. 12.00 per hour for every hour
  // worked above 40 hours. Assume that employees do not work
  // for fractional part of an hour.
  function calculateOvertimePay(hoursWorked) {
    const overtimeRate = 12;
    const overtimeHours = hoursWorked > 40 ? hoursWorked - 40 : 0;
    return overtimeHours * overtimeRate;
}

console.log(calculateOvertimePay(45));


document.write("<h1>QUESTION #10</h1>");
// 10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.
function calculateNotes(amount) {
    const notes = { 100: 0, 50: 0, 10: 0 };
    if (amount % 10 !== 0) {
        console.log("Invalid amount. Must be a multiple of 10.");
        return;
    }

    notes[100] = Math.floor(amount / 100);
    amount %= 100;

    notes[50] = Math.floor(amount / 50);
    amount %= 50;

    notes[10] = Math.floor(amount / 10);

    console.log(`100s: ${notes[100]}, 50s: ${notes[50]}, 10s: ${notes[10]}`);
}

calculateNotes(470);