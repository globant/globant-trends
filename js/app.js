$(document).ready(function(){

    var $document = $(this);

    $document.foundation({
        offcanvas : {
            // Sets method in which offcanvas opens.
            // [ move | overlap_single | overlap ]
            open_method: 'move'
        }
    });

    $('[data-page-name="index"]').indexPage();

    $('[data-page-name="video"]').videoPage();

    $('[data-page-name="interview"]').interviewPage();

});
