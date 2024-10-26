$(".openIcon").on("click",function(){
    $(".open").css("left","0px")
});
$(".icon").on("click",function(){
    $(".open").css("left","-270px")
});


$(".about h3").on("click",function(){
    $(this).next().slideToggle(900)
    $("p").not($(this).next()).slideUp(900)
})

$("textarea").on("keyup",function(){

    var count = $(this).val().length;
    $(".count").text(
        100-count <=0? 0:100-count
    )
})




$(document).ready(function() {
    // Set the event date ( YYYY-MM-DD)
    const eventDate = new Date("2024-12-31").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance >= 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            $('#days').text(days);
            $('#hours').text(hours);
            $('#minutes').text(minutes);
            $('#seconds').text(seconds);
        } else {
            $('#countdown').text("The event has started!");
        }
    }

    setInterval(updateCountdown, 1000);
});























 /*$(document).ready(function() {
            var days = 4;
            var hours = 0;
            var minutes = 0;
            var seconds = 6;

            function calculate() {
                setTimeout(calculate, 1000);
                $('#showDate').html(` <div class="container">
            <div class="row">
                <div class="col-md-3 text-center">
                    <div class="inner">
                        <h1 class="text-primary">${days}</h1>
                        <p>Days</p>
                    </div>
                </div>
                <div class="col-md-3 text-center">
                    <div class="inner">
                        <h1 class="text-primary">${hours}</h1>
                        <p>Hours</p>
                    </div>  
                </div>
                <div class="col-md-3 text-center">
                    <div class="inner">
                        <h1 class="text-primary">${minutes}</h1>    
                        <p>Minutes</p>
                    </div>
                </div>
                <div class="col-md-3 text-center">
                    <div class="inner">
                        <h1 class="text-primary">${seconds}</h1>
                        <p>Seconds</p>
                    </div>
                </div>
            </div>
       </div>`);
                seconds--;
                if (seconds < 0) {
                    seconds = 59;
                    minutes--;
                    if (minutes < 0) {
                        hours--;
                        minutes = 59;
                        if (hours < 0) {
                            days--;
                            hours = 23;
                            if (days < 0) {
                                days = 0;
                                hours = 0;
                                minutes = 0;
                                seconds = 0;
                            }
                        }
                    }
                }
            }
            calculate();
        });*/





