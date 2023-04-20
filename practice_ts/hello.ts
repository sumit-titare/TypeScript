console.log("Hello World!");

function greet(person, date) {
    console.log(`Hello ${person}, today is ${date}`);
}

greet('Sumit', Date());

// Annotated parameters
function greetWithType(person: string, date: Date){
    console.log(`Hello ${person}, today is ${date.toDateString}`);
}
greetWithType("Sumit", new Date());

// function return type annotated
function getFavourateNumber(): number {
    return 21;
}

// Contextual Typing also applies to Anonymous functions
const names = ['Sumit', 'Saurabh', 'Vinod', 'Anjali'];

names.forEach(s => {
  console.log(s.toLocaleUpperCase());
});

// Object Type: The parameter's type annotation is an object type

function printCordinate(point: {x:number; y:number}){
  console.log(`x-cordinate : ${point.x}`);
  console.log(`y-cordinate : ${point.y}`);
}
printCordinate({x:101, y:111});


//Optional parameter
function printFullName(firstName: string, lastName?:string){
  console.log(`Your FullName is: ${firstName} ${lastName}`);
}
printFullName('Sumit', 'Titare');
printFullName('Sumit');

//Union Type
const printId = (id: number | string) => {
    console.log(id);
}
printId(21);
printId("21");

// TypeScript will only allow an operation if it is valid for every member of the union.
// For example, if you have the union string | number, you can’t use methods that are only available on string:

// function printId(id: number | string) {
//     console.log(id.toUpperCase());
//   Property 'toUpperCase' does not exist on type 'string | number'.
//     Property 'toUpperCase' does not exist on type 'number'.
  
//  }
const printIdModified = (id: number | string) => {
    typeof id === 'string' ? console.log(id.toUpperCase()) : console.log(id);
}
printIdModified(21);
printIdModified('21');


// Type Aliases:

type Point = {
  x: number;
  y: number;
}

function printCordinatePoint(point:Point){
    console.log(`x-cordinate : ${point.x}`);
    console.log(`y-cordinate : ${point.y}`);
}
printCordinatePoint({x: 21, y:11});

// Interfaces: An interface declaration is another way to name an object type.

interface Cordinate{
  x: number;
  y: number;
}
function locateCordinate(cordinate:Cordinate){
    console.log(`x-cordinate : ${cordinate.x}`);
    console.log(`y-cordinate : ${cordinate.y}`);
}
locateCordinate({x: 21, y:11});

// TYPE ASSERTIONS:

// Sometimes you will have information about the type of a value that TypeScript can’t know about.

// For example, if you’re using document.getElementById, 
// TypeScript only knows that this will return some kind of HTMLElement, 
// but you might know that your page will always have an HTMLCanvasElement with a given ID.

// In this situation, you can use a type assertion to specify a more specific type:

const myCanvas = document.getElementById('myCanvas') as HTMLCanvasElement;

const mainCanvas = <HTMLCanvasElement>document.getElementById('mainCanvas');

// #########################################################################################

//Non-null Assertion Operator (Postfix!)

// TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking. 
// Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined:

function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}

