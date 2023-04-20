console.log("Hello World!");
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date));
}
greet('Sumit', Date());
// Annotated parameters
function greetWithType(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString));
}
greetWithType("Sumit", new Date());
// function return type annotated
function getFavourateNumber() {
    return 21;
}
// Contextual Typing also applies to Anonymous functions
var names = ['Sumit', 'Saurabh', 'Vinod', 'Anjali'];
names.forEach(function (s) {
    console.log(s.toLocaleUpperCase());
});
// Object Type: The parameter's type annotation is an object type
function printCordinate(point) {
    console.log("x-cordinate : ".concat(point.x));
    console.log("y-cordinate : ".concat(point.y));
}
printCordinate({ x: 101, y: 111 });
//Optional parameter
function printFullName(firstName, lastName) {
    console.log("Your FullName is: ".concat(firstName, " ").concat(lastName));
}
printFullName('Sumit', 'Titare');
printFullName('Sumit');
//Union Type
var printId = function (id) {
    console.log(id);
};
printId(21);
printId("21");
