import $ from 'jquery';

$(document).ready(function () {
    $('.trigger-show-password').click(function () {
        $(this).toggleClass('fa-eye fa-eye-slash');

        if ($(this).hasClass('fa-eye')) {
            $('.ms-input__password').attr('type', 'text');
        } else {
            $('.ms-input__password').attr('type', 'password');
        }
    });

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

    /* Function for Upload File */
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            var img_id = $(input).attr('set-to');

            reader.onload = function(e) {
                $('#'+img_id).attr('src', e.target.result);
                $('#'+img_id).css('visibility', 'visible');
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $('.ms-input__file').change(function() {
        readURL(this);
        $(this).parent().find('p, i').css('visibility','hidden');
        $(this).css('z-index', 1);
    });
    /* end Function for Upload File */
});