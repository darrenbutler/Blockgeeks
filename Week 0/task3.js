/*You'll be given a date as a string (not a Date object). 
The date will always be formatted as YYYY/MM/DD. 
You'll be expected to parse the given string and produce a human readable date.

Expected Output
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/

var talkingCalendar = function(date) { 
    
  var day = "";  
  var month = "";
  var year = "";
  var readableDate;
  
  

  // Put day of month into day variable. If the number in index 8 is 0, just put in the number at index 9
  day = date.charAt(8) + date.charAt(9);    
  
  //Determine the ordinate of the day
  switch(day.charAt(1)){
    case '1':
      // If it's 11, use th otherwise it should be st
      if (day.charAt(0) === 1) { 
        day += "th";
      } else {
        day += "st";
      }
      
      break;

    case '2':
    if (day.charAt(0) === 1) { 
        day += "th";
      } else {day += "nd";}      
      break;

    case '3':
      day += "rd";
      break;

    default:
      day += "th";
      break; //I don't think the break is needed, but beetter safe than sorry
  }

  month = date.charAt(5) + date.charAt(6);
  //Get the month
  switch(month) {
    case "01":
      month = "January";
      break;

    case "02":
      month = February;
      break;

    case "03":
    month = "March";
    break;

    case "04":
    month = "April";
    break;

    case "05":
    month = "May";
    break;

    case "06":
    month = "June";
    break;

    case "07":
    month = "July";
    break;

    case "08":
    month = "August"
    break;

    case "09":
    month = "September";
    break;

    case "10":
    month = "October";
    break;

    case "11":
    month = "November";
    break;

    case "12":
    month = "December";
    break;
  }
  

  //Add characters from date to the year
  //Put the characters for year into a variable
  for (var i = 0; i < 4; i++) {
    year += date.charAt(i); //Add characters in index 0 to 3 for the year
  }

  readableDate = month + " " + day + ", " + year;

  return readableDate;

}

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
