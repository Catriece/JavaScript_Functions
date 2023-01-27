console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 0) {
        console.log(`${count} is neither odd or even. It is negative. Input a positive integer please :)`);
    }
    for (let number = 0; number <= count; number++) {
        if (count % 2 == 1) {
            console.log(`${count} is an odd number`);
            break;
        } else if (count % 2 != 1 && count >= 0) {
            console.log(`${count} is an even number (or 0)`)
            break;
        } 
    }
}

printOdds(7); 

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    function aboveSixteen() {
        return `Congrats ${userName}, you can drive!`
    }
    function belowSixteen() {
        return `Sorry ${userName}, but you need to wait until you're 16.`
    }

    if (age == undefined || userName == undefined) {
        return console.log("Please input both your username and age to continue")
    }

    if (age >= 16) {
        console.log(aboveSixteen());
    } else {
        console.log(belowSixteen());
    }

} 

checkAge("Catriece", 18); 


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

 function coordinatePlane(x,y) {
    let n = 1
    if (x == 0 && y == n) {
        console.log(`Coordinate (${x},${y}) is on the x-axis`);
    }
    if (x == n && y == 0) {
        console.log(`Coordinate (${x},${y}) is on the y-axis`);
    }
    if (x > 0 && y > 0) {
        console.log(`Coordinate (${x},${y}) is in Quadrant 1`);
    }
    if (x < 0 && y > 0) {
        console.log(`Coordinate (${x},${y}) is in Quadrant 2`);
    }
    if (x < 0 && y < 0) {
        console.log(`Coordinate (${x},${y}) is in Quadrant 3`);
    }
    if (x > 0 && y < 0) {
        console.log(`Coordinate (${x},${y}) is in Quadrant 4`);
    }
 }

 coordinatePlane(0,1);
 coordinatePlane(1,0);
 coordinatePlane(1,1);
 coordinatePlane(-1,1);
 coordinatePlane(1,-1);
 coordinatePlane(-1,-1);

 // Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleSides(a, b, c) {
    if (a + b < c){
        return (`Triangle (${a}, ${b}, ${c}) is an invalid triangle.`)
    }
    if (a == b && a == c) {
        return (`Triangle (${a}, ${b}, ${c}) is an equilateral triangle.`)
    }
    if (((a == b) && a != c) || ((a == c) && a !=b) || ((b == c) && b!=a)) {
        return (`Triangle (${a}, ${b}, ${c}) is an isosceles triangle.`)
    }
    if (a != b && a != c && b != c) {
        return (`Triangle (${a}, ${b}, ${c}) is a scalene triangle.`)
    }
}

console.log(triangleSides(1, 3, 5));
console.log(triangleSides(3, 3, 5));
console.log(triangleSides(5, 5, 5));
console.log(triangleSides(7, 3, 5));
//console.log(triangleSides(7, 3, 3));
//console.log(triangleSides(4, 4, 4));
//console.log(triangleSides(9, 2, 10));
//console.log(triangleSides(7, 3, 7));
//console.log(triangleSides(8, 8, 8));
//console.log(triangleSides(12, 12, 12));



 // Exercise 5 Section
 console.log("EXERCISE 5:\n==========\n");

function cellphoneUsage(planLimit, day, usage) {
    let planLength = 30;
    let userUsage = usage / day;
    let averageUsage = planLimit / planLength;
    let newAverageUsage = Math.round(((planLimit - usage) / (planLength - day))*100)/100;
    let daysLeft = planLength - day;
    let dataLeft = planLimit - usage;
    let moreDataThanPlanned = (averageUsage * daysLeft) - dataLeft;

    // Over
    if ((usage > (averageUsage * day))) {
        console.log(`You are over your daily average suggested limit. On average, you've used about ${userUsage.toFixed(2)}GB of data a day (${usage} total) and have ${daysLeft} days to go and ${dataLeft}GB of data left in your plan. Continuing this high usage, you'll exceed your data plan by ${moreDataThanPlanned.toFixed(2)}GB. To stay below your data plan use no more than ${newAverageUsage}GB per day for ${daysLeft} days to avoid running out of data!`)
    }

    // Average
    if (usage == (averageUsage * day)) {
        console.log(`You are ${day} days into your 30 day plan with ${daysLeft} days left to go. Your suggested average daily use of data is ${averageUsage.toFixed(2)}GB. You are on track with your average daily use of ${userUsage.toFixed(2)}GB. Keep with this pace to use your data before the end of your plan! `)
    }

    // Below
    if (usage < (averageUsage * day)) {
        console.log(`Your average daily data usage is ${userUsage.toFixed(2)}GB. You have ${dataLeft}GB of data left and ${daysLeft} days left in your plan. You are on a NO DATA ROLLOVER plan o avoid losing data at the end of your plan, use ${newAverageUsage}GB of data a day. `)
    }
    
}

cellphoneUsage(100, 17, 65);
cellphoneUsage(100, 15, 50);
cellphoneUsage(100, 15, 25);