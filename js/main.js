$(window).load(function(){
    "use strict";

    setTimeout(function(){
        $('#loadingContainer').velocity({
            opacity: "0",
        })
    },1000);

    setTimeout(function(){
        $('.global-overlay').velocity({

            translateX : "100%",
            opacity : "1",

        },

        {
            duration: 1000,
            easing: [0.7,0,0.3,1],
        })
        
        $(".map-container").addClass("fadeInRight").removeClass('opacity-0');

    },1000);

    setTimeout(function(){
        $('#left-side').velocity({

            opacity : "1",

            complete: function(){

            setTimeout(function() {
                $('.text-intro').each(function(i) {
                    (function(self) {
                        setTimeout(function() {
                            $(self).addClass('animated-middle fadeInUp').removeClass('opacity-0');
                        },(i*150)+150);
                        })(this);
                    });
                }, 0);
            }

        },

        {
            duration: 1000,
            easing: [0.7,0,0.3,1],
        })
        
    },1600);

})

$(document).ready(function () {
    $("a#open-more-info").on("click", function () {
        $(".overlay").toggleClass("skew-part");
        $("#right-side").toggleClass("hide-right");
        $("#close-more-info").toggleClass("hide-close");
        $(".mCSB_scrollTools").toggleClass("mCSB_scrollTools-left");
        setTimeout(function () {
            $("#mcs_container").mCustomScrollbar("scrollTo", "#right-side", { scrollInertia: 500, callbacks: !1 });
        }, 350);
    });
    $("button#close-more-info").on("click", function () {
        $(".overlay").addClass("skew-part");
        $("#right-side").addClass("hide-right");
        $("#close-more-info").addClass("hide-close");
        $(".mCSB_scrollTools").removeClass("mCSB_scrollTools-left");
        setTimeout(function () {
            $("#mcs_container").mCustomScrollbar("scrollTo", "#right-side", { scrollInertia: 500, callbacks: !1 });
        }, 350);
    });
    $(function () {
        $("body").bind("mousewheel", function (a) {
            this.scrollTop += a.deltaY * a.deltaFactor * -1;
        });
    });
    var b = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);
    (function () {
        b
            ? ($("body").addClass("scroll-touch"),
              $("a#open-more-info").on("click", function () {
                  event.preventDefault();
                  var a = "#" + this.getAttribute("data-target");
                  $("html, body").animate({ scrollTop: $(a).offset().top }, 500);
              }))
            : $("body").mCustomScrollbar({ scrollInertia: 150, axis: "y" });
    })();
});
