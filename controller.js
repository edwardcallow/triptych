
// On page load
(function() {
    var testPeriodStart     = new Date('December 1, 2020 04:30:00');
    var testPeriodEnd       = new Date('December 1, 2020 04:31:00');

    var mondayShowStart     = new Date('December 1, 2020 18:50:00');
    var mondayShowEnd       = new Date('December 1, 2020 20:20:00');

    var tuesdayShowStart    = new Date('December 2, 2020 18:50:00');
    var tuesdayShowEnd      = new Date('December 2, 2020 20:20:00');

    var wednesdayShowStart  = new Date('December 3, 2020 18:50:00');
    var wednesdayShowEnd    = new Date('December 3, 2020 20:20:00');

    setInterval(function() {
        var now = Date.now();

        var duringTest      = (now > testPeriodStart && now < testPeriodEnd);
        var duringMonday    = (now > mondayShowStart && now < mondayShowEnd);
        var duringTuesday   = (now > tuesdayShowStart && now < tuesdayShowEnd)
        var duringWednesday = (now > wednesdayShowStart && now < wednesdayShowEnd)

        // During one of the shows?
        if  (duringTest || duringMonday || duringTuesday || duringWednesday) {
            // This runs every few seconds during the show
            document.getElementById("countdown-container").style.visibility='hidden';
            document.getElementById("video-container").style.visibility='visible';

            console.log("in show")
        }

        // Not during a show?
        else {
            document.getElementById("countdown-container").style.visibility='visible';
            document.getElementById("video-container").style.visibility='hidden';

            console.log("not in show")
        }
    }, 3000);
    
})();