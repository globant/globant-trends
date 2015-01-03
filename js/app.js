$(document).foundation({
    offcanvas : {
        // Sets method in which offcanvas opens.
        // [ move | overlap_single | overlap ]
        open_method: 'overlap_single'
    }
});


$('.off-canvas-wrap').on('click', function (e) {
    e.preventDefault();
    $(this).foundation('offcanvas', 'hide', 'offcanvas-overlap-left');
    $(this).foundation('offcanvas', 'hide', 'offcanvas-overlap-right');
});

$('.modal-trigger').on('click', function(e) {
    var modalElement = $(this).attr('href');

    e.preventDefault();
    $(modalElement).toggleClass('hide');
});



$('.multiple-items').slick({
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
        var $slickSlide = $('.slick-slide').children();
        var $tabContentChildrens = $('.tabs-content').children('.content');
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