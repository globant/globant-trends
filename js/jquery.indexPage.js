(function ( $ ) {

    $.fn.indexPage = function( options ) {

        var settings = $.extend({}, options );

        return this.each(function() {
            var $this = $(this);

            $('.off-canvas-wrap', $this).on('click.off-canvas', function (e) {
                e.preventDefault();
                var $this = $(this);
                $this.foundation('offcanvas', 'hide', 'move-left');
                $this.foundation('offcanvas', 'hide', 'move-right');
            });

            $(document).on('open.fndtn.offcanvas', '[data-offcanvas]', function () {
                $(this).children('.inner-wrap').addClass('off-canvas-open');
                $(this).children('.inner-wrap').children('[data-trigger]').addClass('hide');
            });

            $(document).on('close.fndtn.offcanvas', '[data-offcanvas]', function () {
                $(this).children('.inner-wrap').removeClass('off-canvas-open');
                $(this).children('.inner-wrap').children('[data-trigger]').removeClass('hide');
            });

        });

    };

}( jQuery ));