console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    console.log(`Count: ${count}.`);
    if (count < 0){
        count *= -1;
    }
    for(let odd = 0; odd <= count; odd++){
        if(odd % 2 != 0){
            console.log(odd);
        }
    }
}
printOdds(-15);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    let aboveSixteen = `"Congrats ${userName}, you can drive!"`
    let belowSixteen = `"Sorry ${userName}, but you need to wait until you're 16."`
    if (userName == null || age ==null){
        console.log(`Name: ${userName}   Age: ${age}.`);
        console.log(`"Please enter both a name and age."`);
    }
    else{
        console.log(`Name: ${userName}   Age: ${age}.`);
        if (age >= 16){
            console.log(aboveSixteen);
        }
        else{
            console.log(belowSixteen);
        }
    }
    
}
checkAge();
checkAge("Jeremy");
//checkAge(28);
checkAge("Jeremy", 28);
checkAge("Jeremy", 8);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function whichQuadrant(x, y){
    if( x == 0 && y == 0){
        console.log(`"(${x},${y}) is in the center."`);
    }
    else if( x == 0 ){
        console.log(`"(${x},${y}) is on the x axis."`);
    }
    else if( y == 0 ){
        console.log(`"(${x},${y}) is on the y axis."`);
    }
    else if( x > 0 && y > 0){
        console.log(`"(${x},${y}) is in Quadrant 1."`);
    }
    else if( x < 0 && y > 0){
        console.log(`"(${x},${y}) is in Quadrant 2."`);
    }
    else if( x < 0 && y < 0){
        console.log(`"(${x},${y}) is in Quadrant 3."`);
    }
    else if( x > 0 && y < 0){
        console.log(`"(${x},${y}) is in Quadrant 4."`);
    }
    else{
        console.log("Please enter both an x and y coordinate.")
    }
}
whichQuadrant(0, 0);
whichQuadrant(0, 1);
whichQuadrant(1, 0);
whichQuadrant(2, 3);
whichQuadrant(-3,2);
whichQuadrant(-1, -2);
whichQuadrant(3, -1);
whichQuadrant();

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function typeOfTriangle(x, y, z){
    console.log(x, y, z);
    if(x + y <= z || x + z <= y || y + z <= x){
        console.log("Invalid Triangle.");
    }
    else{
        console.log("Makes a Triangle.")
        if (x == y && y == z && x == z){
            console.log("All sides are equal, forms an Equilateral Triangle.");
        }
        else if (x == y || y == z || x == z){
            console.log("Two sides are equal, forms an Isosceles Triangle.");
        }
        else{
            console.log("No sides are equal, forms a Scalene Triangle.");
        }
    }
}
typeOfTriangle(1, 2, 4);
typeOfTriangle(2, 2, 2);
typeOfTriangle(3, 3, 4);
typeOfTriangle(2, 3, 4);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function feedback(planLimit, day, usage){
    let month = 30;
    let daysLeft = month - day;
    let userAverage = usage / daysLeft;
    let monthAverage = planLimit / month;
    let dataLeft = planLimit - usage;
    let dataOverUsed = (userAverage * month) - planLimit;
    let dataUnderUsed = planLimit - (userAverage * month);
    let recomendedUsage = (planLimit - usage) / daysLeft;

    console.log(`Plan Limit: ${planLimit}, Day: ${day}, Usage: ${usage}`);
    console.log("---text");

    if (usage >= planLimit){
        console.log("You are out of data.")
    }
    else{
        if (day <= month){
            console.log(`${day} days used, ${daysLeft} days remaining.`);
        }

        console.log(`Average daily use: ${monthAverage} GB/day.`);

        if (userAverage > monthAverage){
            console.log(`You're EXCEEDING your average daily use (${userAverage} GB/day), continuing this high usage, you'll exceed your data plan by ${dataOverUsed} GB.`);
            console.log(`You have ${dataLeft} GB left.`);
            console.log(`To stay below your data plan, use no more than ${recomendedUsage} GB/day.`);
        }
        else if(userAverage < monthAverage){
            console.log(`You're UNDER your average daily use (${userAverage} GB/day), continuing this low usage, you'll under exceed your data plan by ${dataUnderUsed} GB.`);
            console.log(`You have ${dataLeft} GB left.`);
            console.log(`To stay above your data plan, use more than ${recomendedUsage} GB/day.`);
        }
        else{
            console.log(`You're on AVERAGE with your average daily use (${userAverage} GB/day, continuing this usage, you'll be on track with your data plan.`);
            console.log(`You have ${dataLeft} GB left.`);
            console.log(`To stay on track, use no more than ${recomendedUsage} GB/day.`);
        }
    }

    

    console.log("------------------------------");
}
feedback(100, 15, 56);
feedback(100, 15, 37);
feedback(100, 15, 50);
feedback(100, 28, 100);



