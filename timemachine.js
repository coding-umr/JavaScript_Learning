timeTravel(1999, 1, 1);
timeTravel(2100, 1, 1);
timeTravel(2000, 13, 1);
timeTravel(2000, 1, 31);
timeTravel(2000, 2, 30);
timeTravel(2024, 2, 29);
timeTravel(2024, 2, 28);
timeTravel(2023, 2, 29);
timeTravel(2023, 2, 28);

function timeTravel(year, month, days) {
  if (year >= 2000 && year <= 2099) {
    if (month >= 1 && month <= 12) {
      const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      maxDays = daysInMonth[month - 1];
      if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) maxDays = 29;
      if (days >= 1 && days <= maxDays)
        console.log(
          "The time machine has travlled to??  " + `${year}-${month}-${days}`
        );
      else console.log("Invalid day input.");
    } else console.log("Entered an invalid Month !!");
  } else console.log("Entered an invalid Year !!");
}
