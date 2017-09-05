$( document ).ready(function() {
     $('.blurb-card').on('click', function() {
        var href = $(this).attr('data-href');
        if(typeof href === 'undefined') {
            return;
        }

        window.location = href;
     });
});