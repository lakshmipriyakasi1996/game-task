$(document).ready(function () {
    var score=0;
    time = 10;

    $("button").click(function () { 
        score = score +5;
        $("h1").html(score);
    });
    // setTimeout(() => {
        // $("button").hide();
    // }, 10000);

    var interval = setInterval(function() {
        time = time - 1;
        $("#time").html(time);
        if (time == 0) {
            clearInterval(interval);
            $("button").hide();
        }
    }, 1000                                                            );
});