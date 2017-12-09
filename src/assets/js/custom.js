import $ from 'jquery';

$(document).ready(function () {
    /*Function for drawer*/
    $('.ms-burger').click(function () {
        $('body').css({
        'overflow-y': 'hidden',
        'position': 'fixed'
        });
        $('.ms-drawer').css('left', '0%');
        $('.ms-overlay').css('left', '0%');
    });

    function closeDrawer () {
        $('body').css({
        'overflow-y': 'visible',
        'position': 'relative'
        });
        $('.ms-drawer').css('left', '-100%');
        $('.ms-overlay').css('left', '-100%');
    }

    $('.ms-overlay').click(closeDrawer);
    /*end Function for drawer*/
});