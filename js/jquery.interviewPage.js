(function ( $ ) {

    $.fn.interviewPage = function( options ) {

        var settings = $.extend({}, options );

        return this.each(function() {
            var $this = $(this);

            $('.multiple-items', $this).slick({
                infinite: false,
                arrows: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                slide: "li",
                draggable: false,
                touchMove: false,
                touchThreshold: 10,
                responsive: [
                    {
                        breakpoint: 1025, // Only Landscape Tablet
                        settings: {
                            slidesToShow: 3,
                            arrows:false
                        }
                    },
                    {
                        breakpoint: 769, // Only Portrait Tablet
                        settings: {
                            slidesToShow: 2,
                            arrows:false
                        }
                    },
                    {
                        breakpoint: 480, // Only Portrait Mobile
                        settings: {
                            slidesToShow: 1,
                            arrows:false
                        }
                    },
                    {
                        breakpoint: 640, // Only Landscape Mobile
                        settings: {
                            slidesToShow: 4,
                            arrows:false
                        }
                    }
                ],
                onInit: function () {
                    // Tabs Functionality
                    var $slickSlide = $('.slick-slide', $this).children();
                    var $tabContentChildrens = $('.tabs-content', $this).children('.content');
                    var $tabContentId;
                    var groupElement;

                    function removeActive (element1, element2) {
                        groupElement = element1.add(element2);
                        groupElement.removeClass('active');
                    }

                    function addActive (element1, element2) {
                        groupElement = element1.add(element2);
                        groupElement.addClass('active');
                    }

                    $slickSlide.on("click", function(e){
                        e.preventDefault();

                        $tabContentId = $(this).attr('href');

                        removeActive($slickSlide.parent(), $tabContentChildrens);
                        addActive($(this).parent(), $($tabContentId));


                    });
                }
            });
        });

    };

}( jQuery ));