jQuery(document).ready(function($) {
    $(function() {
        $('#menu-bar').click(function() {
            $('#menu-list').addClass('show-menu');
        });

        $('#close-menu-bar').click(function() {
            $('#menu-list').removeClass('show-menu');
        });
    });
});