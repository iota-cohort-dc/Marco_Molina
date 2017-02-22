var daysUntilMyBirthday = 60;

function howManyDays(daysUntilMyBirthday){
    for (var i=daysUntilMyBirthday; i >= 0; i--){
        if( daysUntilMyBirthday > 30){
            console.log(daysUntilMyBirthday + " days until my birthday. Such a long time... :(");
        }
        else if(daysUntilMyBirthday >= 5){
            console.log(daysUntilMyBirthday + " days until my birthday!");
        }
        else if(daysUntilMyBirthday > 0){
            console.log(daysUntilMyBirthday + " DAYS UNTIL MY BIRTHDAY!!!");
        }
        else{
            console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
            console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
            console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
        }
        daysUntilMyBirthday--;
    }
}
howManyDays(daysUntilMyBirthday);
