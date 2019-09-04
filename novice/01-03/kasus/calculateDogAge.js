var age = prompt("Age :  ")


function calculateDogAge(age) {
    var dogYears = 7 * age;
    document.write("Your doggie is " + dogYears + " years old in dog years!");
}

calculateDogAge(age);