document.write("<h1>QUESTION 1</h1>");
// Suppose You have an array of object
// var itemsArray = [
// {name:”juice”,price:”50”, quantity:”3”},
// {name:”cookie”,price:”30”, quantity:”9”},
// {name:”shirt”,price:”880”, quantity:”1”},
// {name:”pen”,price:”100”, quantity:”2”}];
// Calculate total price of each item and all items;
var itemsArray = [
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }
];
var totalAllItems = 0;
itemsArray.forEach(function (item) {
    var totalItemPrice = item.price * item.quantity;
    console.log("Total price for ".concat(item.name, ": ").concat(totalItemPrice));
    totalAllItems += totalItemPrice;
});
console.log("Total price for all items: ".concat(totalAllItems));
document.write("<h1>QUESTION 2</h1>");
// 2. Create an object with properties name, email, password, age,
// gender, city, country.
// Check if age and country properties exist in object or not.
// Also check firstName and lastName properties in object.
var user = {
    name: "John Doe",
    email: "john@example.com",
    password: "12345",
    age: 25,
    gender: "male",
    city: "New York",
    country: "USA"
};
// Check for properties
console.log("age" in user ? "Age exists" : "Age does not exist");
console.log("country" in user ? "Country exists" : "Country does not exist");
console.log("firstName" in user ? "firstName exists" : "firstName does not exist");
console.log("lastName" in user ? "lastName exists" : "lastName does not exist");
document.write("<h1>QUESTION 3</h1>");
// 3. Create a constructor function with some properties. Now
// create multiple records using the constructor.
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
var product1 = new Product("Laptop", 1500, 2);
var product2 = new Product("Phone", 800, 5);
console.log(product1);
console.log(product2);
document.write("<h1>QUESTION 4</h1>");
// 4. Suppose you want to check population of your area, their
// educations and professions.
// Create a constructor function which holds following
// properties:
// Name, gender, address, education, profession,
// Enter all records one by one.
// Hint:
//  use select box for education and profession,
//  use radio box for gender
// Bonus : use can use localStorage to save records.
function Person(Name, gender, address, education, profession) {
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.education = education;
    this.profession = profession;
}
// Example of adding a new person
var person1 = new Person("Alice", "female", "123 Main St", "Bachelor's", "Engineer");
console.log(person1);
