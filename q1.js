let day ;
let daysOfWeek = ["monday", "tuesday", "wensday", "thursday", "friday", "saturday", "sunday"];
function getSleepHours(day){
  if(day === "monday"){
    return 8;
  }
  else if(day === "tuesday"){
    return 7;
  }
  else if(day === "wednesday"){
    return 6;
  }
  else if(day ==="thusaday"){
    return 5;
  }
  else if(day === "friday"){
    return 4;
  }
  else if(day === "saturday"){
    return 9;
  }
  else{
    return 9;
  }
}
console.log(getSleepHours('tuesday'));
// console.log(getSleepHours('tuesday'));
function getActualSleepHours() {
    let totalSleepHours = 0;

    for (let i = 0; i < daysOfWeek.length; i++) {
        totalSleepHours += getSleepHours(daysOfWeek[i]);
    }

    return totalSleepHours;
}

console.log(getActualSleepHours());
let idealSleepHours = 8;
function getIdealSleepHours() {
  let idealHours = 12;
  return idealHours * daysOfWeek.length;
}

console.log(getIdealSleepHours());
function   calculateSleepDebt(){
  let actualSleepHours = getActualSleepHours(8);
  let  idealSleepHours = getIdealSleepHours(8);
  if(actualSleepHours === idealSleepHours){
    console.log("you got" + (idealSleepHours - actualSleepHours) +"user got the perfect amount of sleep");
    
  }
  else if (actualSleepHours > idealSleepHours){
    console.log("you got"+ (idealSleepHours - actualSleepHours)+"the user got more sleep than needed");
  }
  else{
    console.log("you got" + (idealSleepHours - actualSleepHours) +"the console that the user should get some rest.");
  }
}calculateSleepDebt();
