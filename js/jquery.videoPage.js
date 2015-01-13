(function ( $ ) {

    $.fn.videoPage = function( options ) {

        var settings = $.extend({}, options );

        return this.each(function() {
            var $this = $(this);

            $('.modal-trigger', $this).on('click.modal', function(e) {
                var $modalElement = $(this).siblings('.flex-video');

                e.preventDefault();
                toggleModal($modalElement);
            });

            $('.close-modal', $this).on('click.modal', function(e) {
                var $modalElement = $(this).parent();

                e.preventDefault();
                toggleModal($modalElement);
            });

            function toggleModal(element) {
                element.toggleClass('hide');
            }
        });

    };

}( jQuery ));