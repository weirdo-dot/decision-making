// Leap Year Checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Ticket Pricing
function ticketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}

// Test the functions
let year = parseInt(prompt("Enter a year:"));
if (isLeapYear(year)) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}

let userAge = parseInt(prompt("Enter your age:"));
console.log("The ticket price for a " + userAge + "-year-old is $" + ticketPrice(userAge) + ".");


//Recursive Fibonacci Function
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
console.log(fibonacci(7)); // Output will be 13



//Recursive Power Function
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent < 0) {
        return 1 / power(base, -exponent);
    } else {
        return base * power(base, exponent - 1);
    }
}

// Example usage:
console.log(power(2, 5)); // Output will be 32
console.log(power(3, -2)); // Output will be 0.1111111111111111


