
// On page load
window.onload = function () {
    var options = {
        width: "100%",
        height: "100%",
        channel: "triptychfestival",
        parent: "triptychfestival.co.uk",
        controls: false,
    }
    player = new Twitch.Player("plyr", options)
    player.setVolume(0);
    player.setMuted(true);



    var testPeriodStart     = new Date(Date.UTC(2020, 11, 1, 16, 52, 0));
    var testPeriodEnd       = new Date(Date.UTC(2020, 11, 1, 16, 52, 15));

    var mondayShowStart     = new Date(Date.UTC(2020, 11, 1, 18, 50));
    var mondayShowEnd       = new Date(Date.UTC(2020, 11, 1, 20, 20));

    var tuesdayShowStart    = new Date(Date.UTC(2020, 11, 2, 18, 50));
    var tuesdayShowEnd      = new Date(Date.UTC(2020, 11, 2, 20, 20));

    var wednesdayShowStart  = new Date(Date.UTC(2020, 11, 3, 18, 50));
    var wednesdayShowEnd    = new Date(Date.UTC(2020, 11, 3, 20, 20));

    setInterval(function() {
        console.log("Scheduler running")

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
            player.setVolume(1);
            player.setMuted(false);

            console.log("Currently in show")
        }

        // Not during a show?
        else {
            document.getElementById("countdown-container").style.visibility='visible';
            document.getElementById("video-container").style.visibility='hidden';
            player.setVolume(0);
            player.setMuted(true);

            console.log("Not in show")
        }
    }, 500);
    
};