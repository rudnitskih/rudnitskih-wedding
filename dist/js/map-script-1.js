/*============================== 
 - MAP JS (DEFAULT MARKER)
 - Template: MARRY - Responsive HTML Wedding Template
 - Author: DoubleEight
 - Version: 1.0.0
 - Website: themeforest.net/user/doubleeight/portfolio
 ================================= */

(function ($) {

    'use strict';


    // CHECK WINDOW RESIZE
    var is_windowresize = false;
    $(window).resize(function () {
        is_windowresize = true;
    });


    // disable scroll https://codepen.io/status201/pen/wKowKz
    $('.map-container')
        .click(function(){
            $(this).find('iframe').addClass('clicked')})
        .mouseleave(function(){
            $(this).find('iframe').removeClass('clicked')});


    //INITIALIZE MAP
    function initialize() {

        // Create an array of styles
        //=======================================================================================
        var styles = [
            {
                stylers: [
                    {hue: "#f98d8a"},
                    {saturation: -50}
                ]
            }
        ];

        // Create a new StyledMapType object, passing it the array of styles,
        // as well as the name to be displayed on the map type control.
        var styledMap = new google.maps.StyledMapType(styles,
            {name: "Styled Map"});


        //DEFINE MAP OPTIONS
        //=======================================================================================
        var mapOptions = {
            zoom: 17,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: new google.maps.LatLng(51.506020, 31.340359),
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            //scaleControl: false,
            streetViewControl: true,
            overviewMapControl: true,
            //rotateControl:true,
            scrollwheel: false
        };

        //CREATE NEW MAP
        //=======================================================================================
        var map = new google.maps.Map(document.getElementById('map-canvas-1'), mapOptions);

        //Associate the styled map with the MapTypeId and set it to display.
        // map.mapTypes.set('map_style', styledMap);
        // map.setMapTypeId('map_style');

        //MARKER ICON
        //=======================================================================================
        //var image = 'facebook30.svg';

        //ADD NEW MARKER
        //=======================================================================================
        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(51.504619, 31.343359),
            map: map,
            title: 'Місце церемонії'
        });

        var marker2 = new google.maps.Marker({
            position: new google.maps.LatLng(51.505999, 31.338670),
            map: map,
            title: 'Основний готель'
        });

        //INFO WINDOWS 1
        //=======================================================================================
        var contentString1 = '' +
            '<div class="info-window-wrapper">' +
            '<h6>Церемонія</h6>' +
            '<div class="info-window-desc">Готель Riverside знаходиться на березі річки Десна</div>' +
            '</div>';

        var marker1_infowindow = new google.maps.InfoWindow({
            content: contentString1,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0, -10)
        });

        //OPEN INFO WINDOWS ON LOAD
        marker1_infowindow.open(map, marker1);

        //ON MARKER CLICK EVENTS
        google.maps.event.addListener(marker1, 'click', function () {
            marker1_infowindow.open(map, marker1);
        });


        //INFO WINDOWS 2
        //=======================================================================================
        var contentString2 = '' +
            '<div class="info-window-wrapper">' +
            '<h6>Основна гостиниця</h6>' +
            '<div class="info-window-desc">Заброньоване місце</div>' +
            '<div class="info-window-link"><a href="#" class="grey-link with-underline">Подивитися номери</a></div>' +
            '</div>';

        var marker2_infowindow = new google.maps.InfoWindow({
            content: contentString2,
            maxWidth: 200,
            pixelOffset: new google.maps.Size(0, -10)
        });

        //OPEN INFO WINDOWS ON LOAD
        marker2_infowindow.open(map, marker2);

        //ON MARKER CLICK EVENTS
        google.maps.event.addListener(marker2, 'click', function () {
            marker2_infowindow.open(map, marker2);
        });

        //ON BOUND EVENTS AND WINDOW RESIZE
        //=======================================================================================
        google.maps.event.addListener(map, 'bounds_changed', function () {
            if (is_windowresize) {
                //map.setCenter(marker.getPosition());
                window.setTimeout(function () {
                    map.panTo(marker1.getPosition());
                }, 500);
            }
            is_windowresize = false;
        });
    }

    // LOAD GMAP
    google.maps.event.addDomListener(window, 'load', initialize);
})(jQuery);