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

            $this.on('open.fndtn.offcanvas', '[data-offcanvas]', function () {
                var $childrenInnerWrap =  $(this).children('.inner-wrap');
                $this.foundation('offcanvas', 'hide', 'move-left');
                $this.foundation('offcanvas', 'hide', 'move-right');
                $childrenInnerWrap.addClass('off-canvas-open');
                $childrenInnerWrap.children('[data-trigger]').addClass('hide');
            });

            $this.on('close.fndtn.offcanvas', '[data-offcanvas]', function () {
                var $childrenInnerWrap =  $(this).children('.inner-wrap');
                $childrenInnerWrap.removeClass('off-canvas-open');
                $childrenInnerWrap.children('[data-trigger]').removeClass('hide');
            });

        });

    };

}( jQuery ));