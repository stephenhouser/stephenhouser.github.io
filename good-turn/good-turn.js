
/* detect device */
var ua = navigator.userAgent,
    iphone = ~ua.indexOf('iPhone') || ~ua.indexOf('iPod'),
    ipad = ~ua.indexOf('iPad'),
    ios = iphone || ipad,
    android = ~ua.indexOf('Android');

$(document).bind("mobileinit", function(){
    $.mobile.defaultPageTransition = "fade";
    $.mobile.touchOverflowEnabled = true;
});

function fixFullHeight(page) {
    var $target = page.find('.fullHeight'),
        t_padding = parseInt($target.css('padding-top'))
                    + parseInt($target.css('padding-bottom')),
        w_height = (ios)? screen.height - 65: $(window).height();
        // "-65" is to compensate for url bar. Any better ideas?
        headFootHeight = 0;

    // Get total height for all headers and footers on page
    page.find('[data-role="footer"], [data-role="header"]').each(function() {
        var myTotalHeight = $(this).height()
                            + parseInt($(this).css('padding-top'))
                            + parseInt($(this).css('padding-bottom'));
        headFootHeight += myTotalHeight;
    });

    var the_height = (w_height - headFootHeight);

    page
     .height(w_height)
     .find('.fullHeight')
     .height(the_height - t_padding);
}

$(document).delegate('#good-turn', 'pageshow', function () {
    fixFullHeight($(this));
});

/* ===== Map view ==== */
var map_center;
var map = null;

function make_map(map_element, lat, lng) {
    map_center = new google.maps.LatLng(lat, lng);
    var map_options = {
        zoom: 14,
        center: map_center,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(map_element, map_options);
    return map;
}

$(document).delegate('#world', 'pageshow', function () {
    fixFullHeight($(this));

    var turn_map = document.getElementById("world_map");
    /*
    if (iphone || android) {
        turn_map.style.width = '100%';
        turn_map.style.height = '100%';
    } else {
        turn_map.style.width = '600px';
        turn_map.style.height = '800px';
    }
    */

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( function(position) {
            make_map(turn_map, position.coords.latitude, position.coords.longitude);
        });
    }

    if (!map) {
        make_map(turn_map, 52.636161,-1.133065);
    }
});

$(document).ready(function() {
    // Flip the coin handlers
    $('#coin_container').live("swipeleft", function(){
        $('#coin').toggleClass('flipped');
    });

    $('#coin_container').live("swiperight", function(){
        $('#coin').toggleClass('flipped');
    });

    // Prevent iOS from bouncing side to side with swipe
    document.ontouchmove = function(e) {
        e.preventDefault();
        };
});
