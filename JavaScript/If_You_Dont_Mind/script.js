function printTime(hour, minute, period){
    timeDescrition = ["5 after", "quarter after",  "half past", "just after", "almost" ]
    periodDescription = ["in the morning", "in the afternoon", "in the evening", "at night"]
    specialDescription = ["noon", "midnight"]
    var tDesc, pDesc, message;

    //Fast Fail Sepecial Messages
    if(hour == 12 && minute == 0){
        if (period == "PM"){
            message = specialDescription[0];
        }
        else {
            message = specialDescription[1];
        }
        console.log(message);
        return;
    }

    //Select timeDescrition
    if(minute == 5){
        tDesc = timeDescrition[0];
    }
    else if(minute == 15){
        tDesc = timeDescrition[1];
    }
    else if(minute == 30){
        tDesc = timeDescrition[2];
    }
    else if(minute < 30){
        tDesc = timeDescrition[3];
    }
    else{
        tDesc = timeDescrition[4];
        hour += 1;
    }

    //Select periodDescription
    if (period == "AM"){
        pDesc = periodDescription[0];
    }
    else if(period == "PM"){
        if(hour < 5){
            pDesc = periodDescription[1];
        }
        else if(hour < 8){
            pDesc = periodDescription[2];
        }
        else{
            pDesc = periodDescription[3];
        }
    }

    //Create Message
    message = "It's " + tDesc + " " + hour + " " + pDesc;
    console.log(message);
    return;
}
//Test Cases:
// var HOUR = 8;
// var MINUTE = 50;
// var PERIOD = "AM";

// var HOUR = 7;
// var MINUTE = 15;
// var PERIOD = "PM";

// var HOUR = 12;
// var MINUTE = 0;
// var PERIOD = "PM";

// var HOUR = 12;
// var MINUTE = 0;
// var PERIOD = "AM";

var HOUR = 2;
var MINUTE = 5;
var PERIOD = "AM";

printTime(HOUR, MINUTE, PERIOD);
