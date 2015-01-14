(function ( $ ) {

    $.fn.videoPage = function( options ) {

        var settings = $.extend({}, options );

        return this.each(function() {
            var $this = $(this);

            $('.modal-trigger', $this).on('click.position',function(){
                var $parentContainer = $(this).parents('.video-row');

                $('html, body').animate({
                    scrollTop: $parentContainer.offset().top
                }, 10);
            });

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